const mongoClient = require("../database/connection");

const findAllEmployeeInDB = async (req, res) => {
    try {
        const result = await mongoClient.findAllEmployeeInDB();
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

const findEmployeeAccToSalaryInDB = async (req, res) => {
    const query = {salary: { $gt : "30000" }};
    try {
        const result = await mongoClient.findEmployeeAccToSalaryInDB(query);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

const findEmployeeAccToExperienceInDB = async (req, res) => {
    const query = {overallExp : { $gt : "2" }};
    try {
        const result = await mongoClient.findEmployeeAccToExperienceInDB(query);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

const findEmployeeAccToExperienceAndGraduateInDB = async (req, res) => {
    const query = {$and: [{ yearGrad : { $gt : "2015" }},{ overallExp : { $gt : "1" }}]};
    try {
        const result = await mongoClient.findEmployeeAccToExperienceAndGraduateInDB(query);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

const updateSalaryInDB = async (req, res) => {
    const updateData = req.body;
    const filter = updateData.filter;
    const value = {$set: updateData.value}
    console.log(filter);
    console.log(value);
    try {
        const result = await mongoClient.updateSalaryInDB(filter, value);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

const employeeDelete = async (req, res) => {
    const query = { lastCompany: "Y" } ;
    try {
        const result = await mongoClient.deleteInDB(query);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

module.exports = {
    findAllEmployeeInDB, 
    findEmployeeAccToSalaryInDB, 
    findEmployeeAccToExperienceInDB, 
    findEmployeeAccToExperienceAndGraduateInDB,
    updateSalaryInDB,
    employeeDelete
}