const Intern = require('../lib/Intern');

test('sets school name of intern', () => {
    const test = 'UT';
    const intern = new Intern('Dave', 1, 'test@email.com', test);
    expect(intern.school).toBe(test);
});

test("gets intern's school name", () => {
    const test = 'UT';
    const intern = new Intern('Dave', 1, 'test@email.com', test);
    expect(intern.getSchool()).toBe(test);
});

test('gets intern role', () => {
    const test = 'Intern';
    const intern = new Intern('Dave', 1, 'test@email.com', 'UT');
    expect(intern.getRole()).toBe(test);
});