// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function compareName(arr) {
    if (arr === "Waldo") {
      found();  // execute callback
    }
  });
}

function actionWhenFound() {
  console.log("Found Waldo");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);