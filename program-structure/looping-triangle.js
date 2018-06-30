/*
Write a loop that makes seven calls to console.log to output the following triangle.

#
##
###
####
#####
######
#######
*/

let size = 7;
let string = "";
for (let i = 1; i <= size; i++) {
  string += "#";
  console.log(string);
}

