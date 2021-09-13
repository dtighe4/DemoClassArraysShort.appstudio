// 1. Create an array

// #############################################################
// DO: Create a new form named 'showPets'. On it create 
//           an array named 'pets' that holds two types 
//           of pets: horse and bird. 
//           Output each item in the array to the console, showing the 
//           index and the name of the pet. 
// #############################################################




// **************************************************************
//  2. ADD item to an array 
//      a) kitchenTools[4] = "yellow corner" - what is the problem with this method?  
//      SOLUTIONs: 
//      b) kitchenTools.length - would return a 4. Use that for index of new item. 
 //     c) .push method

/*let kitchenTools = ["orange peeler","red wine stopper","dragon wine stopper","blue clippy"]
let lengthKitchenTools = kitchenTools.length
kitchenTools[lengthKitchenTools] = "yellow corner"
console.log(kitchenTools)
*/
// **************************************************************

// #############################################################
// DO:   add a new pet type  "lizard" to the end of the 'pets' array using 
//          each of the two good ways to add an item to then end of an array. 
//          Output to the console.
// #############################################################




// **************************************************************
//  3. SORT the array:  built-in method .sort()
//     > the default sort order is ascending
//
/*
let kitchenTools = ["orange peeler","red wine stopper","dragon wine stopper","blue clippy"]
kitchenTools.push("yellow corner")
kitchenTools.sort()
console.log(kitchenTools)
console.log(`Reverse order: ${pets.sort().reverse()}`)
*/
// 4. REVERSE the array: Built-in method  '.reverse()' reverses the order 
//    of items in the array. So the last item becomes first, etc. 
//    Example: here is an algorithm to sort an array in descending order: 
//         > first sort it into ascending order:  
//               kitchenTools.sort()
//         > then reverse the sorted array using .reverse():
//               kitchenTools.reverse()
//         > or you can do this all at once by doubling up the methods: 
//               kitchenTools.sort().reverse()

// **************************************************************
// #############################################################
// DO:    Sort the 'pets' arrray in alphabetical order and output to the console.
//           Then sort the array in descendig order. 
//           
// #############################################################






