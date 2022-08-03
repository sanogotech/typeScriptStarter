var Clock = /** @class */ (function () {
    function Clock() {
        this.currentTime = new Date();
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    Clock.prototype.getTime = function () {
        return this.currentTime;
    };
    return Clock;
}());
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// LOG
var clock = new Clock();
console.log(clock.currentTime);
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
//let fruits: string[] = ['Apple', 'Orange', 'Banana'];
person1.hobbies = ['Book', 'Sport', 'Travel'];
var message = "Akwaba";
var firstName = person1.getName();
console.log(message + " from " + firstName);
console.log(person1.hobbies);
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
