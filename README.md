<h1 align="center" style="border-bottom: none;">📽 Presentador</h1>
<h3 align="center">An opinionated presentation framework. Just write what you want to present and it will do the rest.</h3>

## Description

With `Presentador`, you describe the content of each of your slides using Markdown and it will produce a beautiful presentation ready to be hosted anywhere you want. Don't worry about how they're going to look, just focus on your presentation.

There is only a single layout depending on the elements of your slide. `Presentador` parses the elements in each slide and assigns a certain pre-defined layout to it.

## Installation

`npm install presentador`

or

`yarn add presentador`

Then add it to your `package.json`s' `scripts` section:

```JSON
"scripts": {
  "presentador": "presentador"
}
```

or use `npx` directly:

`npx presentador ...`

## Usage

Create a folder where you will put your slides. Create one file for each slide and give them a number which will be the order of that slide, e.g `1.md`, `2.md`, etc..

Write common Markdown in each slide, add your headers, paragraphs, images, etc. See some examples in the [fixtures/](./fixtures) folder.

### Commands

There are two commands currently:

#### `> build`

To build your presentation and output the final artifacts that you can host anywhere you want.

#### `> serve`

To develop locally your presentation.

### Input

In both cases above, you need to pass a directory with a list of Markdown files.

`> presentador build -d slides/`
