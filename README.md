## Tailwind CSS Debug Media Queries
Tailwind component that shows the active breakpoint.

### Installation and usage
`npm install @whiterussianstudio/tailwind-debug-mq --save-dev`

Add plugin to `plugins` array in tailwind.config.js.

```js
plugins: [
  require('@whiterussianstudio/tailwind-debug-mq'),
  ...
]
```

Add `debug-mq` class to your body

```html
  <body class="debug-mq">
  ...
  </body>
```

