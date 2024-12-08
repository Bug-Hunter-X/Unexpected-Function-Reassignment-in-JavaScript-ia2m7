# Unexpected Function Reassignment in JavaScript

This repository demonstrates a common yet often overlooked bug in JavaScript: the reassignment of functions.  JavaScript's dynamic typing allows functions to be reassigned to different values, potentially leading to unexpected behavior and difficult-to-debug errors.

The `bug.js` file contains the buggy code.  The `bugSolution.js` file demonstrates how to avoid this issue.

## Bug Description

The core issue lies in the ability to reassign a function variable to a non-function value.  In the buggy code, the function `foo` is initially defined as an addition function. However, it is subsequently reassigned to the number 5.  Any subsequent calls to `foo` will use this new value, leading to unexpected results.

## Solution

The solution demonstrates using techniques like strict mode and/or creating closures to prevent this type of accidental reassignment, therefore avoiding unexpected function reassignment.
