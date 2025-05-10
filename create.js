import fs from 'fs';
import path from 'path';

const INPUT_FOLDER = './files'; // folder path where you have stored .txts
const OUTPUT_FILE = path.join(INPUT_FOLDER, 'articles.js'); //output file, the array

// --- PARSING LOGIC ---

function applyInlineStyling(line) {
  // processing links: $& text & url $
  line = line.replace(/\$\&\s*(.*?)\s*\&\s*(.*?)\s*\$/g, '<a class="lnk" href="$2">$1</a>');
  // processing bold inline
  line = line.replace(/::::(.*?)::::/g, "<b>$1</b>"); // can use regular span class
  // processing underlined inline
  line = line.replace(/:.:(.*?):.:/g, "<u>$1</u>"); // with some styles as well
  // processing italic inline
  line = line.replace(/::(.*?)::/g, "<i>$1</i>");
  // processing red text inline
  line = line.replace(/:\?(.*?):\?/g, "<span class='red-txt'>$1</span>"); //only two colors for demo
  // processing blue text inline
  line = line.replace(/:!(.*?):!/g, "<span class='blue-txt'>$1</span>"); // can have as many as you like
  // processing inline code
  line = line.replace(/<:(.*?):>/g, "<code>$1</code>");
  // processing subscript inline
  line = line.replace(/\^(.*?)\^/g, "<sup>$1</sup>");
  // processing supscript inline
  line = line.replace(/~(.*?)~/g, "<sub>$1</sub>");
  // processing footnote supscript
  line = line.replace(/\^\[(.*?)]/g, '<a class="lnk f-lnk" id="$1" href="#footnote-$1"><sup>$1</sup></a>');
  return line;
}

