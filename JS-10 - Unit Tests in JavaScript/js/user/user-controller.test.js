const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);  
    console.log(userController.getUsers())  
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);    
    expect(userController.users).not.toContain(user);
  });

test('findByEmail userController', () => {
  let email = "sarahi@gmail.com";
  let user = new User(12345,"Sarahi Alfaro",email);
  userController.add(user);
  expect(userController.findByEmail(email)).toEqual(user);
});

test('find by id userController', () => {
  let id = 54321;
  let user = new User(id, 'Alexis', 'alexis@gmail.com');
  userController.add(user);
  expect(userController.findById(id)).toEqual(user);
});


