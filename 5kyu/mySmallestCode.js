/*

Inspired from real-world Brainf**k, we want to create an interpreter of that language which will support the following instructions:

> increment the data pointer (to point to the next cell to the right).
< decrement the data pointer (to point to the next cell to the left).
+ increment (increase by one, truncate overflow: 255 + 1 = 0) the byte at the data pointer.
- decrement (decrease by one, treat as unsigned byte: 0 - 1 = 255 ) the byte at the data pointer.
. output the byte at the data pointer.
, accept one byte of input, storing its value in the byte at the data pointer.
[ if the byte at the data pointer is zero, then instead of moving the instruction pointer forward to the next command, jump it forward to the command after the matching ] command.
] if the byte at the data pointer is nonzero, then instead of moving the instruction pointer forward to the next command, jump it back to the command after the matching [ command.
The function will take in input...

the program code, a string with the sequence of machine instructions,
the program input, a string, possibly empty, that will be interpreted as an array of bytes using each character's ASCII code and will be consumed by the , instruction
... and will return ...

the output of the interpreted code (always as a string), produced by the . instruction.
Implementation-specific details for this Kata:

Your memory tape should be large enough - the original implementation had 30,000 cells but a few thousand should suffice for this Kata
Each cell should hold an unsigned byte with wrapping behavior (i.e. 255 + 1 = 0, 0 - 1 = 255), initialized to 0
The memory pointer should initially point to a cell in the tape with a sufficient number (e.g. a few thousand or more) of cells to its right. For convenience, you may want to have it point to the leftmost cell initially
You may assume that the , command will never be invoked when the input stream is exhausted
Error-handling, e.g. unmatched square brackets and/or memory pointer going past the leftmost cell is not required in this Kata. If you see test cases that require you to perform error-handling then please open an Issue in the Discourse for this Kata (don't forget to state which programming language you are attempting this Kata in).

*/

function brain_luck(code, inputs) {
  let bracket_counter,
    code_ptr,
    data,
    data_ptr,
    direction,
    inputl,
    inst,
    output;
  inputl = list(inputs);
  code_ptr = data_ptr = 0;
  data = [0];
  output = "";

  while (code_ptr !== code.length) {
    inst = code[code_ptr];

    if (inst === ".") {
      output += chr(data[data_ptr]);
    }

    if (inst === ",") {
      data[data_ptr] = ord(inputl.pop(0));
    }

    if (_pj.in_es6(inst, lessmore_value)) {
      data_ptr += lessmore_value[inst];

      if (data_ptr === data.length) {
        data.append(0);
      }
    }

    if (_pj.in_es6(inst, plusminus_value)) {
      data[data_ptr] += plusminus_value[inst];
      data[data_ptr] %= 256;
    }

    if (
      (inst === "[" && data[data_ptr] === 0) ||
      (inst === "]" && data[data_ptr] !== 0)
    ) {
      direction = bracket_counter = brc_value[inst];

      while (!(code[code_ptr] === brc_pair[inst] && bracket_counter === 0)) {
        code_ptr += direction;

        if (_pj.in_es6(code[code_ptr], brc_value)) {
          bracket_counter += brc_value[code[code_ptr]];
        }
      }
    }

    code_ptr += 1;
  }

  return output;
}
