/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/
function humanReadable(seconds) {
  let hours = (seconds % (60 * 60 * 24)) / (60 * 60);
  let minutes = (seconds % (60 * 60)) / 60;
  let sec = seconds % 60;

  const val = (par) => {
    if (par < 10) {
      return "0" + par;
    } else {
      return val;
    }
  };
  return val(hours) + ":" + val(minutes) + ":" + val(sec);
}
humanReadable(86399);
