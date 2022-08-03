 
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
    hobbies: Array<string>;
    age : number;
  
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
//let fruits: string[] = ['Apple', 'Orange', 'Banana'];
person1.hobbies = ['Book', 'Sport', 'Travel'];

var message: string = "Akwaba";
var firstName: string = person1.getName();
console.log(message + " from " + firstName);
console.log(person1.hobbies)

// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
