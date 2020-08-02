class Student {

    constructor ( name, email, community ) {

        this.name = name;
        this.email = email;
        this.community = community;

    }

};

class Bootcamp {

    constructor ( name, level, students = [ ] ) {

        this.name = name;
        this.level = level;
        this.students = students;

    }

    registerStudent( student ) {

        //if there is already students in the bootcamp 
        if( this.students.length > 0 ){

             //check to see if email is in Bootcamp students
            this.students.map( (bootcampStudent) => {

                if( bootcampStudent.email !== student.email ) {

                    this.students.push( student );
                    console.log(`Registering ${student.email} to ${this.name} Bootcamp`);
                    
                 }else {

                    console.log(`Failed to register ${student.email} to ${this.name} Bootcamp`);
                
                }

            } );

        } else {

            //no students in the bootcamp so add the first one
            this.students.push( student );
            console.log(`Registering ${student.email} to ${this.name} Bootcamp`);

        }
       
        //return bootcamps registered students
        return this.students;
         
    };//function register student

};//class bootcamp
let student = new Student("Bob", "bob@gmail.com", "The Rats");
let student2 = new Student("Chad", "smith@gmail.com", "the Chads");


let Nucamp = new Bootcamp( "Nucamp", "10");

 Nucamp.registerStudent( student );
 Nucamp.registerStudent( student );
 Nucamp.registerStudent( student2 );

