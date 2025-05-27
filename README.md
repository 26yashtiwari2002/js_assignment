# js_assignment
##Assignment: Working with Callbacks, Promises, and Async/Await
Objective:
The aim of this assignment is to understand how to work with callbacks, promises, and async/await by simulating asynchronous file operations.

Tasks:
Task 1: Implement Using Callbacks Only 
Write a function that simulates downloading data from a URL using a callback.
Write a function that simulates writing the downloaded data into a file using a callback, and returns a filename.
Write a function that simulates uploading the generated file to another URL using a callback.
Chain these functions together using callbacks to mimic a real-world asynchronous flow.
Only use callbacks for handling asynchronous operations in this task.

Task 2: Convert Callbacks to Promises
Refactor the above functions to return Promises instead of using callbacks.
Chain the operations by using .then() syntax.
Use Promises for asynchronous flow without any callback-based syntax.

Task 3: Convert Promises to Async/Await
Further refactor the code to use async/await syntax.
Write an async function that sequentially:
Simulates downloading data.
Simulates writing data to a file.
Simulates uploading the file to a new URL.
Use async/await to handle the asynchronous operations in a cleaner and more readable way.

Additional Notes:
Actual network or file system operations are not required.
Use setTimeout or a similar mechanism to simulate delays and asynchronous behavior.
Add console logs to indicate the start and completion of each simulated step.
