const Engineer = require("../lib/Engineer");


test ("Checking for Github user", () => {
    const gitHub = "abanae";
    const employee = new Engineer("Eric", 12, "aabd@gmail.com", gitHub)
    expect(employee.gitHub).toBe(gitHub)
})


test("Getting github username ", () => {
    const github = "abanae";
    const employee = new Engineer("Eric", 12, "aabd@gmail.com", github)
    expect(employee.getGithub()).toBe(github)
})


test("GetRole should return Engineer", () => {
    const role = "Engineer";
    const employee = new Engineer("Eric", 12, "aabd@gmail.com", "abanae")
    expect(employee.getRole()).toBe(role)
})




