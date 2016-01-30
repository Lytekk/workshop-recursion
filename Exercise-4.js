//Convert the given recursive function to tail recursive.
//Write comments

//simple recursive function
function fibonacci(n){
  if(n<=1) return n;
  return fibonacci(n-1) + fibonacci(n-2);
}



//tail recursive function

//your code here