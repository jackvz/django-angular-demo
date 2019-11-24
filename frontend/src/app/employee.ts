export class Employee {
  person: {
      id: number,
      last_name: string,
      first_name: string,
      birth_date: Date
  }
  id: number;
  employee_num: Number;
  employee_date: Date;
  terminated_date: Date;

  static fromData(data) {
    return new this(
      data.person.id,
      data.person.last_name,
      data.person.first_name,
      data.person.birth_date,
      data.id,
      data.employee_num,
      data.employee_date,
      data.terminated_date
    )
  }

  constructor(
    person_id: number,
    person_last_name: string,
    person_first_name: string,
    person_birth_date: Date,
    id: number,
    employee_num: Number,
    employee_date: Date,
    terminated_date: Date
  ) {
    this.person = { id: null, last_name: null, first_name: null, birth_date: null };
    this.person.id = person_id;
    this.person.last_name = person_last_name;
    this.person.first_name = person_first_name;
    this.person.birth_date = person_birth_date;
    this.id = id,
    this.employee_num = employee_num;
    this.employee_date = employee_date;
    this.terminated_date = terminated_date;
  }
}
