# gatsby-remark-smallcaps

This Gatsby Remark plugin allows you to wrap strings of capital letters with a `span` to apply custom CSS.

Requires Gatsby and `gatsby-transformer-remark`.

## Installation and Usage

Install using `npm`:

```bash
npm install gatsby-transformer-remark gatsby-remark-smallcaps
```

or `yarn`:

```bash
yarn add gatsby-transformer-remark gatsby-remark-smallcaps
```

And add to your Gatsby config:

```js
// In gatsby-config.js
plugins: [
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: ["gatsby-remark-smallcaps"]
    }
  }
];
```

Or if you're using `gatsby-plugin-mdx`:

```js
// In gatsby-config.js
plugins: [
  {
    resolve: "gatsby-plugin-mdx",
    options: {
      gatsbyRemarkPlugins: [{ resolve: "gatsby-remark-smallcaps" }]
    }
  }
];
```

By default, the plugin will wrap capital strings in a span with a class name:

```jsx
// Input Markdown:
HTML and CSS

// Output:
<span class="caps">HTML</span> and <span class="caps">CSS</span>
```

You can apply CSS styles in a global stylesheet:

```css
.caps {
  font-variant-caps: all-small-caps;
}
```

### Options

Currently the only configuration option is the class name used to wrap capital strings.

```js
plugins: [
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [
        {
          resolve: "gatsby-remark-smallcaps",
          options: {
            className: "caps" // Default value
          }
        }
      ]
    }
  }
];
```
