const {MongoClient} = require('mongodb');

const url = "mongodb://localhost:27017"
const client = new MongoClient(url);

const findAllEmployeeInDB = async () => {
    const database = client.db("Human_Resource");
    const collection = database.collection("employee");
    await client.connect();
    const dbResponse = await collection.find().toArray();
    await client.close();
    return dbResponse; 
}

const findEmployeeAccToSalaryInDB = async (query) => {
    const database = client.db("Human_Resource");
    const collection = database.collection("employee");
    await client.connect();
    const dbResponse = await collection.find(query).toArray();
    await client.close();
    return dbResponse; 
}

const findEmployeeAccToExperienceInDB = async (query) => {
    const database = client.db("Human_Resource");
    const collection = database.collection("employee");
    await client.connect();
    const dbResponse = await collection.find(query).toArray();
    await client.close();
    return dbResponse; 
}

const findEmployeeAccToExperienceAndGraduateInDB = async (query) => {
    const database = client.db("Human_Resource");
    const collection = database.collection("employee");
    await client.connect();
    const dbResponse = await collection.find(query).toArray();
    await client.close();
    return dbResponse; 
}

const updateSalaryInDB = async (filteredCond, value) => {
    const database = client.db("Human_Resource");
    const collection = database.collection("employee");
    await client.connect();
    const dbResponse = await collection.updateOne(filteredCond, value);
    await client.close();
    return dbResponse; 
}

const deleteInDB = async (filteredCond) => {
    const database = client.db("Human_Resource");
    const collection = database.collection("employee");
    await client.connect();
    const dbResponse = await collection.deleteMany(filteredCond);
    await client.close();
    return dbResponse; 
}

module.exports = {
    findAllEmployeeInDB, 
    findEmployeeAccToSalaryInDB, 
    findEmployeeAccToExperienceInDB, 
    findEmployeeAccToExperienceAndGraduateInDB,
    updateSalaryInDB,
    deleteInDB
}