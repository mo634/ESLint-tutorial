module.exports = {
    create(context) {
      const sourceCode = context.getSourceCode();
  
      return {
        Program() {
          const comments = sourceCode.getAllComments(); 
        //   console.log(comments)
          // Retrieve all comments
          comments.forEach((comment) => {
            // disallow fix any  comment 
            if(comment.value.includes("fix")) {
                context.report({
                  node: comment,
                  message:"Fix is not allowed ",
                });
                
            }
          });
        },
      };
    },
  };
  