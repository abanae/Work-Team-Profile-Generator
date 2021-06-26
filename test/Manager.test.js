const Manager = require("../lib/Manager");

test("Checking to see if office number was created", () => {
    const officeNum = 303;
    const employee = new Manager("Eric", 12, "aabd@gmail.com", officeNum)
    expect(employee.officeNum).toBe(officeNum)
}) 

test("Getting office number", () => {
    const officeNum = 303;
    const employee = new Manager("Eric", 12, "aabd@gmail.com", officeNum)
    expect(employee.getofficeNum()).toBe(officeNum)
})

// test("Getting role to return as manager", () => {

// })
