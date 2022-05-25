const { objDisplay } = require("chai/lib/chai/utils")

const employee ={
    name: '',
    streetAddress: '',
}

function updateEmployeeWithAndValue(employee, key, value){
    const newEmployee = {...employee}
    newEmployee[key] = value
    return newEmployee
}


