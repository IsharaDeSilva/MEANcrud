// this model use to create the crud operations

const mongoose = require('mongoose');
//here employee is the model name and inside it contains the structure of the model
var Employee = mongoose.model('Employee', {
    name: {type: String},
    position: {type: String},
    office: {type: String},
    salary: {type: Number} 
});

module.exports = { Employee };