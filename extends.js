class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name= name;
        this.location = location;
    }
    feedback(){
        console.log(`${this.name} wow thank you for your feedback`);
    }
}
class Developer extends TeamMember{
   constructor(name, location, tech){
    super(name, location);
    this.tech = tech;
   }
    tech;
    team = 'ph course'
    developerFeature(feacture){
        console.log(`i do created by ${feacture}`);
    }
    releaseVersion(version){
        console.log(`now release this version number of: ${version}`);
    }
  
}
class StudentCare extends TeamMember{
    tech;
    team = 'ph course'
    constructor(name, location,tech){
        super(name, location)
        this.tech = tech;
    }
    developerFeature(feacture){
        console.log(`i do created by ${feacture}`);
    }
    releaseVersion(version){
        console.log(`now release this version number of: ${version}`);
    }
 
}
class JobPlacement extends TeamMember{
    tech;
    team = 'ph course'
    constructor(name, location, tech){
        super(name, location)
        this.tech = tech;
    }
    developerFeature(feacture){
        console.log(`i do created by ${feacture}`);
    }
    releaseVersion(version){
        console.log(`now release this version number of: ${version}`);
    }

}
const habibullah = new Developer('raju','dhaka','js');
console.log(habibullah);
habibullah.feedback()
habibullah.releaseVersion(4.00)

