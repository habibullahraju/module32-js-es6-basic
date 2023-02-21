class Student{
    id;
    name;
    location;
    group;
    schoolName = 'mirpur model school'
    constructor(id, name, location, science){
        this.id = id;
        this.name = name;
        this.location = location;
        this.group = science;
    }
    comingSheft(time){
        console.log(`i am going to school at ${time}`);
    }
    takeSomeNote(subject){
        console.log(`i take notes everyday ${subject} subject`);
    }
}
const raju = new Student(1,'raju ahmed','dhaka', 'science');
console.log(raju);
raju.comingSheft('8.00');
raju.takeSomeNote('english');
