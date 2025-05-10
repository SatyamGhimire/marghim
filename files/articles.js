const articles = [
  {
    id: "3",
    content: [
      {
        type: "paragraph",
        style: "normal",
        className: "norm-txt",
        text: "Okay, so this is the first paragraph which is normal, normal like in it has no style of any kind except the usual inherited from the <code>body tag</code>. The class <code>norm txt</code> isn't even selected in the <code>styles.css</code> file. It is just here as a demo and I don't know, I am just <a class=\"lnk\" href=\"some-link-here\">typing</a> to make it look like a decent length paragraph. Also, <span class='blue-txt'> <i> <b> this text </b> </i> </span> is an inline bold, italic, and blue colour."
      },
      {
        type: "paragraph",
        style: "bold",
        className: "bld-txt",
        text: "I know Lorem ipsum exists, and I should be <i> better off </i> with that instead of these random sentences, but I like this. Although I am not saying anything, <a class=\"lnk\" href=\"/some/page/here.html\">I am saying something.</a> I wanted to stand out I guess and not be robotic. I hope this is alright. This is the bold paragraph btw, and this has a class of <code>bld-txt</code>. And this is a <span class='red-txt'> red inline </span> text."
      },
      {
        type: "image",
        src: "./assets/flower1.jpg",
        alignment: "center",
        alt: "flower image no 1",
        caption: "very pretty flowers, image by <a class=\"lnk\" href=\"https://www.pexels.com/photo/bed-of-flowers-68507/\">Pixaybay on Pexels</a>"
      },
      {
        type: "paragraph",
        style: "italic",
        className: "ita-txt",
        text: "Okay, italic paragraph here with <code>ita-txt</code> class. This is nice. This is the third sentence of this paragraph, and this could have been the fourth sentence if I had given a full stop instead of the comma. Instead, this is the fourth sentence. Fifth here. And <sup> supscript </sup> here, and <sub> <span class='blue-txt'> subscript </span> </sub> here, and the subscript is even blue. Or this is H<sub>2</sub>O."
      },
      {
        type: "paragraph",
        style: "custom-red",
        className: "red-txt",
        text: "Reddish like blood, or brick. Let's say brick, it's more nice and more safe. I know one shouldn't use the word \"more\" like that. It's bad writing, <a class=\"lnk f-lnk\" id=\"1\" href=\"#footnote-1\"><sup>1</sup></a> and maybe I should've written nicer and safer instead. Bad practice!"
      },
      {
        type: "image",
        src: "./assets/flower2.jpg",
        alignment: "left",
        alt: "flower picture no 2",
        caption: "beautiful flower, image by <a class=\"lnk\" href=\"https://www.pexels.com/photo/bright-flowers-in-garden-19611629/\">kf zhou on Pexels</a>"
      },
      {
        type: "paragraph",
        style: "custom-blue",
        className: "blue-txt",
        text: "Another random paragraph here for demonstration purposes. This has absolutely no meaning and this isn't even building up to anything. This is a totally stupid paragraph that looks blue and bad and isn't necessary at all and is only here to be a <a class=\"lnk\" href=\"https://youtube.com\">placeholder.</a> In short, this is useless but this paragraph didn't ask me to be written. It came here without its consent and now has to endure and suffer, just like <u> all of us </u> I guess. That all of us was inline underline text."
      },
      {
        type: "paragraph",
        style: "custom-white",
        className: "white-txt",
        text: "This is like dark mode but inside the light mode. I have reversed the background and foreground colour for this paragraph and that's why this looks like this. Yeah, this is all nonsense. <a class=\"lnk f-lnk\" id=\"2\" href=\"#footnote-2\"><sup>2</sup></a>"
      },
      {
        type: "paragraph",
        style: "underline",
        className: "und-txt",
        text: "Now I can't not have an underlined paragraph when I have established this zoo already. So this is the reason it exists. Maybe slightly longer as this didn't look nice as compared to other paragraphs. Yeah, now it's better. And below is a table with fruits:"
      },
      {
        type: "table",
        className: "data-table",
        headers: [
          "fruits",
          "quantity",
          "rate"
        ],
        rows: [
          [
            "apple",
            "5kg",
            "Rs 250"
          ],
          [
            "mango",
            "4kg",
            "Rs 120"
          ],
          [
            "orange",
            "10kg",
            "Rs 200"
          ]
        ]
      },
      {
        type: "image",
        src: "./assets/flower3.jpg",
        alignment: "right",
        alt: "flower number 3",
        caption: "pretty pretty, image by <a class=\"lnk\" href=\"https://www.pexels.com/photo/close-up-shot-of-fresh-flowers-11723669/\">Khang  Le on Pexels</a>"
      },
      {
        type: "paragraph",
        style: "custom-purple",
        className: "purple-txt",
        text: "I know this is unfair. Blue paragraph already existed above and I shouldn't have created another blue family paragraph. But what can I do? I can't think of another colour and I think we should make do for now with this biasness. I am sorry. Please imagine this colour as something else, something which will make the distribution fair."
      },
      {
        type: "paragraph",
        style: "custom-green",
        className: "green-txt",
        text: "Green is the color of nature. But really, they are lying. Nature is black. The nature that we think of when we say nature is't nature at all. It's so tiny compared to the real nature out there. To look at the real nature, look up. The stars, planets, black holes, galaxies,<a class=\"lnk f-lnk\" id=\"3\" href=\"#footnote-3\"><sup>3</sup></a> they are the real nature with more coverage. The rivers, the flowers, forests, they take so little space in the pie chart of nature."
      },
      {
        type: "paragraph",
        style: "normal",
        className: "norm-txt",
        text: "Anyway, here are the coloured paragraphs that have appeared, but first enjoy another table some empty items:"
      },
      {
        type: "table",
        className: "data-table",
        headers: [
          "prime",
          "composite",
          "empty_sometime"
        ],
        rows: [
          [
            "2",
            "4",
            "not empty"
          ],
          [
            "3",
            "5",
            "wrong"
          ],
          [
            "7",
            "6",
            ""
          ],
          [
            "11",
            "8",
            ""
          ]
        ]
      },
      {
        type: "list",
        listType: "unordered",
        items: [
          "red paragraph",
          "blue paragraph",
          "green paragraph",
          "purple paragraph",
          "white paragraph"
        ]
      },
      {
        type: "paragraph",
        style: "highlight",
        className: "hlt-txt",
        text: "And this is a highlighted paragraph, and this is now rendered with a border left of 8px, and this might look like a quote by someone really famous or important. But again this is just here for the demonstration purpose and nothing else. Thank you. - by someone famous<a class=\"lnk f-lnk\" id=\"4\" href=\"#footnote-4\"><sup>4</sup></a>."
      },
      {
        type: "code",
        value: "<pre>\n<code>\n\ta = 5\n\t\tb = 10\n\t\t\t\t\t\t\tprint(a+b) \n\t\t\t#commenttttt\n</code>\n</pre>"
      },
      {
        type: "paragraph",
        style: "normal",
        className: "norm-txt",
        text: "I know I could have written better code than above. Although this is all, like I have said already a thousand times, for demonstration purposes, still this is setting the bar so low. I should have thought more. This would give an indentation error. This is extreme laziness. Anyway, below is another list to cheer you up and this time, it is numbered."
      },
      {
        type: "list",
        listType: "ordered",
        items: [
          "number one",
          "number two",
          "are you not entertained?"
        ]
      },
      {
        type: "paragraph",
        style: "custom-blue",
        className: "blue-txt",
        text: "Enjoy another table now please. Yep, this is once again blue color paragraph:"
      },
      {
        type: "table",
        className: "data-table",
        headers: [
          "country",
          "capital",
          "landlocked?",
          "has 'l' in name?"
        ],
        rows: [
          [
            "nepal",
            "kathmandu",
            "yes",
            "yes"
          ],
          [
            "india",
            "new delhi",
            "no",
            "no"
          ],
          [
            "china",
            "beijing",
            "no",
            "no"
          ],
          [
            "england",
            "london",
            "no",
            "yes"
          ],
          [
            "switzerland",
            "geneva",
            "yes",
            "yes"
          ]
        ]
      },
      {
        type: "paragraph",
        style: "bold",
        className: "bld-txt",
        text: "Yep, I think this is it. I know this is missing so many things and features, and can be broken easily. This relies heavily on the way you type and one two enter keys are enough to dismantle this amateur wall.But if you follow the rules strictly, I think this method is quite helpful. Thank you for reading if you are reading this. Bye. Take care."
      },
      {
        type: "footnotes",
        items: [
          {
            number: "1",
            text: "yes this is bad writing, trust me"
          },
          {
            number: "2",
            text: "<a class=\"lnk\" href=\"https://youtube.com\">yep this is nonsense and please click me to find out why</a>"
          },
          {
            number: "3",
            text: "<a class=\"lnk\" href=\"https://wikipedia.org\">galaxies on wikipedia</a>"
          },
          {
            number: "4",
            text: "yes this someone famous really said this"
          }
        ]
      }
    ],
    title: "3 Here comes the title of the page and this sentence has 18 words in it. Isn't that amazing?",
    m_title: "Here comes the title",
    m_desc: "A demo article to perform the demonstration and this is just a placeholder description.",
    excerpt: "This is the subtitle or the excerpt of the page. This can be a little longer than the title but you can have it your own way. This is supposed to hook you further to read the whole thing.",
    slug: "from-drive-art-33333",
    tags: [
      "humour",
      "satire"
    ],
    categories: [
      "nice",
      "article",
      "here"
    ],
    keywords: "key1, key2, key3",
    date: "2024 April 1",
    datem: "2025 April 1",
    pdate: "2024-04-01T09:00:00+05:45",
    mdate: "2025-04-01T09:00:00+05:45",
    photo: "./assets/flower1.jpg",
    alt: "beautiful flowers"
  },
  {
    id: "2",
    content: [
      {
        type: "paragraph",
        style: "normal",
        className: "norm-txt",
        text: "Okay, so this is the first paragraph which is normal, normal like in it has no style of any kind except the usual inherited from the <code>body tag</code>. The class <code>norm txt</code> isn't even selected in the <code>styles.css</code> file. It is just here as a demo and I don't know, I am just <a class=\"lnk\" href=\"some-link-here\">typing</a> to make it look like a decent length paragraph. Also, <span class='blue-txt'> <i> <b> this text </b> </i> </span> is an inline bold, italic, and blue colour."
      },
      {
        type: "paragraph",
        style: "bold",
        className: "bld-txt",
        text: "I know Lorem ipsum exists, and I should be <i> better off </i> with that instead of these random sentences, but I like this. Although I am not saying anything, <a class=\"lnk\" href=\"/some/page/here.html\">I am saying something.</a> I wanted to stand out I guess and not be robotic. I hope this is alright. This is the bold paragraph btw, and this has a class of <code>bld-txt</code>. And this is a <span class='red-txt'> red inline </span> text."
      },
      {
        type: "image",
        src: "./assets/flower1.jpg",
        alignment: "center",
        alt: "flower image no 1",
        caption: "very pretty flowers, image by <a class=\"lnk\" href=\"https://www.pexels.com/photo/bed-of-flowers-68507/\">Pixaybay on Pexels</a>"
      },
      {
        type: "paragraph",
        style: "italic",
        className: "ita-txt",
        text: "Okay, italic paragraph here with <code>ita-txt</code> class. This is nice. This is the third sentence of this paragraph, and this could have been the fourth sentence if I had given a full stop instead of the comma. Instead, this is the fourth sentence. Fifth here. And <sup> supscript </sup> here, and <sub> <span class='blue-txt'> subscript </span> </sub> here, and the subscript is even blue. Or this is H<sub>2</sub>O."
      },
      {
        type: "paragraph",
        style: "custom-red",
        className: "red-txt",
        text: "Reddish like blood, or brick. Let's say brick, it's more nice and more safe. I know one shouldn't use the word \"more\" like that. It's bad writing, <a class=\"lnk f-lnk\" id=\"1\" href=\"#footnote-1\"><sup>1</sup></a> and maybe I should've written nicer and safer instead. Bad practice!"
      },
      {
        type: "image",
        src: "./assets/flower2.jpg",
        alignment: "left",
        alt: "flower picture no 2",
        caption: "beautiful flower, image by <a class=\"lnk\" href=\"https://www.pexels.com/photo/bright-flowers-in-garden-19611629/\">kf zhou on Pexels</a>"
      },
      {
        type: "paragraph",
        style: "custom-blue",
        className: "blue-txt",
        text: "Another random paragraph here for demonstration purposes. This has absolutely no meaning and this isn't even building up to anything. This is a totally stupid paragraph that looks blue and bad and isn't necessary at all and is only here to be a <a class=\"lnk\" href=\"https://youtube.com\">placeholder.</a> In short, this is useless but this paragraph didn't ask me to be written. It came here without its consent and now has to endure and suffer, just like <u> all of us </u> I guess. That all of us was inline underline text."
      },
      {
        type: "paragraph",
        style: "custom-white",
        className: "white-txt",
        text: "This is like dark mode but inside the light mode. I have reversed the background and foreground colour for this paragraph and that's why this looks like this. Yeah, this is all nonsense. <a class=\"lnk f-lnk\" id=\"2\" href=\"#footnote-2\"><sup>2</sup></a>"
      },
      {
        type: "paragraph",
        style: "underline",
        className: "und-txt",
        text: "Now I can't not have an underlined paragraph when I have established this zoo already. So this is the reason it exists. Maybe slightly longer as this didn't look nice as compared to other paragraphs. Yeah, now it's better. And below is a table with fruits:"
      },
      {
        type: "table",
        className: "data-table",
        headers: [
          "fruits",
          "quantity",
          "rate"
        ],
        rows: [
          [
            "apple",
            "5kg",
            "Rs 250"
          ],
          [
            "mango",
            "4kg",
            "Rs 120"
          ],
          [
            "orange",
            "10kg",
            "Rs 200"
          ]
        ]
      },
      {
        type: "image",
        src: "./assets/flower3.jpg",
        alignment: "right",
        alt: "flower number 3",
        caption: "pretty pretty, image by <a class=\"lnk\" href=\"https://www.pexels.com/photo/close-up-shot-of-fresh-flowers-11723669/\">Khang  Le on Pexels</a>"
      },
      {
        type: "paragraph",
        style: "custom-purple",
        className: "purple-txt",
        text: "I know this is unfair. Blue paragraph already existed above and I shouldn't have created another blue family paragraph. But what can I do? I can't think of another colour and I think we should make do for now with this biasness. I am sorry. Please imagine this colour as something else, something which will make the distribution fair."
      },
      {
        type: "paragraph",
        style: "custom-green",
        className: "green-txt",
        text: "Green is the color of nature. But really, they are lying. Nature is black. The nature that we think of when we say nature is't nature at all. It's so tiny compared to the real nature out there. To look at the real nature, look up. The stars, planets, black holes, galaxies,<a class=\"lnk f-lnk\" id=\"3\" href=\"#footnote-3\"><sup>3</sup></a> they are the real nature with more coverage. The rivers, the flowers, forests, they take so little space in the pie chart of nature."
      },
      {
        type: "paragraph",
        style: "normal",
        className: "norm-txt",
        text: "Anyway, here are the coloured paragraphs that have appeared, but first enjoy another table some empty items:"
      },
      {
        type: "table",
        className: "data-table",
        headers: [
          "prime",
          "composite",
          "empty_sometime"
        ],
        rows: [
          [
            "2",
            "4",
            "not empty"
          ],
          [
            "3",
            "5",
            "wrong"
          ],
          [
            "7",
            "6",
            ""
          ],
          [
            "11",
            "8",
            ""
          ]
        ]
      },
      {
        type: "list",
        listType: "unordered",
        items: [
          "red paragraph",
          "blue paragraph",
          "green paragraph",
          "purple paragraph",
          "white paragraph"
        ]
      },
      {
        type: "paragraph",
        style: "highlight",
        className: "hlt-txt",
        text: "And this is a highlighted paragraph, and this is now rendered with a border left of 8px, and this might look like a quote by someone really famous or important. But again this is just here for the demonstration purpose and nothing else. Thank you. - by someone famous<a class=\"lnk f-lnk\" id=\"4\" href=\"#footnote-4\"><sup>4</sup></a>."
      },
      {
        type: "code",
        value: "<pre>\n<code>\n\ta = 5\n\t\tb = 10\n\t\t\t\t\t\t\tprint(a+b) \n\t\t\t#commenttttt\n</code>\n</pre>"
      },
      {
        type: "paragraph",
        style: "normal",
        className: "norm-txt",
        text: "I know I could have written better code than above. Although this is all, like I have said already a thousand times, for demonstration purposes, still this is setting the bar so low. I should have thought more. This would give an indentation error. This is extreme laziness. Anyway, below is another list to cheer you up and this time, it is numbered."
      },
      {
        type: "list",
        listType: "ordered",
        items: [
          "number one",
          "number two",
          "are you not entertained?"
        ]
      },
      {
        type: "paragraph",
        style: "custom-blue",
        className: "blue-txt",
        text: "Enjoy another table now please. Yep, this is once again blue color paragraph:"
      },
      {
        type: "table",
        className: "data-table",
        headers: [
          "country",
          "capital",
          "landlocked?",
          "has 'l' in name?"
        ],
        rows: [
          [
            "nepal",
            "kathmandu",
            "yes",
            "yes"
          ],
          [
            "india",
            "new delhi",
            "no",
            "no"
          ],
          [
            "china",
            "beijing",
            "no",
            "no"
          ],
          [
            "england",
            "london",
            "no",
            "yes"
          ],
          [
            "switzerland",
            "geneva",
            "yes",
            "yes"
          ]
        ]
      },
      {
        type: "paragraph",
        style: "bold",
        className: "bld-txt",
        text: "Yep, I think this is it. I know this is missing so many things and features, and can be broken easily. This relies heavily on the way you type and one two enter keys are enough to dismantle this amateur wall.But if you follow the rules strictly, I think this method is quite helpful. Thank you for reading if you are reading this. Bye. Take care."
      },
      {
        type: "footnotes",
        items: [
          {
            number: "1",
            text: "yes this is bad writing, trust me"
          },
          {
            number: "2",
            text: "<a class=\"lnk\" href=\"https://youtube.com\">yep this is nonsense and please click me to find out why</a>"
          },
          {
            number: "3",
            text: "<a class=\"lnk\" href=\"https://wikipedia.org\">galaxies on wikipedia</a>"
          },
          {
            number: "4",
            text: "yes this someone famous really said this"
          }
        ]
      }
    ],
    title: "2 Here comes the title of the page and this sentence has 18 words in it. Isn't that amazing?",
    m_title: "Here comes the title",
    m_desc: "A demo article to perform the demonstration and this is just a placeholder description.",
    excerpt: "This is the subtitle or the excerpt of the page. This can be a little longer than the title but you can have it your own way. This is supposed to hook you further to read the whole thing.",
    slug: "from-drive-art-2",
    tags: [
      "humour",
      "satire"
    ],
    categories: [
      "nice",
      "article",
      "here"
    ],
    keywords: "key1, key2, key3",
    date: "2024 April 1",
    datem: "2025 April 1",
    pdate: "2024-04-01T09:00:00+05:45",
    mdate: "2025-04-01T09:00:00+05:45",
    photo: "./assets/flower1.jpg",
    alt: "beautiful flowers"
  },
  {
    id: "1",
    content: [
      {
        type: "paragraph",
        style: "normal",
        className: "norm-txt",
        text: "Okay, so this is the first paragraph which is normal, normal like in it has no style of any kind except the usual inherited from the <code>body tag</code>. The class <code>norm txt</code> isn't even selected in the <code>styles.css</code> file. It is just here as a demo and I don't know, I am just <a class=\"lnk\" href=\"some-link-here\">typing</a> to make it look like a decent length paragraph. Also, <span class='blue-txt'> <i> <b> this text </b> </i> </span> is an inline bold, italic, and blue colour."
      },
      {
        type: "paragraph",
        style: "bold",
        className: "bld-txt",
        text: "I know Lorem ipsum exists, and I should be <i> better off </i> with that instead of these random sentences, but I like this. Although I am not saying anything, <a class=\"lnk\" href=\"/some/page/here.html\">I am saying something.</a> I wanted to stand out I guess and not be robotic. I hope this is alright. This is the bold paragraph btw, and this has a class of <code>bld-txt</code>. And this is a <span class='red-txt'> red inline </span> text."
      },
      {
        type: "image",
        src: "./assets/flower1.jpg",
        alignment: "center",
        alt: "flower image no 1",
        caption: "very pretty flowers, image by <a class=\"lnk\" href=\"https://www.pexels.com/photo/bed-of-flowers-68507/\">Pixaybay on Pexels</a>"
      },
      {
        type: "paragraph",
        style: "italic",
        className: "ita-txt",
        text: "Okay, italic paragraph here with <code>ita-txt</code> class. This is nice. This is the third sentence of this paragraph, and this could have been the fourth sentence if I had given a full stop instead of the comma. Instead, this is the fourth sentence. Fifth here. And <sup> supscript </sup> here, and <sub> <span class='blue-txt'> subscript </span> </sub> here, and the subscript is even blue. Or this is H<sub>2</sub>O."
      },
      {
        type: "paragraph",
        style: "custom-red",
        className: "red-txt",
        text: "Reddish like blood, or brick. Let's say brick, it's more nice and more safe. I know one shouldn't use the word \"more\" like that. It's bad writing, <a class=\"lnk f-lnk\" id=\"1\" href=\"#footnote-1\"><sup>1</sup></a> and maybe I should've written nicer and safer instead. Bad practice!"
      },
      {
        type: "image",
        src: "./assets/flower2.jpg",
        alignment: "left",
        alt: "flower picture no 2",
        caption: "beautiful flower, image by <a class=\"lnk\" href=\"https://www.pexels.com/photo/bright-flowers-in-garden-19611629/\">kf zhou on Pexels</a>"
      },
      {
        type: "paragraph",
        style: "custom-blue",
        className: "blue-txt",
        text: "Another random paragraph here for demonstration purposes. This has absolutely no meaning and this isn't even building up to anything. This is a totally stupid paragraph that looks blue and bad and isn't necessary at all and is only here to be a <a class=\"lnk\" href=\"https://youtube.com\">placeholder.</a> In short, this is useless but this paragraph didn't ask me to be written. It came here without its consent and now has to endure and suffer, just like <u> all of us </u> I guess. That all of us was inline underline text."
      },
      {
        type: "paragraph",
        style: "custom-white",
        className: "white-txt",
        text: "This is like dark mode but inside the light mode. I have reversed the background and foreground colour for this paragraph and that's why this looks like this. Yeah, this is all nonsense. <a class=\"lnk f-lnk\" id=\"2\" href=\"#footnote-2\"><sup>2</sup></a>"
      },
      {
        type: "paragraph",
        style: "underline",
        className: "und-txt",
        text: "Now I can't not have an underlined paragraph when I have established this zoo already. So this is the reason it exists. Maybe slightly longer as this didn't look nice as compared to other paragraphs. Yeah, now it's better. And below is a table with fruits:"
      },
      {
        type: "table",
        className: "data-table",
        headers: [
          "fruits",
          "quantity",
          "rate"
        ],
        rows: [
          [
            "apple",
            "5kg",
            "Rs 250"
          ],
          [
            "mango",
            "4kg",
            "Rs 120"
          ],
          [
            "orange",
            "10kg",
            "Rs 200"
          ]
        ]
      },
      {
        type: "image",
        src: "./assets/flower3.jpg",
        alignment: "right",
        alt: "flower number 3",
        caption: "pretty pretty, image by <a class=\"lnk\" href=\"https://www.pexels.com/photo/close-up-shot-of-fresh-flowers-11723669/\">Khang  Le on Pexels</a>"
      },
      {
        type: "paragraph",
        style: "custom-purple",
        className: "purple-txt",
        text: "I know this is unfair. Blue paragraph already existed above and I shouldn't have created another blue family paragraph. But what can I do? I can't think of another colour and I think we should make do for now with this biasness. I am sorry. Please imagine this colour as something else, something which will make the distribution fair."
      },
      {
        type: "paragraph",
        style: "custom-green",
        className: "green-txt",
        text: "Green is the color of nature. But really, they are lying. Nature is black. The nature that we think of when we say nature is't nature at all. It's so tiny compared to the real nature out there. To look at the real nature, look up. The stars, planets, black holes, galaxies,<a class=\"lnk f-lnk\" id=\"3\" href=\"#footnote-3\"><sup>3</sup></a> they are the real nature with more coverage. The rivers, the flowers, forests, they take so little space in the pie chart of nature."
      },
      {
        type: "paragraph",
        style: "normal",
        className: "norm-txt",
        text: "Anyway, here are the coloured paragraphs that have appeared, but first enjoy another table some empty items:"
      },
      {
        type: "table",
        className: "data-table",
        headers: [
          "prime",
          "composite",
          "empty_sometime"
        ],
        rows: [
          [
            "2",
            "4",
            "not empty"
          ],
          [
            "3",
            "5",
            "wrong"
          ],
          [
            "7",
            "6",
            ""
          ],
          [
            "11",
            "8",
            ""
          ]
        ]
      },
      {
        type: "list",
        listType: "unordered",
        items: [
          "red paragraph",
          "blue paragraph",
          "green paragraph",
          "purple paragraph",
          "white paragraph"
        ]
      },
      {
        type: "paragraph",
        style: "highlight",
        className: "hlt-txt",
        text: "And this is a highlighted paragraph, and this is now rendered with a border left of 8px, and this might look like a quote by someone really famous or important. But again this is just here for the demonstration purpose and nothing else. Thank you. - by someone famous<a class=\"lnk f-lnk\" id=\"4\" href=\"#footnote-4\"><sup>4</sup></a>."
      },
      {
        type: "code",
        value: "<pre>\n<code>\n\ta = 5\n\t\tb = 10\n\t\t\t\t\t\t\tprint(a+b) \n\t\t\t#commenttttt\n</code>\n</pre>"
      },
      {
        type: "paragraph",
        style: "normal",
        className: "norm-txt",
        text: "I know I could have written better code than above. Although this is all, like I have said already a thousand times, for demonstration purposes, still this is setting the bar so low. I should have thought more. This would give an indentation error. This is extreme laziness. Anyway, below is another list to cheer you up and this time, it is numbered."
      },
      {
        type: "list",
        listType: "ordered",
        items: [
          "number one",
          "number two",
          "are you not entertained?"
        ]
      },
      {
        type: "paragraph",
        style: "custom-blue",
        className: "blue-txt",
        text: "Enjoy another table now please. Yep, this is once again blue color paragraph:"
      },
      {
        type: "table",
        className: "data-table",
        headers: [
          "country",
          "capital",
          "landlocked?",
          "has 'l' in name?"
        ],
        rows: [
          [
            "nepal",
            "kathmandu",
            "yes",
            "yes"
          ],
          [
            "india",
            "new delhi",
            "no",
            "no"
          ],
          [
            "china",
            "beijing",
            "no",
            "no"
          ],
          [
            "england",
            "london",
            "no",
            "yes"
          ],
          [
            "switzerland",
            "geneva",
            "yes",
            "yes"
          ]
        ]
      },
      {
        type: "paragraph",
        style: "bold",
        className: "bld-txt",
        text: "Yep, I think this is it. I know this is missing so many things and features, and can be broken easily. This relies heavily on the way you type and one two enter keys are enough to dismantle this amateur wall.But if you follow the rules strictly, I think this method is quite helpful. Thank you for reading if you are reading this. Bye. Take care."
      },
      {
        type: "footnotes",
        items: [
          {
            number: "1",
            text: "yes this is bad writing, trust me"
          },
          {
            number: "2",
            text: "<a class=\"lnk\" href=\"https://youtube.com\">yep this is nonsense and please click me to find out why</a>"
          },
          {
            number: "3",
            text: "<a class=\"lnk\" href=\"https://wikipedia.org\">galaxies on wikipedia</a>"
          },
          {
            number: "4",
            text: "yes this someone famous really said this"
          }
        ]
      }
    ],
    title: "1 Here comes the title of the page and this sentence has 18 words in it. Isn't that amazing?",
    m_title: "Here comes the title",
    m_desc: "A demo article to perform the demonstration and this is just a placeholder description.",
    excerpt: "This is the subtitle or the excerpt of the page. This can be a little longer than the title but you can have it your own way. This is supposed to hook you further to read the whole thing.",
    slug: "from-drive-1",
    tags: [
      "humour",
      "satire"
    ],
    categories: [
      "nice",
      "article",
      "here"
    ],
    keywords: "key1, key2, key3",
    date: "2024 April 1",
    datem: "2025 April 1",
    pdate: "2024-04-01T09:00:00+05:45",
    mdate: "2025-04-01T09:00:00+05:45",
    photo: "./assets/flower1.jpg",
    alt: "beautiful flowers"
  },
  {
    id: "1",
    content: [
      {
        type: "paragraph",
        style: "normal",
        className: "norm-txt",
        text: "Okay, so this is the first paragraph which is normal, normal like in it has no style of any kind except the usual inherited from the <code>body tag</code>. The class <code>norm txt</code> isn't even selected in the <code>styles.css</code> file. It is just here as a demo and I don't know, I am just <a class=\"lnk\" href=\"some-link-here\">typing</a> to make it look like a decent length paragraph. Also, <span class='blue-txt'> <i> <b> this text </b> </i> </span> is an inline bold, italic, and blue colour."
      },
      {
        type: "paragraph",
        style: "bold",
        className: "bld-txt",
        text: "I know Lorem ipsum exists, and I should be <i> better off </i> with that instead of these random sentences, but I like this. Although I am not saying anything, <a class=\"lnk\" href=\"/some/page/here.html\">I am saying something.</a> I wanted to stand out I guess and not be robotic. I hope this is alright. This is the bold paragraph btw, and this has a class of <code>bld-txt</code>. And this is a <span class='red-txt'> red inline </span> text."
      },
      {
        type: "image",
        src: "./assets/flower1.jpg",
        alignment: "center",
        alt: "flower image no 1",
        caption: "very pretty flowers, image by <a class=\"lnk\" href=\"https://www.pexels.com/photo/bed-of-flowers-68507/\">Pixaybay on Pexels</a>"
      },
      {
        type: "paragraph",
        style: "italic",
        className: "ita-txt",
        text: "Okay, italic paragraph here with <code>ita-txt</code> class. This is nice. This is the third sentence of this paragraph, and this could have been the fourth sentence if I had given a full stop instead of the comma. Instead, this is the fourth sentence. Fifth here. And <sup> supscript </sup> here, and <sub> <span class='blue-txt'> subscript </span> </sub> here, and the subscript is even blue. Or this is H<sub>2</sub>O."
      },
      {
        type: "paragraph",
        style: "custom-red",
        className: "red-txt",
        text: "Reddish like blood, or brick. Let's say brick, it's more nice and more safe. I know one shouldn't use the word \"more\" like that. It's bad writing, <a class=\"lnk f-lnk\" id=\"1\" href=\"#footnote-1\"><sup>1</sup></a> and maybe I should've written nicer and safer instead. Bad practice!"
      },
      {
        type: "image",
        src: "./assets/flower2.jpg",
        alignment: "left",
        alt: "flower picture no 2",
        caption: "beautiful flower, image by <a class=\"lnk\" href=\"https://www.pexels.com/photo/bright-flowers-in-garden-19611629/\">kf zhou on Pexels</a>"
      },
      {
        type: "paragraph",
        style: "custom-blue",
        className: "blue-txt",
        text: "Another random paragraph here for demonstration purposes. This has absolutely no meaning and this isn't even building up to anything. This is a totally stupid paragraph that looks blue and bad and isn't necessary at all and is only here to be a <a class=\"lnk\" href=\"https://youtube.com\">placeholder.</a> In short, this is useless but this paragraph didn't ask me to be written. It came here without its consent and now has to endure and suffer, just like <u> all of us </u> I guess. That all of us was inline underline text."
      },
      {
        type: "paragraph",
        style: "custom-white",
        className: "white-txt",
        text: "This is like dark mode but inside the light mode. I have reversed the background and foreground colour for this paragraph and that's why this looks like this. Yeah, this is all nonsense. <a class=\"lnk f-lnk\" id=\"2\" href=\"#footnote-2\"><sup>2</sup></a>"
      },
      {
        type: "paragraph",
        style: "underline",
        className: "und-txt",
        text: "Now I can't not have an underlined paragraph when I have established this zoo already. So this is the reason it exists. Maybe slightly longer as this didn't look nice as compared to other paragraphs. Yeah, now it's better. And below is a table with fruits:"
      },
      {
        type: "table",
        className: "data-table",
        headers: [
          "fruits",
          "quantity",
          "rate"
        ],
        rows: [
          [
            "apple",
            "5kg",
            "Rs 250"
          ],
          [
            "mango",
            "4kg",
            "Rs 120"
          ],
          [
            "orange",
            "10kg",
            "Rs 200"
          ]
        ]
      },
      {
        type: "image",
        src: "./assets/flower3.jpg",
        alignment: "right",
        alt: "flower number 3",
        caption: "pretty pretty, image by <a class=\"lnk\" href=\"https://www.pexels.com/photo/close-up-shot-of-fresh-flowers-11723669/\">Khang  Le on Pexels</a>"
      },
      {
        type: "paragraph",
        style: "custom-purple",
        className: "purple-txt",
        text: "I know this is unfair. Blue paragraph already existed above and I shouldn't have created another blue family paragraph. But what can I do? I can't think of another colour and I think we should make do for now with this biasness. I am sorry. Please imagine this colour as something else, something which will make the distribution fair."
      },
      {
        type: "paragraph",
        style: "custom-green",
        className: "green-txt",
        text: "Green is the color of nature. But really, they are lying. Nature is black. The nature that we think of when we say nature is't nature at all. It's so tiny compared to the real nature out there. To look at the real nature, look up. The stars, planets, black holes, galaxies,<a class=\"lnk f-lnk\" id=\"3\" href=\"#footnote-3\"><sup>3</sup></a> they are the real nature with more coverage. The rivers, the flowers, forests, they take so little space in the pie chart of nature."
      },
      {
        type: "paragraph",
        style: "normal",
        className: "norm-txt",
        text: "Anyway, here are the coloured paragraphs that have appeared, but first enjoy another table some empty items:"
      },
      {
        type: "table",
        className: "data-table",
        headers: [
          "prime",
          "composite",
          "empty_sometime"
        ],
        rows: [
          [
            "2",
            "4",
            "not empty"
          ],
          [
            "3",
            "5",
            "wrong"
          ],
          [
            "7",
            "6",
            ""
          ],
          [
            "11",
            "8",
            ""
          ]
        ]
      },
      {
        type: "list",
        listType: "unordered",
        items: [
          "red paragraph",
          "blue paragraph",
          "green paragraph",
          "purple paragraph",
          "white paragraph"
        ]
      },
      {
        type: "paragraph",
        style: "highlight",
        className: "hlt-txt",
        text: "And this is a highlighted paragraph, and this is now rendered with a border left of 8px, and this might look like a quote by someone really famous or important. But again this is just here for the demonstration purpose and nothing else. Thank you. - by someone famous<a class=\"lnk f-lnk\" id=\"4\" href=\"#footnote-4\"><sup>4</sup></a>."
      },
      {
        type: "code",
        value: "<pre>\r\n<code>\r\n\ta = 5\r\n\t\tb = 10\r\n\t\t\t\t\t\t\tprint(a+b) \r\n\t\t\t#commenttttt\r\n</code>\r\n</pre>\r"
      },
      {
        type: "paragraph",
        style: "normal",
        className: "norm-txt",
        text: "I know I could have written better code than above. Although this is all, like I have said already a thousand times, for demonstration purposes, still this is setting the bar so low. I should have thought more. This would give an indentation error. This is extreme laziness. Anyway, below is another list to cheer you up and this time, it is numbered."
      },
      {
        type: "list",
        listType: "ordered",
        items: [
          "number one",
          "number two",
          "are you not entertained?"
        ]
      },
      {
        type: "paragraph",
        style: "custom-blue",
        className: "blue-txt",
        text: "Enjoy another table now please. Yep, this is once again blue color paragraph:"
      },
      {
        type: "table",
        className: "data-table",
        headers: [
          "country",
          "capital",
          "landlocked?",
          "has 'l' in name?"
        ],
        rows: [
          [
            "nepal",
            "kathmandu",
            "yes",
            "yes"
          ],
          [
            "india",
            "new delhi",
            "no",
            "no"
          ],
          [
            "china",
            "beijing",
            "no",
            "no"
          ],
          [
            "england",
            "london",
            "no",
            "yes"
          ],
          [
            "switzerland",
            "geneva",
            "yes",
            "yes"
          ]
        ]
      },
      {
        type: "paragraph",
        style: "bold",
        className: "bld-txt",
        text: "Yep, I think this is it. I know this is missing so many things and features, and can be broken easily. This relies heavily on the way you type and one two enter keys are enough to dismantle this amateur wall.But if you follow the rules strictly, I think this method is quite helpful. Thank you for reading if you are reading this. Bye. Take care."
      },
      {
        type: "footnotes",
        items: [
          {
            number: "1",
            text: "yes this is bad writing, trust me"
          },
          {
            number: "2",
            text: "<a class=\"lnk\" href=\"https://youtube.com\">yep this is nonsense and please click me to find out why</a>"
          },
          {
            number: "3",
            text: "<a class=\"lnk\" href=\"https://wikipedia.org\">galaxies on wikipedia</a>"
          },
          {
            number: "4",
            text: "yes this someone famous really said this"
          }
        ]
      }
    ],
    title: "Here comes the title of the page and this sentence has 18 words in it. Isn't that amazing?",
    m_title: "Here comes the title",
    m_desc: "A demo article to perform the demonstration and this is just a placeholder description.",
    excerpt: "This is the subtitle or the excerpt of the page. This can be a little longer than the title but you can have it your own way. This is supposed to hook you further to read the whole thing.",
    slug: "not-from-drive",
    tags: [
      "humour",
      "satire"
    ],
    categories: [
      "nice",
      "article",
      "here"
    ],
    keywords: "key1, key2, key3",
    date: "2024 April 1",
    datem: "2025 April 1",
    pdate: "2024-04-01T09:00:00+05:45",
    mdate: "2025-04-01T09:00:00+05:45",
    photo: "./assets/flower1.jpg",
    alt: "beautiful flowers"
  }
];
export default articles;