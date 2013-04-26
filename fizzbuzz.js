//write a program that prints integers 1 thru 100
//print fizz for div by 3
//print buzz for div by 5
//print fizz buzz for div 3 and 5

// create some function fizzbuzz
//if n%3=0 fizz=true
//if n%5=0 buzz=true
//print n if fizz AND buzz = false
//else if fuzz=true print 'fizz'
//else if buzz=true print 'buzz'
//else if fuzz and buzz true print 'fizz buzz'
//use function recursively and if n<100 function(n++1)

/*
var fizzbuzz = function (n) {
    var fizz;
    var buzz;
    if (n%3 === 0) {
	fizz = true};
    if (n%5 === 0) {
	buzz = true};
    if (fizz && buzz) {
	document.writeln ('fizz buzz')};
    else if (fizz) {
	document.writeln('fizz')};
    else if (buzz) {
	document.writeln('buzz')};
    else {document.writeln(n)};
    if (n < 100) {
	fizzbuss(n+1)};
};

fizzbuzz(1) */

var buzzer = function(n){
    var fizz = n % 3;
    var buzz = n % 5;
    if (fizz === 0 && buzz === 0){
	document.writeln('fizz buzz')};
    if (fizz === 0){
	document.writeln('fizz')};
    if (buzz === 0){
	document.writeln('buzz')};
    if (fizz !== 0 && buzz !== 0){
	document.writeln(n)};
    if (n < 100) {
	buzzer(n+1)};
};

buzzer(1);