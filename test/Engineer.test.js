const Engineer = require("../lib/Engineer");


test ("Checking for Github user", () => {
    const gitHub = "abanae";
    const employee = new Engineer("Eric", 12, "aabd@gmail.com", gitHub)
    expect(employee.gitHub).toBe(gitHub)
})

test("GetRole should return Engineer", () => {
    const returnEnginer = "Engineer";
    const employee = new Engineer("Eric", 12, "aabd@gmail.com","abanae")
    expect(employee.getRole()).toBe(returnEnginer)
})

// test("Should ")







// github—GitHub username
// getGithub()
// getRole()—overridden to return 'Engineer'