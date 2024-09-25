module.exports = {
    create(context) {
      return {
        CallExpression(node) {  // CallExpression, not callExpression
          if (node.callee && node.callee.name === "odlFunction") {
            context.report({
              node,
              message: "Please use the latest function instead of odlFunction",
            });
          }
        },
      };
    },
  };
  