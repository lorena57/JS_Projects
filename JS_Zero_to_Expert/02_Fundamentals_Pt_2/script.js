// const lorena = {
//     firstName: 'Lorena',
//     lastName: 'DaBest',
//     birthYear: '2000',
//     job: 'student',
//     friends: ['Larry', 'Curly', 'Moe'],
//     hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear
    // }

    // calcAge: function() {
// this points to lorena the object
//     return 2037 - this.birthYear;
//     }
// }


// this.age creates a new property on the object (the lorena object)
    // calcAge: function() {
    //     console.log(lorena)
    //     this.age = 2037 - this.birthYear
    // return this.age;
   
    // },

//     getSummary: function() { 
//         return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and she has 
//         ${this.hasDriversLicense ? 'a' : 'no'} driver's license.` 
//     }


// }

// console.log(lorena.getSummary())

// Whatever is before the dot is the calling the method
// console.log(lorena.calcAge())
// console.log(lorena.age)

// Dot notation
// console.log(lorena.calcAge(2000))

// Bracket notation
// console.log(lorena['calcAge'](2000))

//for loop keeps running while condition is TRUE
// for( let i = 1; i <= 10; i++) {
//     console.log(`Lifting weights repetition ${i}`)
// }

// const lorenaArray = [
//     'Lorena',
//     'DaBest',
//     2039 - 2000,
//     'student',
//     ['Larry', 'Moe', 'Curly']
// ];

// const types = [];


// for(let i = 0; i < lorenaArray.length ; i++) {
    // console.log(lorenaArray[i], typeof lorenaArray[i])

    //copying lorenaArray into types array
    // types[i] = lorenaArray[i]

    //Or I can push the items into the array
//     types.push(lorenaArray[i])
// }

// console.log(types)

// const years = [ 1970, 1980, 1990, 2000]

// const ages = [];

// for(i = 0; i < years.length; i++) {
    // years[i] is the current loop position
//     ages.push(2037 - years[i]);
// }

// console.log(ages)

