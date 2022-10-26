# Quotation

## Escaping Literal Quotes in Strings

```sh
var myStr ="I am a " double quoted " string inside " double quotes" =>

          "I am a \" double quoted\" string inside \" double quotes\"";

```
## Quoting strings with single quotes

```sh
  var myStr = '<a href="http://www.example.com" target="_blank" >Link</a>';

console.log(myStr);
```

## Escape Sequences in Strings

### Code Output

1. \' Single Quote
2. \" Double Quote
3. \\ Back Slash
4. \n New Line
5. \r carriage return
6. \t tab
7. \b Backspace
8. \f Formfeed

```sh
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);
```

## Concatenation Strings with Plus Operator

Example
```sh
var myStr = "This is the Start. " + "This is the end";
console.log(myStr);
```

## Concatenation Strings with Plus Equals Operator

Example
```sh
var myStr = "This is the First Sentence";
myStr += "This is the Second one";

console.log(myStr);
```