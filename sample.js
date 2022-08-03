var Person = /** @class */ (function () {
    function Person(fname, lname) {
        this.first_name = fname;
        this.last_name = lname;
    }
    Person.prototype.getName = function () {
        var fullname = this.first_name + " " + this.last_name;
        return fullname;
    };
    return Person;
}());
var person1 = new Person("Gombo", "KOFFI");
var message = "Akwaba";
var firstName = person1.getName();
console.log(message + " from " + firstName);
