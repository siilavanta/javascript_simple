//
//define a property where we store sorting value
//loop over an array last to first
//nest a loop , declare that it should first to last itaration
// set a condition flow if first index is greater than second index 
//swap them second index to first index ..

function bubleSort(arr){
  let temp;
  for(let i=arr.length; i>0; i--){
    for(let j = 0; j<arr.length; j++){
      if(arr[j] > arr[j + 1]){
        temp = arr[j]
        arr[j]= arr[j + 1];
        arr[j + 1] = temp
      }else if(arr[j] == arr[j+1]){
        return [...new Set(arr)]
      }
    }
  }
  return arr
}
const arr = [3,12,1,4,10,8,6,5,2,1]
//console.log(bubleSort(arr))
