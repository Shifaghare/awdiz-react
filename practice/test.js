//Question 1


var nums=[2,7,11,15]
var target=9
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
    return [];
  }
console.log(twoSum(nums,target))

//Question 3:

var x=121
var isPalindrome = function(x) {
    var reverse = 0;
    var copy = x;
    while (copy > 0) {
      const digit = copy % 10;
      reverse = reverse * 10 + digit;
      copy = ~~(copy / 10);
    }
    return reverse == x;
 
};
console.log(isPalindrome(x))
  
  
  

//Question6:

var missing=[2,4,1,3,6,7,8]
missing.sort()

function findmissing(array){
    let missingNo=array[0]
    for(var i=0;i<array.length;i++){
        if(missingNo!==array[i]){
            break;
        }
        missingNo=missingNo+1
    }
return missingNo
}
console.log(findmissing(missing))


// //Question 7

var array=[1,1,2,3,4,4,6,5]
array.sort()
function removeduplicates(array){
    var newarray=[]
    for(var i=0;i<array.length;i++){
        for(var j=i+1;j<array.length+1;j++){
            if(!newarray.includes(array[i])){
                newarray.push(array[i])
            
            }
        }
    }
    return newarray;
} 

console.log(removeduplicates(array))


