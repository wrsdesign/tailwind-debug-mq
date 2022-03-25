## Tailwind CSS Debug Media Queries

Tailwind CSS plugin that displays a currently active media query breakpoint.

<img width="1552" alt="tailwind-debug-mq" src="https://user-images.githubusercontent.com/53351370/160080172-e35cf08b-ccd2-49d2-924d-4c746d86a8b5.png">

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
