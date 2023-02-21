class Instructor{
    name;
    designation = 'web instructor'
    team = 'ph course'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSesseion(time){
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module){
        console.log(`i will create quiz of module number ${module}`);
    }

}

const raju = new Instructor();
console.log(raju);
raju.createQuiz(10);
raju.startSupportSesseion('9:00')

const solaiman = new Instructor('solaiman khan', 'dhaka');
console.log(solaiman);
solaiman.createQuiz(45);
solaiman.startSupportSesseion('9:33');