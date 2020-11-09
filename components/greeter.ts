/**
 * author: fcq
 * date: 2020/11/09 16:48:34
 * fileName: greeter.ts
 * description: 第一个typescript demo
 **/

class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface AbstractPerson {
  firstName: string;
  lastName: string;
}

function greeter(person: AbstractPerson) {
  const a = "Hello" + " " + person.firstName + " " + person.lastName;
  console.log(a);
  return a;
}

// const user = 11; // error: greeter.ts:15:35 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
const user = new Student("Tom", "M.", "User");

document.body.innerHTML = greeter(user);
