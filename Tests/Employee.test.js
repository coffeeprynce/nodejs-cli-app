const Employee = require("./lib/employee.js");

test("grab new employee", () => {
const employee = new Employee();
expect(typeof(employee1)).toBe("object");
});

test("getName", () => {
    const name = "Quang";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("getID", () => {
    const id = "123";
    const employee = new Employee(id);
    expect(employee.id).toBe(id);
});

test("getEmail", () => {
    const email = "qq@yahoo.com";
    const employee = new Employee(email);
    expect(employee.email).toBe(email);
});


