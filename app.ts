const steven
: {
    name:string;
    age:number;
    hobbies:string[];
    role: [number, string]

} 
= {
    name: 'steven',
    age:29,
    hobbies: ['cooking','gaming'],
    role: [3, 'gamer']

}

steven.role.push('admin')
steven.role[0] = 10

let favHobbies: string[]
favHobbies = ['gaming']

console.log( steven.name )

for (const hobby of steven.hobbies){
    console.log(hobby.toUpperCase())
}