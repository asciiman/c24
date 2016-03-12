# C24 Calculator

This is a demo calculator I built with Ruby on Rails and JavaScript for a code
test I was assigned during a job interview.  I completed the code in 3 hours.

I was prepared to do more of a heavy back-end program.  But when I received the
assignment I realized that a heavy backend was overkill.  So I opted to keep the
framework light and ended up writing most of it in simple JavaScript.

## Future considerations

Since the operators were only a few and well defined, I simply put the
calculation of them in a single javascript.  But if we wanted to expand the
functionality of the calculator, it would make sense to create an interface
for operators and have all specific operators implement the interface.

## Testing

There are two sections for testing: front-end and back-end.

### Front-end tests

Front-end tests are written below and manually performed.

All tests have the starting point of restarting the app.

* Test display at start of app
Display should read: 0

* Test simple number entry
Enter "8" "6" "5"
Display should read: 865

* Test clear
Enter "8" "6" "5" "c"
Display should read: 0

* Test decimal
Enter "8" "6" "." "5"
Display should read: 86.5

* Test multiple decimals are ignored
Enter "8" "." "6" "." "5" "."
Display should read: 8.65

* Test negation
Enter "8" "6" "5" "-"
Display should read: -865

* Test reverse negation
Enter "8" "6" "5" "-" "-"
Display should read: 865

* Test entry to operand list
Enter "5" "6" "Enter"
Operand list should read: 56

* Test entering multiple operands with decimals and negatives
Enter "5" "6" "Enter" "4" "1" "-" "Enter" "3" "." 1" "Enter"
Operand list should read:
56
-41
3.1

* Test reseting operation
Enter "5" "6" "Enter" "4" "1" "-" "Enter" "New"
Operand list should be empty.
Operator and Result should be empty.

* Test sum of two numbers
Enter "5" "Enter" "6" "Enter" "Sum"
Operands:
5
6
Operator:
SUM
Result:
11

* Test sum with a negative
Enter "5" "Enter" "6" "-" "Enter" "Sum"
Operands:
5
6
Operator:
SUM
Result:
-1

* Test sum with a decimal
Enter "5" "Enter" "6" "." "1" "Enter" "Sum"
Operands:
5
6
Operator:
SUM
Result:
11.1

* Test mean
Enter "5" "Enter" "6" "-" "Enter" "Mean"
Operands:
5
6
Operator:
MEAN
Result:
5.5

* Test mean with no operands
Enter "Mean"
Operands:
Operator:
MEAN
Result:
0

### Back-end tests

Back-end tests are unit tests written in MiniTest.  They can be executed by
running:

rake test
