//Code challenge 1

/*
  GradeMaster: A function to assign grades based on student marks input.
  param {number} marks - The student's marks, should be between 0 and 100.
  returns {string} - The grade assigned based on the marks.
 */
function calculateGrade(marks) {
    if (marks >= 80 && marks <= 100) {
        return "A";
    } else if (marks >= 60 && marks < 80) {
        return "B";
    } else if (marks >= 50 && marks < 60) {
        return "C";
    } else if (marks >= 40 && marks < 50) {
        return "D";
    } else {
        return "E";
    }
}

// Prompt the user for input
const studentMarks = prompt("Enter student marks (0-100):");


//code challenge 2

// Define a function named calculateDemeritPoints that takes the speed of a car as input.
function calculateDemeritPoints(speed) {
    // Define a constant representing the speed limit.
    const speedLimit = 70;
    
    // Calculate the difference between the actual speed and the speed limit.
    const speedDifference = speed - speedLimit;
    
    // If the speed is less than or equal to the speed limit, print "Ok" and return.
    if (speed <= speedLimit) {
        console.log("Ok");
        return;
    }
    
    // Calculate the number of demerit points based on the speed difference.
    const demeritPoints = Math.floor(speedDifference / 5);
    
    // If the number of demerit points is greater than 12, print "License suspended" and return.
    if (demeritPoints > 12) {
        console.log("License suspended");
        return;
    }
    
    // Print the total number of demerit points.
    console.log("Points: " + demeritPoints);
}


//Code challenge 3

// Function to calculate net salary
function calculateNetSalary(basicSalary) {
    // Constants for deductions
    const nssfRate = 0.004; // 0.40%
    const kraRateBeforeRelief = 0.1175; // 11.75%
    const personalReliefRate = 0.0282; // 2.82%
    const nhifRate = 0.024; // 2.40%
    
    // Calculate NSSF deductions
    const nssfDeduction = basicSalary * nssfRate;
    
    // Calculate taxable pay
    const taxablePay = basicSalary - nssfDeduction;
    
    // Calculate PAYE before relief
    const payeBeforeRelief = taxablePay * kraRateBeforeRelief;
    
    // Calculate personal relief
    const personalRelief = personalReliefRate * 1408; // Assuming a fixed personal relief
    
    // Calculate tax payable
    const taxPayable = (payeBeforeRelief - personalRelief) < 0 ? 0 : (payeBeforeRelief - personalRelief);
    
    // Calculate NHIF deductions
    const nhifDeduction = basicSalary * nhifRate;
    
    // Calculate net pay
    const netPay = basicSalary - nssfDeduction - taxPayable - nhifDeduction;
    
    return netPay;
}

// Prompt the user to enter basic salary
const basicSalaryInput = prompt("Enter your basic salary:");

// Convert the input string to a floating-point number
const basicSalary = parseFloat(basicSalaryInput);

// Calculate net salary using the provided function
const netSalary = calculateNetSalary(basicSalary);

// Display the net salary to the user
console.log("Your net salary is: " + netSalary.toFixed(2));
