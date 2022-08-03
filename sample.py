 
class Person {
    first_name: string;
    last_name: string;
  
    constructor(fname: string, lname: string)
    {
        first_name = fname;
        last_name = lname;
    }
    getName(): string
    {
        var fullname: string = first_name + last_name;
        return fullname;
    }
}
  
var henry: Person;

