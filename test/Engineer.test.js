const Engineer = require("../lib/Engineer");


test ("Checking for Github user", () => {
    const gitHub = "abanae";
    const employee = new Engineer("Eric", 12, "aabd@gmail.com", gitHub)
    expect(employee.gitHub).toBe(gitHub)
})











// github—GitHub username
// getGithub()
// getRole()—overridden to return 'Engineer'