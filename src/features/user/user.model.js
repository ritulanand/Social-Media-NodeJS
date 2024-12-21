export class UserModel {
  constructor(name, email, password, type, id) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.type = type;
    this.id = id;
  }

  static signUp(name, email, password, type) {
    const new_user = new UserModel(name, email, password, type);
    new_user.id = users.length + 1;
    users.push(new_user);
    return new_user;
  }
  static signIn(email, password) {
    const user = users.find((u) => u.email == email && u.password == password);
    console.log("user sign in", user);
    return user;
  }
  static getAll() {
    return users;
  }
}
let users = [
  {
    id: 1,
    name: "ritul",
    email: "admin@gmail.com",
    password: "Password1",
    type: "admin",
  },
  {
    id: 2,
    name: "xyz",
    email: "xyz@gmail.com",
    password: "Password2",
    type: "xyz",
  },
];
