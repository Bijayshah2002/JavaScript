const course = {
    courseName: "JS in Nepali",
    price:"999",
    courseInstructor:"bijay shah"
}
// course.courseName to print the courseName of the course

const {courseName}=course
console.log(courseName) // we can also asign the big key of the objects
const {courseInstructor :cI} = course
console.log(cI)

// this is called deStructure of the objects
