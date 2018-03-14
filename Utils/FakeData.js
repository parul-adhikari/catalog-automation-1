var faker = require('faker');

var fakeData =function (){

    this.randomFirstName = faker.Name.firstName();
    this.randomLastName= faker.Name.lastName();
    this.randomPhoneNumber= faker.PhoneNumber.phoneNumber();
};

module.exports = new fakeData();