console.time("coding challenge");
const numbers = [1, 3, 4, 7]
let answer = []

numbers.forEach(number => {
    let product = 1
    // let trimmedNumbers = numbers.filter(integer => integer !== number)
    numbers.forEach(integer => {
        if(integer !== number) {
            product = product * integer;
        }
    })
    answer.push(product)
})
console.timeEnd("coding challenge");