//Enums in TypeScript let you define a group of related, named constants. They make your code more readable and help avoid magic strings/numbers.
enum roles {
    business = 'ba',
    developer = 'dev',
    tester = 'test',
    cyber = 'cs'
}

//Compiled without extra JS, faster and lighter.
const enum Eroles {
    business = 'ba',
    developer = 'dev',
    tester = 'test',
    cyber = 'cs'
}


let user = roles.developer

//Interface => Defines the shape/structure of an object.
interface User {
  id: number;
  name: string;
}

//Type => A flexible alias for any type, not just objects.
type UserId = number;
type Status = "success" | "error";

//Enum => Represents a set of fixed constant values.
enum Role {
  Admin = "admin",
  User = "user"
}

