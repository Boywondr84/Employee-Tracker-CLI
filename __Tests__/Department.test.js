const Department = require('../lib/Department.js');
jest.mock('../lib/Department.js');

console.log(new Department());

test('creates a new department id', () => {
    const department = new Department('HR');

    expect(department.id).toEqual('1');
});

test ('creates a new department object', () => {
    const department = new Department('HR');

    expect(department.name).toBe('HR');
});