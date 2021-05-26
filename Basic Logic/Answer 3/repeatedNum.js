let array = [0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10]

const countRepetition = function(arr, val){
  return array.reduce((acc, elem) => {
    return (val === elem ? acc + 1 : acc)
  }, 0);
}

console.log(countRepetition(array, 7));
