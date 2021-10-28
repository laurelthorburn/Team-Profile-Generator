const Employee = require("../lib/Employee"); //make sure right file path!

describe("Employee class", () => {
    describe("getName method", () => {
      it("stores the employee's name", () => {
        const employee = new Employee("Robert");
        expect(employee.getName()).toBe("Robert")
      });
  
      it("getID", () => {
        const employee = new Employee("Robert", 5);
        expect(employee.getId()).toBe(5)
      });

      it("getEmail", () => {
        const employee = new Employee("Robert", 5, "joe@gmail.com");
        expect(employee.getEmail()).toBe("joe@gmail.com")

    });

    it("getRole", () => {
        const employee = new Employee("Robert", 5, "joe@gmail.com", "Employee");
        expect(employee.getRole()).toBe("Employee")
    });

    });
  
  });
  

//   describe("replenishStock method", () => {
//     it("increases count", () => {
//       const store = new Store("Big Al's Toy Barn", [
//         { name: "Action Figure", price: 5.0, count: 1 }
//       ]);
//       store.replenishStock("Action Figure", 2);
//       expect(store.stock[0].count).toBe(3);
//     });
//   });
// });