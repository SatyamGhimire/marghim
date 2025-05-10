# marghim
a markdown like parser which converts txt file to html

## identifiers:
### metadatas:
```
#id: not compulsory but good, numerical is nice
#anything: anything of this form
#tags: tag1, tag2, tag3 (special one which will be an array of its items)
#categories: cat1, cat2, cat3 (special one which will be an array of its items)
```

### for paragraphs:
- :: italic paragraph (inline supported)
- ::: highlight paragraph
- :::: bold paragraph (inline supported)
- :.: underlined paragraph (inline supported)
- ;; image centered middle
- ;+ image float right
- ;- image float left
- ;@ alt text for the image (optional)
- ;! caption for the image (optional)
- :? red paragraph (inline supported)
- :! blue paragraph (inline supported)
- :# green paragraph
- :/ purple paragraph
- :\ white paragraph

### for links:
- $&click me please&https://wikipedia.org$

### extras:
- <: inline code :>
- -: unordered, list, item
- +: ordered, list, item
- !-(): [(header1, header2...), (item1, item2...), ...] table
- ^ subscript ^ inline only
- ~ superscript ~ inline only

```
<>
code block that will be escaped by the identifiers
use this for some important code block that
wont be satisfied by above identifiers
and to preserve the appearance
</>
```

Footnotes/Bibliography: You first write footnote and then create at last the footnote section like this:
```
^[1] this means the footnote will have an id of 1 and will point to id footnote-1 in the same page
Yes, I am not lying. This is the source. ^[2] Yeah, I was't lying, see?

//Footnote section:
[]
1. $&some source here&https://youtube.com$
2. trust me bro
[/]
```

## other information
- Please check inside the files folder for the text files and see how I've written them.
- You need to setup Google Docs and Google Drive API and use that json file in the fetchdoc.js file
- Or if you don't wanna use google docs, you need a setup that will convert your word processor files to regular text files.
- Modify the create.js to satisfy you. Add what you want, remove the unnecessary.
- Thank you
