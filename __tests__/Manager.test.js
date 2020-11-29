const Manager = require('../lib/Manager');

test("sets manager's office number", () => {
    const test = 100;
    const manager = new Manager('Dave', 1, 'test@email.com', test);
    expect(manager.officeNumber).toBe(test);
});

test('gets manager role', () => {
    const test = 'Manager';
    const manager = new Manager('Dave', 1, 'test@email.com', 100);
    expect(manager.getRole()).toBe(test);
});