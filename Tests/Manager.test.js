const manager = require("./Tests/Manager");
const Employee = require("./Tests/Employee.test.js");

test("getOfficeNumber", () => {
    const officeNumber = 25;
    const employee = new Employee(officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
});