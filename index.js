// Prompt the user to order froyo flavors
const userInputString = prompt(
  "Please order some flavors of Froyo separated by commas",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// Split the string of flavors into an array of strings.
const stringArray = userInputString.split(",");

console.log(stringArray);

let result = {};
for (let i = 0; i < stringArray.length; i++) {
  let ch = stringArray[i];
  if (!result[ch]) {
    result[ch] = 1;
  } else {
    result[ch] += 1;
  }
}

const froyoFlavors = {};
for (let i = 0; i < stringArray.length; i++) {
  console.log(stringArray[i]);

  froyoFlavors[stringArray[i]] = [result[stringArray[i]]];
}
console.log(froyoFlavors);
