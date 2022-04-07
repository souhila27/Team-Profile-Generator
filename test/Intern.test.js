const Intern = require("../lib/Intern");
test("Can set school via constructor", () => {
    const testValue = "TRY";
    const exmpl = new Intern("Na", 1, "test@test.com", testValue);
    expect(exmpl.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const exmpl= new Intern("Na", 1, "test@test.com", "TRY");
    expect(exmpl.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "TRY";
    const exmpl = new Intern("Na", 1, "test@test.com", testValue);
    expect(exmpl.getSchool()).toBe(testValue);
});
