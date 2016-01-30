/*
  Part 1
  You are given examples of different types of recursive functions.
  Walk through the code, first manually and then using dev tools with your neighbor and 
  discuss what it's doing and how.
  Try to categorize it into recursive types.
*/

//3.1
function fibonacci(n){
  if(n<=1) return n;
  return fibonacci(n-1) + fibonacci(n-2);
}

//3.2
function IsEven(num){
    if (num == 0) return true
    else return odd(Math.abs(num)-1);
        
}

function IsOdd(num){
   if (num == 0) return false
   else return even(Math.abs(num)-1)   
}



/*
  Part 2
  Read the problem statement below and write your answer for what 
  the base case could be in each case.
  You don't need to write working code. The goal of this exercise is to start visualizing 
  recursive vs base cases in different contexts.

  Example:
  In the previous problem of arrayception
  base case is when the datatype at current location is not an Array.
  recursive case is each index
*/

//3.3
var getElementsByClassName = function(className, element){
  element = element || document.body;
  var results = [];
  if (element.classList && _.contains(element.classList, className)) {
    results.push(element);
  }
  _.each(element.childNodes, function(node, i) {
    results = results.concat(getElementsByClassName(className, node));
  });
  return results;
};


//3.4
var deepEquals = function(apples, macs){
  if(apples === macs) return true
  if(!(apples instanceof Object) || !(macs instanceof Object)) return false
  if(!apples || !macs) return false
  if( Object.keys(apples).length !== Object.keys(macs).length ) return false;
  for(var key in apples){
    if(!deepEquals(apples[key], macs[key])) return false
  }
  return true
};  



//3.5
var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.map = function (callback) {
  var output = new Tree(callback(this.value));
  for (var i = 0; i < this.children.length; i++) {
    output.addChild(this.children[i].map(callback));
  }
  return output;
};


Tree.prototype.mapInPlace = function (callback) {
  this.value = callback(this.value);
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].mapInPlace(callback);
  }
};

Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }

  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return child;
};



