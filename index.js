module.exports = ({ addComponents, theme }) => {
  const screens = theme("screens", {});

  const components = {
    ".debug-mq::after": {
      position: "fixed",
      bottom: "5px",
      right: "5px",
      backgroundColor: "black",
      color: "white",
      padding: "10px",
      outline: "1px solid white",
      borderRadius: "2px",
      fontFamily: "monospace",
      fontSize: "11px",
      lineHeight: "10px",
      zIndex: "2147483638",
      content: "'Unset'",
    },
  };

  Object.entries(screens).map(([breakpoint, width]) => {
    components[`@screen ${breakpoint}`] = {
      ".debug-mq::after": {
        content: `'${width} | ${breakpoint}'`,
      },
    };
  });

  addComponents(components);
};
