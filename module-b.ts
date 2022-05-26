import { ISomething } from "./module-a";

export class RealSomething implements ISomething {
  public id: string;

  constructor(id: string) {
    this.id = id;
  }
}

export function getSomething(): ISomething {
  return new RealSomething("something");
}