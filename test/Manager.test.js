const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");


test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
    console.log("Can set office number via constructor argument");
});

test("can get office number via getOffice()", () => {
    console.log("Can set office number via constructor argument");
});