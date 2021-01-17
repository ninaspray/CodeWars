/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F
*/
function abbrevName(name) {
    let nam = name.split(' ');
    return nam[0].charAt(0).toUpperCase() + '.' + nam[1].charAt(0).toUpperCase();
}

//Tested in inspector - works. 
//Used split to split the variable of name in to two
//returned the name[0].charAt(0).toUpperCase() - returned the first item of the array the first name , then the first character. 
//Used + operator to add the characters fulled from the seperate names and add with a . full stop between. 