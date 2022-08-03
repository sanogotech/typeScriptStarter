# typeScriptStarter
TypeScript   Starter.

TypeScript is an open-source programming language. It is developed and maintained by Microsoft. TypeScript follows javascript syntactically but adds more features to it. It is a superset of javascript. 



##  Basic Type

* string — This is effectively anything in quotes, though template literals (a.k.a. template strings) are also valid values for strings.
* number — This is, well, a number. Any number that is valid in JavaScript is valid as this type, such as integers, floating points, and etc.
* boolean — A boolean is any value that evaluates to exactly true or exactly false. A valid boolean will always be the keyword true or the keyword false.
* Array — An array is a set of values. Arrays in TypeScript are very similar to those in JavaScript, but you must provide a type for your array which indicates the type of values the array contains. For example, Array<string> would indicate an array of strings. We’ll dig deeper in the next part of this series.
* void and undefined — These values are commonly used to specifically denote that something will return no value or is literally undefined. This topic is best left for our next lesson
* null -
* any — This is literally any and all types as a possibility. For example, you will commonly assign any when you’re starting to type a new object and you haven’t determined all the types. The rule of thumb is you probably shouldn’t use this in a permanent fashion.

## Sample  Code :   sample.ts

```typeScript

 
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}
  
class Clock implements ClockInterface {
    currentTime: Date = new Date();
  
    setTime(d: Date) {
      this.currentTime = d;
    }
    constructor() {}
  
    getTime():Date{
      return this.currentTime;
    }
}

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}

// LOG
let clock: Clock = new Clock();
console.log(clock.currentTime);
  


class Person {
    first_name !: string;
    last_name ?: string;
  
    constructor(fname: string, lname : string)
    {
        this.first_name = fname;
        this.last_name = lname;
    }
    getName(): string
    {
        var fullname: string = this.first_name + " " + this.last_name;
        return fullname;
    }
}
  
  
var person1: Person = new Person("Gombo","KOFFI");

var message: string = "Akwaba";
var firstName: string = person1.getName();
console.log(message + " from " + firstName);


// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);


```
* Running a Typescript code
```
npm install -g typescript
tsc --version
tsc sample.ts
node sample.js
```

## Docs
- https://www.typescriptlang.org/
- https://www.typescriptlang.org/docs/handbook/variable-declarations.html
- https://www.w3schools.com/typescript/
- https://www.geeksforgeeks.org/hello-world-in-typescript-language/
- https://betterprogramming.pub/get-started-with-typescript-part-1-440d2ec9e59
