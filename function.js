const arr = [1,23,76,87,96]
const brr = [2,43,56,23,65]
const crr = [4,24,56,47,23]
const fullarrays = [arr,brr,crr] 
function evenNumberSearch (array){
    const result = []
    const delitel = 2
    for(i=0; i <= array.length - 1; i++){
      for (x=0; x<=array[i].length - 1; x++){
       if(array[i][x] % delitel === 0)
           result.push(array[i][x])
    }
    
    }
return result
}
console.table (evenNumberSearch (fullarrays))