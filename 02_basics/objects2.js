// const tinderUser = new Object();
// console.log(tinderUser);

//singleton define objects--
const tinderUser = {};
tinderUser.id = "@1234";
tinderUser.name = "Sam";
tinderUser.isLogedIn = false;

console.log(tinderUser);

const regularUser = {
    id: "1234",
    email: "hitesh@regular.com",
    userName : { 
        fullname : {
            firstname : "Hitesh",
            lastname : "Chaudhry"
        }
    }

}
console.log(regularUser.userName.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = console.log(obj1, obj2);
const obj3 = Object.assign({}, obj1, obj2, obj4); // used to assign the objects.
// const obj3 = {...obj1,...obj2}
console.log(obj3);

Users = {
    user1 : {
        email : "User1@gamil.com"
    },
      user2 : {
        email : "User1@gamil.com"
    },
      user3 : {
        email : "User1@gamil.com"
    },
      user4 : {
        email : "User1@gamil.com"
    },
}
Users.user1[0];

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnPropertry('name')); // to find the exits property or not in obj.

//````````````````````````````````````*```````````````````````````````````````
const course = {
    courseName : "js in hindi",
    price : 999,
    courseInstructor : "Hitesh",
}
//course.courseInstructor - normal way to acces objects values;

const {courseInstructor: Instructor} = course;
// console.log(courseInstructor);
console.log(Instructor);