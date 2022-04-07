const Engineer = require("../lib/Engineer");
test("Can set GitHUb account via constructor", () => {
    const testValue = "GitHubUser";
    const exmpl = new Engineer("Na", 1, "test@test.com", testValue);
    expect(exmpl.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const exmpl = new Engineer("Na", 1, "test@test.com", "GitHubUser");
    expect(exmpl.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const exmpl = new Engineer("Na", 1, "test@test.com", testValue);
    expect(exmpl.getGithub()).toBe(testValue);
});