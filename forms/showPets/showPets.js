let pets = ["Horse","Bird"]
console.log(`The index is 0 and the animal is ${pets[0]}`)
console.log(`The index is 1 and the animal is ${pets[1]}`)

let petsLength = pets.length
pets[petsLength] = "Lizard"
//pets.push = ["Lizard"]
console.log(`The index is 2 and the animal is ${pets[2]}`)


/*let kitchenTools = ["orange peeler","red wine stopper","dragon wine stopper","blue clippy"]
kitchenTools.push = ["Yellow Corner"]
let lengthKitchenTools = kitchenTools.length
kitchenTools[lengthKitchenTools] = "yellow corner"

Console.log(`Ascending Order: ${kitchenTools.sort()}`)
console.log(`Reverse order: ${pets.sort().reverse()}`)
*/

let petAge = [27,2,5]
let animal = prompt("Enter one of these animals: Horse, Bird, or Lizard")
if (animal == pets[0])
    console.log(`The ${pets[0]} has a lifespan of ${petAge[0]} years.`)
else if (animal == pets[1])
    console.log(`The ${pets[1]} has a lifespan of ${petAge[1]} years.`)
else
    console.log(`The ${pets[2]} has a lifespan of ${petAge[2]} years.`)