function parseTextFile(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const lines = text.split("\n");

  let articles = [];
  let currentArticle = null;
  let codeBlockActive = false;
  let codeContent = [];
  let footnoteBlockActive = false;
  let footnoteContent = [];

  const paragraphPrefixes = {
    ":: ": { style: "italic", className: "ita-txt" },
    "::: ": { style: "highlight", className: "hlt-txt" },
    ":::: ": { style: "bold", className: "bld-txt" },
    ":.: ": { style: "underline", className: "und-txt" },
    ":? ": { style: "custom-red", className: "red-txt" },   //might not need these colors
    ":! ": { style: "custom-blue", className: "blue-txt" }, // paragraphs, so you may
    ":# ": { style: "custom-green", className: "green-txt" }, // just remove them
    ":/ ": { style: "custom-purple", className: "purple-txt" },
    ":\\ ": { style: "custom-white", className: "white-txt" },
  };

  lines.forEach((rawLine) => {
    const line = rawLine.trim();

    if (line === "<>") {
      codeBlockActive = true;
      codeContent = [];
      return;
    }

    if (line === "</>" && codeBlockActive) {
      codeBlockActive = false;
      if (currentArticle) {
        currentArticle.content.push({ type: "code", value: codeContent.join("\n") });
      }
      return;
    }

    if (codeBlockActive) {
      codeContent.push(rawLine); // preserve original formatting including leading spaces
      return;
    }

    // handle footnote block start
  if (line === "[]") {
    footnoteBlockActive = true;
    footnoteContent = [];
    return;
  }

  // handle footnote block end
  if (line === "[/]" && footnoteBlockActive) {
    footnoteBlockActive = false;


    const parsedFootnotesData = footnoteContent.map((raw) => {
      const match = raw.match(/^(\d+)\.\s+(.*)/);
      if (match) {
        return { number: match[1], text: applyInlineStyling(match[2]) };
      }
      return null;
    }).filter(Boolean); // remove any null entries
    
    if (currentArticle) {
      currentArticle.content.push({
        type: "footnotes",
        items: parsedFootnotesData, // store as an array of objects
      });
    }
    return;
  }

  // collect footnote lines
  if (footnoteBlockActive) {
    footnoteContent.push(rawLine);
    return;
  }

    // for those that start with #
    if (line.startsWith("#")) {
      const [keyPart, ...valueParts] = line.split(":");
      const keyName = keyPart.replace("#", "").trim();
      let value = valueParts.join(":").trim();

      if (keyName === "id") {
        if (currentArticle && currentArticle.id) { // ensure previous article had an ID to be valid
          articles.push(currentArticle);
        }
        currentArticle = { id: value, content: [] }; // start a new article
      } else if (currentArticle) {
        if (keyName === "tags" || keyName === "categories") { // add as many as you want with ||
          currentArticle[keyName] = value.split(",").map(item => item.trim());
        } else {
          currentArticle[keyName] = value;
        }
      }
    } else if (line !== "" && currentArticle) {
      let handled = false;

      // checking for paragraph types
      for (const prefix in paragraphPrefixes) {
        if (line.startsWith(prefix)) {
          currentArticle.content.push({
            type: "paragraph",
            style: paragraphPrefixes[prefix].style,
            className: paragraphPrefixes[prefix].className, // className for direct use if needed
            text: applyInlineStyling(line.substring(prefix.length).trim()),
          });
          handled = true;
          break;
        }
      }
      if (handled) return;

      // for the table
      if (line.startsWith("!-():")) {
        const tableRaw = line.slice(6).trim();
      
        // remove outer brackets
        const entries = tableRaw
          .slice(1, -1) // remove [ ]
          .split("), (")
          .map(row => row.replace(/^\(|\)$/g, "").split(",").map(cell => cell.trim()));
      
        const [headers, ...rows] = entries;
      
        currentArticle.content.push({
          type: "table",
          className: "data-table",
          headers,
          rows
        });
        handled = true;
      }
      if (handled) return;
      // Lists
      // not giving them className here, giving it below in the HTML template instead
      if (line.startsWith("-: ")) {
        currentArticle.content.push({
          type: "list",
          listType: "unordered",
          items: applyInlineStyling(line.substring(3).trim()).split(",").map(item => item.trim()),
        });
        handled = true;
      } else if (line.startsWith("+: ")) {
        currentArticle.content.push({
          type: "list",
          listType: "ordered",
          items: applyInlineStyling(line.substring(3).trim()).split(",").map(item => item.trim()),
        });
        handled = true;
      }
      if (handled) return;

      // Images
      // not giving them className here, giving it below in the HTML template instead
      if (line.startsWith(";; ")) { // Centered image
        currentArticle.content.push({ type: "image", src: line.substring(3).trim(), alignment: "center", alt: "", caption: "" });
        handled = true;
      } else if (line.startsWith(";+ ")) { // Float right
        currentArticle.content.push({ type: "image", src: line.substring(3).trim(), alignment: "right", alt: "", caption: "" });
        handled = true;
      } else if (line.startsWith(";- ")) { // Float left
        currentArticle.content.push({ type: "image", src: line.substring(3).trim(), alignment: "left", alt: "", caption: "" });
        handled = true;
      } else if (line.startsWith(";@ ")) { // Alt text
        const lastContentItem = currentArticle.content[currentArticle.content.length - 1];
        if (lastContentItem && lastContentItem.type === "image") {
          lastContentItem.alt = line.substring(3).trim();
          handled = true;
        }
      } else if (line.startsWith(";! ")) { // Caption text
        const lastContentItem = currentArticle.content[currentArticle.content.length - 1];
        if (lastContentItem && lastContentItem.type === "image") {
          lastContentItem.caption = applyInlineStyling(line.substring(3).trim());
          handled = true;
        }
      }
      if (handled) return;

      // Default: Normal paragraph
      if (!handled && line) { // ensuring line is not empty
        currentArticle.content.push({
          type: "paragraph",
          style: "normal",
          className: "norm-txt",
          text: applyInlineStyling(line),
        });
      }
    }
  });

  if (currentArticle && currentArticle.id) { // push the last article if it's valid
    articles.push(currentArticle);
  }

  return articles;
}

