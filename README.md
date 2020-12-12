<h1 align="center" style="border-bottom: none;">📽 Presentador</h1>
<h3 align="center">An opinionated presentation framework. Just write what you want to present and it will do the rest.</h3>

![Presentador Demo](./assets/demo.gif)

## Description

With `Presentador`, you describe the content of each of your slides using Markdown and it will produce a beautiful presentation ready to be hosted anywhere you want. Don't worry about how they're going to look, just focus on your presentation.

There is only a single layout depending on the elements of your slide. `Presentador` parses the elements in each slide and assigns a certain pre-defined layout to it.

## Installation

### Quick start

Create a folder to put your slides. Create one file for each slide and give them a number which will be the order of that slide, e.g `1.md`, `2.md`...

Write common Markdown in each slide, add your headers, paragraphs, images, etc. See some examples in the [fixtures/](./fixtures) folder.

Then run:

`npx presentador serve -d FOLDER`

### Install locally

`npm install presentador`

or

`yarn add presentador`

Then add it to your `package.json`s' `scripts` section:

```JSON
"scripts": {
  "presentador": "presentador ..."
}
```

## Usage

### Commands

There are two commands currently:

#### `> build`

To build your presentation and output the final artifacts that you can host anywhere you want.

#### `> serve`

To develop locally your presentation.

### Input

In both cases above, you need to pass a directory with a list of Markdown files.

`> presentador build -d slides/`

## Contributing

We could use all the help we can get. So please feel free to go through our open [issues]('https://github.com/kbariotis/presentador/issues') or create one if thought of a new cool feature or found a bug.

### Run locally

Running `Presentador` will be as easy as forking and cloning this repo, then running:

`> yarn`

`> yarn dev`

The local dev server will run against the [fixtures](./fixtures) folder which contains a few example slides.

### Compilation

The process of compiling a presentation is actually quite simple. For each Markdown file you supply, `Presentador` will parse it and make a list of some specific elements.

If then that list matches one of the below, it will pass them to the appropriate renderer and the renderer will decide how to lay them out and render them. If it doesn't matches any, the [normal renderer](./src/renderers/normal.js) will kick in.

| List                                 | State Name                | Renderer                                                                  |
| ------------------------------------ | ------------------------- | ------------------------------------------------------------------------- |
| Header                               | singleHeader              | [singleHeader](./src/renderers/singleHeader.js)                           |
| Header,Header                        | twoHeaders                | [twoHeaders](./src/renderers/twoHeaders.js)                               |
| Header,Paragraph                     | headerParagraph           | [headerParagraph](./src/renderers/headerParagraph.js)                     |
| Header,Paragraph,Image               | headerParagraphImage      | [headerParagraphImage](./src/renderers/headerParagraphImage.js)           |
| Header,Paragraph,Paragraph,...       | headerManyParagraphs      | [headerManyParagraphs](./src/renderers/headerManyParagraphs.js)           |
| Header,Paragraph,Paragraph,...,Image | headerManyParagraphsImage | [headerManyParagraphsImage](./src/renderers/headerManyParagraphsImage.js) |
| Header,List                          | headerList                | [headerList](./src/renderers/headerList.js)                               |
| Header,Image                         | headerImage               | [headerImage](./src/renderers/headerImage.js)                             |
| Blockquote                           | blockquote                | [blockquote](./src/renderers/blockquote.js)                               |
| Image                                | image                     | [image](./src/renderers/image.js)                                         |
| Image,Image,...                      | manyImages                | [manyImages](./src/renderers/manyImages.js)                               |
| Header,Codeblock                     | headerCodeblock           | [headerCodeblock](./src/renderers/headerCodeblock.js)                     |
