# prettier-plugin-valve-css

A Prettier plugin for Valve Panorama CSS. Valve CSS is formatted like regular
CSS while also supporting `//` line comments.

The parser understands URLs containing double slashes, including Panorama
resource imports:

```css
@import url("file://{resources}/styles/custom_game/positions.css");
```

## Install

```sh
npm install --save-dev prettier prettier-plugin-valve-css
```

Add the plugin to your Prettier configuration:

```json
{
  "plugins": ["prettier-plugin-valve-css"]
}
```

For an ESM configuration file, the plugin also provides a default export:

```js
import prettierPluginValveCss from "prettier-plugin-valve-css";

export default {
  plugins: [prettierPluginValveCss],
};
```

Prettier infers the parser for `.css` files when the plugin is loaded.

## VS Code

The plugin declares support for the `panorama-css` language provided by the
CS2 Panorama CSS Validator extension. Install the plugin in the workspace,
select **CS2 Panorama CSS** for the document, and use the Prettier extension as
the formatter:

```json
{
  "[panorama-css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "prettier.documentSelectors": ["**/*.css"]
}
```

The `prettier.documentSelectors` setting ensures that the Prettier extension
offers formatting for the custom language mode.

## Development

```sh
pnpm build
```

Package releases can be published automatically from GitHub tags using npm
Trusted Publishing. See [RELEASING.md](./RELEASING.md) for setup and release
instructions.

## API

```js
import * as prettier from "prettier";
import valveCssPlugin from "prettier-plugin-valve-css";

const formatted = await prettier.format(source, {
  parser: "valve-css",
  plugins: [valveCssPlugin],
});
```
