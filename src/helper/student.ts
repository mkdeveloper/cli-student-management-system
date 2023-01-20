export default class Student {
  static set_id = 11110;
  private _id: number;
  private _balance: number;
  private _feePaid: boolean;
  private _balanceStatus = "Un-Paid";
  private _courses: { name: string; instructor: string }[] = [];

  constructor(
    private _name: string,
    private _fName: string,
    private _age: number,
    private _address: string
  ) {
    this._name = _name;
    this._fName = _fName;
    this._age = _age;
    this._feePaid = false;
    this._address = _address;
    this._id = ++Student.set_id;
    this._balance = 0;
  }

  get getCourse() {
    return this._courses;
  }
  set setCourse(course: { name: string; instructor: string }) {
    this._courses.push(course);
  }

  get getId() {
    return this._id;
  }

  get getName() {
    return this._name;
  }

  get getFname() {
    return this._fName;
  }

  get getAddress() {
    return this._address;
  }

  get getBalance() {
    return this._balance;
  }

  get getFee() {
    return this._feePaid;
  }

  set setFee(paid: boolean) {
    this._feePaid = paid;
  }

  set setBalance(balance: number) {
    this._balance = balance;
  }

  get getbalanceState() {
    if (this._balance > 0) {
      return `Fee: ${this._balanceStatus}`;
    } else {
      return "";
    }
  }
}
