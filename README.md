# JavaScript Null Value Handling
This repository demonstrates a common error in JavaScript: improper handling of null values. The function `foo` attempts to add two numbers. However, it fails when one or both inputs are `null`, leading to unexpected behavior.

The `bug.js` file contains the erroneous code that incorrectly handles null values.  The `bugSolution.js` provides a corrected version which handles null values gracefully.

## How to Reproduce
1. Clone this repository.
2. Run `bug.js` using a JavaScript interpreter (like Node.js).
3. Observe the unexpected output when null values are passed as arguments to `foo`. 
4. Review the solution presented in `bugSolution.js`.

## Lesson Learned
Always handle null values explicitly to avoid unexpected results and potential errors in your code. Consider using optional chaining or nullish coalescing to handle such cases effectively.