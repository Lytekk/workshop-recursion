/* Problem statement:
Given an array of arbitrarily nested arrays, return n, 
where n is the deepest level that contains a non-array value.

Example:
[ 10, 20, 30, 40 ] = 2
[ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] = 4
[ ] = 0
*/

//Convert this working recursive indirect function to a 
//single recursive function without a wrapper function

function arrayception (array) {
  var highestLevel = 0;
//   var levels = 0;
  function findingLevels (array, level) {
    var levels = level || 0;
    if (typeof array === 'object' && array.length > 0) {
      levels++
      if(typeof array[0] !== 'object') {
        if (levels > highestLevel) {
            highestLevel = levels
        }   
      }
      
      array.forEach(function(arr) {
        findingLevels(arr, levels)
      })
    }
  }

  findingLevels(array)
  
  return highestLevel
}


function arrayception(array) {
  //write your code here without using an inner recursive function
}

