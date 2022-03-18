## Tailwind CSS Debug Media Queries

Tailwind CSS plugin that displays a currently active media query breakpoint.

### Installation and Setup

```
npm install @whiterussianstudio/tailwind-debug-mq --save-dev
```

Add plugin to a `plugins` array in the configuration file:

```js
// tailwind.config.js
plugins: [
  require('@whiterussianstudio/tailwind-debug-mq'),
  ...
]
```

Then add `debug-mq` class attribute to the tag `<body>`:

```html
<body class="debug-mq">
  ...
</body>
```
