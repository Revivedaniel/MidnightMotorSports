// Pulling in our database connection
const db = require("./connection");
// pulling in all our models and deconstructing
const { User, Part, Category, Make, Model, Year } = require("../models");

// running the following code exactly one time upon open
db.once("open", async () => {
  // User seeds
  await User.deleteMany();

  await User.create({
    firstName: "Daniel",
    lastName: "Stark",
    email: "daniel@testmail.com",
    password: "password12345",
  });

  await User.create({
    firstName: "Maxwell",
    lastName: "Walin",
    email: "maxwell@testmail.com",
    password: "password12345",
  });

  await User.create({
    firstName: "Jesus",
    lastName: "Bautista",
    email: "jesus@testmail.com",
    password: "password12345",
  });

  await User.create({
    firstName: "Parth",
    lastName: "Bhatt",
    email: "parth@testmail.com",
    password: "password12345",
  });

  await User.create({
    firstName: "Ernesto",
    lastName: "Garcia",
    email: "ernesto@testmail.com",
    password: "password12345",
  });

  console.log("Users seeded");
  
  // Category seeds
  await Category.deleteMany();

  // Dynamically creating categoryCount amount of parts
  let categoryCount = 81;
  
  let categorySeeds = [];
  
  for (let index = 0; index < categoryCount; index++) {
    let outline = {
      name: `category ${index}`,
    };
    categorySeeds.push(outline);
  }
  
  const categories = await Category.insertMany(categorySeeds);

  console.log("Categories seeded");

  // Part seeds
  await Part.deleteMany();

  // Dynamically creating partsCount amount of parts
  let partsCount = 243;

  let partSeeds = [];

  for (let index = 0; index < partsCount; index++) {
    let outline = {
      name: `Part ${index}`,
      description: `Part ${index} description`,
      image: `http://localhost:3001/images/${index}`,
      price: Number(index + 1),
      year: index,
      category: categories[0]
    };
    partSeeds.push(outline);
  }

  const parts = await Part.insertMany(partSeeds);

  console.log("Parts seeded");


  // Model seeds
  await Model.deleteMany();

  // Dynamically creating modelCount amount of parts
  let modelCount = 9;

  let modelSeeds = [];

  let modelInnerIndex = -1;

  for (let index = 0; index < modelCount; index++) {
    let outline = {
      name: `Model ${index}`,
      parts: [
        parts[modelInnerIndex + 1],
        parts[modelInnerIndex + 2],
        parts[modelInnerIndex + 3],
      ],
    };
    modelSeeds.push(outline);
  }

  const models = await Model.insertMany(modelSeeds);

  console.log("Models seeded");

  // Make seeds
  await Make.deleteMany();

  // Dynamically creating makeCount amount of parts
  let makeCount = 3;

  let makeSeeds = [];

  let makeInnerIndex = -1;

  for (let index = 0; index < makeCount; index++) {
    let outline = {
      name: `Make ${index}`,
      models: [
        models[makeInnerIndex + 1],
        models[makeInnerIndex + 2],
        models[makeInnerIndex + 3],
      ],
    };
    makeSeeds.push(outline);
    makeInnerIndex += 3;
  }

  await Make.insertMany(makeSeeds);

  console.log("Make seeded");

  process.exit();
});
