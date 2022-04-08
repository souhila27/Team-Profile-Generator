const Employee = require("../lib/Employee");
test("Can instantiate Employee instance", () => {
    const exmpl = new Employee();
    expect(typeof(exmpl)).toBe("object");
  });
  est("Can set name via constructor arguments", () => {
  const name = "Maria";
  const exmpl = new Employee(name);
  expect(exmpl.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const expml = new Employee("Na", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const expml = new Employee("Na", 1, testValue);
  expect(expml.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Maria";
  const expml = new Employee(testValue);
  expect(expml.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const expml = new Employee("Na", testValue);
  expect(expml.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const expml = new Employee("Na", 1, testValue);
  expect(expml.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const expml = new Employee("Maria", 1, "test@test.com");
  expect(expml.getRole()).toBe(testValue);
});
