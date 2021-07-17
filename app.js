var steven = {
    name: 'steven',
    age: 29,
    hobbies: ['cooking', 'gaming'],
    role: [3, 'gamer']
};
steven.role.push('admin');
steven.role[0] = 10;
var favHobbies;
favHobbies = ['gaming'];
console.log(steven.name);
for (var _i = 0, _a = steven.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
