const Manager = require("../lib/Manager"); //make sure right file path!

//need getSchool and getRole
test('return manager\'s office number', () => {
    const manager = new Manager("Robert", 5, "joe@gmail.com", 4);
    expect(manager.officeNumber).toBe(4);
  });

test('return manager\'s role', () => {
    const manager = new Manager("Robert", 5, "joe@gmail.com", 4);
    expect(manager.getRole()).toBe("Manager");
  });  