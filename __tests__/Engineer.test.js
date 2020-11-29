const Engineer = require('../lib/Engineer');

test("sets engineer's github username", () => {
    const test = 'githubuser';
    const engineer = new Engineer('Dave', 1, 'test@email.com', test);
    expect(engineer.github).toBe(test);
});

test("gets engineer's github username", () => {
    const test = 'githubuser';
    const engineer = new Engineer('Dave', 1, 'test@email.com', test);
    expect(engineer.getGithub()).toBe(test);
});

test("gets engineer role", () => {
    const engineer = new Engineer('Dave', 1, 'test@email.com', 'githubuser');
    expect(engineer.getRole()).toBe('Engineer');
});