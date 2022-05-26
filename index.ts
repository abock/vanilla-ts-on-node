import { ISomething } from "./module-a";
import { getSomething } from "./module-b";

const something: ISomething = getSomething();

console.log(something);