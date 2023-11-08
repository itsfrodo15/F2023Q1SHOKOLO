const array = [1,23,76,87,96]
const result = []
const delitel = 3
for(i=0; i < array.length; i++){
    if(array[i] % delitel === 0)
        result.push(array[i])
    
}
if(result.length === 0)
console.log('нет ничего')
else
console.log(`Это массив чисел кратных ${delitel}: ${result}`)