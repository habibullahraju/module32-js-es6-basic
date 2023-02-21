class Instructor{
    name;
    address;
    designation = 'web course instructor'
    city;
    team = 'p hero'
    constructor(name, address, city){
        this.name = name;
        this.address = address;
        this.city = city;
    }
    supportSession(time){
        console.log(`start the support session time a ${time}`);
    }
    createQuiz (module){
        console.log(`the quiz of module number ${module}`);
    }

}
const raju = new Instructor('raju ahmed','dhaka','tangail');
console.log(raju);
raju.createQuiz(30)
const  habib = new Instructor('habib', 'khulna', 'madhu');
console.log(habib);