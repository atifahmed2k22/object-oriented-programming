#! /usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    console.log("Welcome!");
    let exit = false;
    while (!exit) {
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "Select an option",
            choices: ["Staff", "Student", "Exit"],
        });
        if (ans.select === "Staff") {
            console.log("You Approach the Staff Room. Feel Free to Ask Any Question");
        }
        else if (ans.select === "Student") {
            const studentAns = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter Student Name",
            });
            const student = persons.students.find((val) => val.name === studentAns.student);
            if (!student) {
                const newStudent = new Student(studentAns.student);
                persons.addStudent(newStudent);
                console.log(`Hello, I am ${newStudent.name}. Nice to meet you!`);
                console.log("New Student Added");
                console.log("Current Student List:");
                console.log(persons.students);
            }
            else {
                console.log(`Hello, I am ${student.name}. Nice to see you again!`);
                console.log("Existing Student List:");
                console.log(persons.students);
            }
        }
        else if (ans.select === "Exit") {
            console.log("Exiting the Program...");
            exit = true;
        }
    }
};
programStart(persons);