function processAllTextFiles() {
  let allArticles = [];
  const files = fs.readdirSync(INPUT_FOLDER);

  files.forEach(fileName => {
    if (fileName.endsWith('.txt')) {
      const filePath = path.join(INPUT_FOLDER, fileName);
      try {
        const parsedArticles = parseTextFile(filePath);
        allArticles.push(...parsedArticles);
      } catch (error) {
        console.error(`Error parsing file ${filePath}:`, error);
      }
    }
  });

  allArticles.sort((a, b) => (parseInt(b.id, 10) || 0) - (parseInt(a.id, 10) || 0));

  // Creating a JS file
  // For code blocks, we want them to be template literals in the output JS if they are multiline.
  // JSON.stringify will escape newlines. We can use a replacer or handle it during string construction.
  const articlesString = JSON.stringify(allArticles, function(key, value) {
    // A custom replacer can be used if specific string formatting for certain keys is needed.
    // For now, default stringify and then a targeted replace for code blocks might be okay
    // if code blocks are the *only* multiline strings you want as template literals.
    return value;
  }, 2)
  .replace(/"(\w+)":/g, '$1:') // remove quotes around keys (for JS object literal style)
  // This regex for multiline values is tricky. Let's assume code blocks are stored in 'value' key for 'code' type
  // And we want to wrap them in backticks if they contain newlines.
  .replace(/"value":\s*"((?:[^"\\]|\\.)*?\n(?:[^"\\]|\\.)*?)"/gs, (match, group) => {
      // Unescape characters that JSON.stringify escaped for a string literal
      const unescaped = group.replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\r/g, '\r').replace(/\\t/g, '\t');
      return `value: \`${unescaped}\``; // Use backticks for multiline code
  });

  const outputContent = `const articles = ${articlesString};\nexport default articles;`;

  try {
    fs.writeFileSync(OUTPUT_FILE, outputContent);
    console.log(`Saved articles to ${OUTPUT_FILE}`);
  } catch (error) {
    console.error(`Error writing output file ${OUTPUT_FILE}:`, error);
  }
}

// --- HTML RENDERING LOGIC ---

// The article object from the parser above is in a good structure.

