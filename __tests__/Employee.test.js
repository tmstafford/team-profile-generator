const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});
/*
test('creates employee', () => {
    const employee = new Employee();
    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Dave');
    expect(employee.getName()).toEqual('Dave');
});
*/

test('sets employee name in object', () => {
    const name = 'Dave';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('sets employee id in object', () => {
    const test = 100;
    const employee = new Employee('Dave', test);
    expect(employee.id).toBe(test);
});

test('sets employee email in object', () => {
    const test = 'test@email.com';
    const employee = new Employee('Dave', 1, test);
    expect(employee.email).toBe(test);
});

test('gets employee name via getName()', () => {
    const name = 'Dave';
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

test('gets employee id via getId()', () => {
    const test = 100;
    const employee = new Employee('Dave', test);
    expect(employee.getId()).toBe(test);
});

test('gets employee email via getEmail()', () => {
    const test = 'test@email.com';
    const employee = new Employee('Dave', 1, test);
    expect(employee.getEmail()).toBe(test);
});

test('gets employee role', () => {
    const employee = new Employee('Dave', 1, 'test@email.com');
    expect(employee.getRole()).toBe('Employee');
});
