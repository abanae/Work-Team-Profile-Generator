const Employee = require("../lib/Employee")


test("Check to see if it returns an object", () => {

    const employee = new Employee()
    expect(typeof (employee)).toBe("object");

})

test("Check to see if name is created", () => {
    const name = "Eric";
    const employee = new Employee(name)
    expect(employee.name).toBe(name)
})

test("Check to see if Id is created", () => {
    const id = 12;
    const employee = new Employee("Eric", id)
    expect(employee.id).toBe(id)
})

test("Check to see if email is created", () => {
    const email = "aabd@gmail.com";
    const employee = new Employee("Eric", 12, email)
    expect(employee.email).toBe(email)
})

test("Getting name", () => {
    const name = "Eric";
    const employee = new Employee(name)
    expect(employee.getName()).toBe(name)
})

test("Getting id", () =>{
    const id = 12;
    const employee = new Employee ("Eric", id)
    expect(employee.getId()).toBe(id)
})

test("Getting email", () =>{
    const email = "aabd@gmail.com";
    const employee = new Employee("Eric", 12, email)
    expect(employee.getEmail()).toBe(email)
})

test("Getting role", () =>{
    const role = "Employee";
    const employee = new Employee("Eric", 12,"aabd@gmail.com")
    expect(employee.getRole()).toBe("Employee")
})