const generatePageContent = (article) => {
  // default missing metadata to prevent errors
  const articleTitle = article.m_title || 'Untitled Article';
  const articleMDescription = article.m_desc || 'A really nice article';
  const articleTags = article.tags || [];
  const articleKeywords = article.keywords || '';
  const articleExcerpt = article.excerpt || '';
  const articleDate = article.date || '';
  const articleDateM = article.datem || '';
  const articleImage = article.photo;
  const articleAlt = article.alt;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${articleTitle}</title>
  <meta name="description" content="${articleMDescription}"/>
  <meta name="author" content="Satyam Ghimire">
  <meta name="content-type" content="article">
  <meta name="keywords" content="${articleKeywords}">
  <meta property="og:description" content="${articleMDescription}"/>
  <meta property="og:site_name" content="my great site"/>
  <meta property="og:image" content="${articleImage}"/>
  <meta property="og:image:width" content="600"/>
  <meta property="og:image:height" content="420"/>
  <meta property="og:image:alt" content="${articleAlt}"/>
  <meta property="og:type" content="article"/>
  <meta name="twitter:title" content="${articleTitle}">
  <meta name="twitter:card" content="summary"/>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <article class="content">
    <header class="box">
      <span style="display: block; margin-bottom: 0.5rem;" class="sml-bld">Filed under:</span>
      <ul class="tags">
        ${articleTags.map((tag) =>
          `<li class='tg-lnk sml-bld'><a href="/archive/?tags=${tag}">${tag}</a></li>`
        ).join('')}
      </ul>
      <h1>${article.title || 'Untitled'}</h1>
      <h2 class="subtitle">${articleExcerpt}</h2>
      <span style="display: block;" class="sml-bld">By Satyam Ghimire | Date: <time>${articleDate}</time></span>
      <span style="display: block;" class="sml-bld">Last modified date: <time>${articleDateM}</time></span>
    </header>

    <article class="page">
      ${article.content.map(item => {
        switch (item.type) {
          case "paragraph":
            return `<p class="${item.className || 'norm-txt'}">${item.text}</p>`;
          case "image":
            let imgClassName = "page-img";
            if (item.alignment === "left") imgClassName = "flt-img flt-left page-img";
            if (item.alignment === "right") imgClassName = "flt-img flt-right page-img";
            return `<figure class="${imgClassName}">
              <img src="${item.src}" alt="${item.alt || ''}" class="wd-fix"/>
              ${item.caption ? `<figcaption class="sml-bld"><span>${item.caption}</span></figcaption>` : ""}
            </figure>`;
          case "table":
            const headerHtml = item.headers.map(h => `<th>${h}</th>`).join("");
            const rowsHtml = item.rows.map(
              row => `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`
              ).join("");
           
            return `<table class="${item.className}">
              <thead><tr>${headerHtml}</tr></thead>
              <tbody>${rowsHtml}</tbody>
              </table>`;
          case "list":
            const listTag = item.listType === "ordered" ? "ol" : "ul";
            const listClass = item.listType === "ordered" ? "ol-list" : "ul-list";
            return `<${listTag} class="${listClass}">
              ${item.items.map((li) => `<li>${li}</li>`).join("")}
            </${listTag}>`;
          case "footnotes":
            if (!item.items || item.items.length === 0) return '';
            const footnoteLinks = item.items.map(fn =>
              `<li id="footnote-${fn.number}"><a class="lnk" href="\#${fn.number}">${fn.number}</a>. ${fn.text}</li>`
            ).join("\n");
            return `<div class="footnotes"> <span class="f-span">Footnotes:</span> <ul class="no-deco">\n${footnoteLinks}\n</ul></div>`;          

          case "code":
            // Escape HTML entities in code to prevent rendering as HTML
            // but commenting this out for now as we need it to be processed
            // const escapeHtml = (unsafe) => {
            //     return unsafe
            //          .replace(/&/g, "&amp;")
            //          .replace(/</g, "&lt;")
            //          .replace(/>/g, "&gt;")
            //          .replace(/"/g, "&quot;")
            //          .replace(/'/g, "&#039;");
            // };
            return `${item.value}`;
          default:
            return '';
        }
      }).join('')}
    </article>
  </article>
</body>
</html>
`;
}

// --- MAIN EXECUTION ---

// 1. Process text files and generate articles.js
processAllTextFiles();

// 2. Import the generated articles and create HTML files
// If you are running this in an environment that doesn't resolve this at "runtime" immediately after writing,
// you might need to run the generation and rendering in two separate script executions or handle it differently.
// For simplicity, assuming `articles.js` is created and then immediately usable:
try {
  // Dynamically import the newly created articles.js
  import('./files/articles.js')
    .then(module => {
      const articles = module.default;
    //   if (!fs.existsSync('./output_html')) { // Create output directory if you want
    //     fs.mkdirSync('./output_html');
    //   }

      articles.forEach((article) => {
        if (!article.slug) {
          console.warn(`Article with ID ${article.id} is missing a slug. Skipping.`);
          return;
        }
        const slugParts = article.slug.split('/').filter(Boolean);
        const fileName = `${slugParts.at(-1) || article.id}.html`; // Fallback to ID if slug is weird
        // const filePath = path.join('./output_html', fileName); // Save HTML files in an output folder
        const filePath = fileName; // Save HTML file inside the root folder

        const htmlContent = generatePageContent(article);

        try {
          fs.writeFileSync(filePath, htmlContent, 'utf8');
          console.log(`Created HTML file: ${filePath}`);
        } catch (error) {
          console.error(`Error writing HTML file ${filePath}:`, error);
        }
      });
    })
    .catch(err => {
      console.error("Error dynamically importing articles.js:", err);
      console.error("Please ensure articles.js was generated correctly and is accessible.");
    });

} catch (e) {
    console.error("Failed to initiate HTML generation. Ensure articles.js exists or run the parser first.", e);
}