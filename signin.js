console.log("I am learning JavaScript for the first time")
//data type:
const ladi = 'this is ladi'
const obiora_age = 15
true
false
//listarray []
//object {}
const adeola_profile_list = ["Adeola", "Olatunde", 90, 4, "190401999"]
//example of an object
const adeola_profile_obj = {
    first_name:"Adeola",
    last_name:"Olatunde",
    age:90,
    siblings:4,
    matric_no:140401999
}
console.log(adeola_profile_obj.first_name)
console.log(adeola_profile_obj.last_name)
console.log(adeola_profile_obj.age)

//JavaScript - a programming language - add functionalities to your html and css
//Do you know that you can change your html content with JavaScript?
//const header_object = document.getElementsByClassName("header")[0]
const header_object = document.querySelector(".header")
console.log(header_object)
//header_object.innerText = "CHIAMAKA"
header_object.innerText = adeola_profile_list[2]

//Create a car object with 10 properties and print to ensure that it's working
//Create a list of footer items and change footer with each item of the list 