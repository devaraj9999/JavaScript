function runDemo() {
  console.log("1️⃣ Start");

  // Promise example
  const promiseExample = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("✅ Promise resolved after 1 second");
    }, 1000);
  });

  promiseExample.then(msg => console.log(msg));

  // Microtask queue demo
  Promise.resolve().then(() => {
    console.log("2️⃣ Immediate Promise resolved (microtask queue)");
  });

  // Task queue demo
  setTimeout(() => {
    console.log("3️⃣ setTimeout callback (task queue)");
  }, 0);

  console.log("4️⃣ End");
}
runDemo();