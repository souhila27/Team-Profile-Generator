const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const exmpl = new Manager("Na", 1, "test@test.com", testValue);
  expect(exmpl.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const exmpl = new Manager("Na", 1, "test@test.com", 100);
  expect(exmpl.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const exmpl = new Manager("Na", 1, "test@test.com", testValue);
  expect(exmpl.getOfficeNumber()).toBe(testValue);
});