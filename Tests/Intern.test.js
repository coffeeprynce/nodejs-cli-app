const Employee = require("./Tests/Employee.test.js");

test("getSchool", () => {
    const school = "Minnesota";
    const employee = new Employee(school);
    expect(employee.school).toBe(school);
});