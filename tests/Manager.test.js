const Employee = require("../lib/Employee"); //make sure right file path!

describe("Employee class", () => {
    describe("getName method", () => {
      it("stores the employee's name", () => {
        const employee = new Employee("Robert");
        expect(employee.getName()).toBe("Robert")
      });
  
      it("getID", () => {

      });

      it("getEmail", () => {

    });

    it("getRole", () => {

    });

    });
  
  });
  