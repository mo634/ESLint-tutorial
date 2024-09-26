module.exports = {
  meta: {
    type: "problem", // Can be "problem", "suggestion", or "layout"
    fixable: "code", // This rule is fixable
    docs: {
      description: "disallow use of odlFunction and suggest using newFunction",
      category: "Best Practices",
      recommended: true,
    },
  },
    create(context) {
      return {
        CallExpression(node) {  // CallExpression, not callExpression
          if (node.callee && node.callee.name === "odlFunction") {
            context.report({
              node,
              message: "Please use the latest function instead of odlFunction",
              // start add fix method to fix auto your problem when type --fix 
              fix( fixer){
                return fixer.replaceText(node.callee, "latestFunction");
              }
            });
          }
        },
      };
    },
  };
  