module.exports = {
    meta: {
      type: "suggestion", // or "problem"
      docs: {
        description: "Disallow specified words or phrases in comments",
        category: "Best Practices",
        recommended: false,
      },
      schema: [
        {
          type: "array",
          items: { type: "string" }, // Allow an array of strings as valid options
          minItems: 0, // Allow 0 or more items
          additionalItems: false, // Disallow extra items beyond what's specified in the array
        },
      ],
    },
  
    create(context) {
      const sourceCode = context.getSourceCode();
      const forbiddenWords = context.options[0] || []; // Default to an empty array if no options are provided
  
      return {
        Program() {
          const comments = sourceCode.getAllComments(); 
          
          // Loop over all comments
          comments.forEach((comment) => {
            // Loop over all forbidden words
            forbiddenWords.forEach((word) => {
              // Check if the comment contains the forbidden word
              if (comment.value.includes(word)) {
                context.report({
                  loc: comment.loc, // Use comment location for reporting
                  message: `Comment contains the forbidden word '${word}'`,
                });
              }
            });
          });
        },
      };
    },
  };
  