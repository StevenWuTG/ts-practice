const steven
// : {
//     name:string;
//     age:number;
// } 
= {
    name: 'steven',
    age:29,
    hobbies: ['cooking','gaming'],

}

let favHobbies: string[]
favHobbies = ['gaming']

console.log( steven.name )

for (const hobby of steven.hobbies){
    console.log(hobby.toUpperCase())
}