var faker = require('faker');


var fakeData =function (){

    this.randomFirstName = faker.name.firstName(0);
    // this.randomLastName= faker.Name.lastName();
};

module.exports = new fakeData();
