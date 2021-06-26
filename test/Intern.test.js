const Intern = require("../lib/Intern");

test("Checking to see if School has been provided", () => {
    const school = "College";
    const employee = new Intern("Eric", 12, "aabd@gmail.com", school)
    expect(employee.school).toBe(school)
})

test("Getting school name", () => {
    const school = "College";
    const employee = new Intern("Eric", 12, "aabd@gmail.com", school)
    expect(employee.getSchool()).toBe(school)
})

test("Getting role to return as Intern", () => {
    const role = "Intern";
    const employee = new Intern("Eric", 12, "aabd@gmail.com", "College")
    expect(employee.getRole()).toBe(role)
})