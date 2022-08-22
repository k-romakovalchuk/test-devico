class Worker {
  constructor(name,surname,rate, days) {
    this.surname = surname;
    this.name = name;
    this.rate = rate;
    this.days = days;
  }

  getSalary() {
    return this.rate*this.days;
  }

  setRate(property) {
    if (property) {
      this.rate = property;
    } else {
      console.log('Имя должно содержать хотя бы одну букву!');
    }
  }

  setDays(property) {
    if (property) {
      this.days = property;
    } else {
      console.log('Имя должно содержать хотя бы одну букву!');
    }
  }

  getName() {
    return this.name;
  }
  getSurname() {
    return this.surname;
  }
  getRate() {
    return this.rate;
  }
  getDays() {
    return this.days;
  }
}

const worker = new Worker('Ivan', 'Ivanov', 10, 31);
console.log(worker.getRate()); //outputs 10
console.log(worker.getDays()); //outputs 31
console.log(worker.getSalary()); //outputs 310 - what equal 10*31
// Now let's use setters:
worker.setRate(20); // let's increase rate
worker.setDays(10); // let's decrease days
console.log(worker.getSalary()); //outputs 200 - what equal 20*10