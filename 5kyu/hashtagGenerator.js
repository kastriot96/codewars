/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

*/

function generateHashtag(str) {
  let separateStr = str.toLowerCase().split(" ");
  if (str.trim() === "") return false;
  for (let i = 0; i < separateStr.length; i++) {
    separateStr[i] =
      separateStr[i].charAt(0).toUpperCase() + separateStr[i].substring(1);
  }
  const fullStr = "#" + separateStr.join("");
  return fullStr.length > 140 ? false : fullStr;
}

console.log(generateHashtag("kastriot jashari "));
