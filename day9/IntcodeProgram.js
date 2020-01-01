'use strict';

function IntcodeProgram(instructionSet) {
  this.instructionSet = [...instructionSet];
  this.instructionSet.forEach(() => this.instructionSet.push(0));
  this.instructionSet.forEach(() => this.instructionSet.push(0));
  this.instructionSet.forEach(() => this.instructionSet.push(0));
  this.pointer = 0;
  this.relativeBase = 0;
}

IntcodeProgram.prototype.getOperand = function(parameterMode, paramNumber) {
  switch (parameterMode) {
    case '1':
      return this.instructionSet[this.pointer + paramNumber];
    case '2':
      return this.instructionSet[this.relativeBase + this.instructionSet[this.pointer + paramNumber]];
    case '0':
    default:
      return this.instructionSet[this.instructionSet[this.pointer + paramNumber]];
  }
};

IntcodeProgram.prototype.run = function(input) {
  let output = [];
  let inputCounter = 0;
  let hasHalted = false;
  for (
    this.pointer;
    this.pointer < this.instructionSet.length;
    this.pointer += 2
  ) {
    const instruction = this.instructionSet[this.pointer].toString();
    const opcode = instruction.substr(instruction.length - 2);
    const parameterModes = instruction.substr(0, instruction.length - 2);
    const parameter1Mode = parameterModes.substr(parameterModes.length - 1);
    const operand1 = this.getOperand(parameter1Mode, 1);
    let shouldUpdatePointer = true;

    if (opcode === '99') {
      hasHalted = true;
      break;
    } else if (/0?[1-2]|0?[5-8]/.test(opcode)) {
      const parameter2Mode =
        parameterModes.length > 1
          ? parameterModes.substr(parameterModes.length - 2, 1)
          : '0';
      const operand2 = this.getOperand(parameter2Mode, 2);

      const parameter3Mode = parameterModes.length > 2
      ? parameterModes.substr(parameterModes.length - 3, 1)
      : '0';

     
      
      const resultPostion = parameter3Mode === '0' ? this.instructionSet[this.pointer + 3] : this.relativeBase + this.instructionSet[this.pointer + 3];

      if (/0?1/.test(opcode)) {
        // Add
        this.instructionSet[resultPostion] = operand1 + operand2;
      } else if (/0?2/.test(opcode)) {
        // opcode === '02 Multiply'
        this.instructionSet[resultPostion] = operand1 * operand2;
      } else if (/0?5/.test(opcode)) {
        // opcode === 05 // Jump if true
        if (operand1 !== 0) {
          this.pointer = operand2 - 2;
          shouldUpdatePointer = false;
        } else {
          this.pointer--;
        }
      } else if (/0?6/.test(opcode)) {
        // opcode === 06 // Jump if false
        if (operand1 === 0) {
          this.pointer = operand2 - 2;
          shouldUpdatePointer = false;
        } else {
          this.pointer--;
        }
      } else if (/0?7/.test(opcode)) {
        // opcode === 07 // less than
        if (operand1 < operand2) {
          this.instructionSet[resultPostion] = 1;
        } else {
          this.instructionSet[resultPostion] = 0;
        }
      } else {
        // opcode === 08 // equals
        if (operand1 === operand2) {
          this.instructionSet[resultPostion] = 1;
        } else {
          this.instructionSet[resultPostion] = 0;
        }
      }

      if (shouldUpdatePointer) {
        this.pointer += 2;
      }
    } else if (/0?[3-4]|0?9/.test(opcode)) {
      if (/0?3/.test(opcode)) {
        // Input
        if (typeof input[inputCounter] === 'undefined') break;
        const inputAddress = parameter1Mode === '2' ? this.relativeBase + this.instructionSet[this.pointer + 1] : this.instructionSet[this.pointer + 1];
        this.instructionSet[inputAddress] = input[inputCounter];
        inputCounter++;
      } else if (/0?4/.test(opcode)) {
        // opcode === 04 // Output
        if (typeof operand1 !== Number.NaN) {
          output.push(operand1);
        }
      } else {
        // opcode === 9 // Relative base adjustment
        this.relativeBase += operand1;
      }
    }
  }
  return output;
};

IntcodeProgram.prototype.reset = function() {
  this.pointer = 0;
};

module.exports = IntcodeProgram;
