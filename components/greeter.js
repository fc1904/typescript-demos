/**
 * author: fcq
 * date: 2020/11/09 16:48:34
 * fileName: greeter.ts
 * description: 第一个typescript demo
 **/
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    var a = "Hello" + " " + person.firstName + " " + person.lastName;
    console.log(a);
    return a;
}
// const user = 11; // error: greeter.ts:15:35 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
var user = new Student("Tom", "M.", "User");
document.body.innerHTML = greeter(user);
