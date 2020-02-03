class User {
    userName = "John";
    constructor(input) {
        this.userName = input;
    }
    sum() {
        return this.props.a+this.props.b;
    }

    printName() {
        console.log(this.sum());
        console.log('${this.props.userName}, id is ${this.props.id}'); // why is this.props not blue
    }
}
var myUser = new User("Mercer");
myUser.printName();
var myUser2 = new User("Willingham");
myUser2.printName();
var myUser3 = new User("Bailey");
myUser3.printName();

function myFunction () {
    return this;
}
 
var objLiteral = {
    a: 5,
    b: 6,
    c: myFunction
}

console.log(objLiteral.c());
console.log(myFunction());