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
    };
    partSeeds.push(outline);
  }

  const parts = await Part.insertMany(partSeeds);

  console.log("Parts seeded");

  // Category seeds
  await Category.deleteMany();

  // Dynamically creating categoryCount amount of parts
  let categoryCount = 81;

  let categorySeeds = [];

  let categoryInnerIndex = -1;

  for (let index = 0; index < categoryCount; index++) {
    let outline = {
      name: `category ${index}`,
      parts: [
        parts[categoryInnerIndex + 1],
        parts[categoryInnerIndex + 2],
        parts[categoryInnerIndex + 3],
      ],
    };
    categorySeeds.push(outline);
    categoryInnerIndex += 3;
  }

  const categories = await Category.insertMany(categorySeeds);

  console.log("Categories seeded");

  // Year seeds
  await Year.deleteMany();

  // Dynamically creating yearCount amount of parts
  let yearCount = 27;

  let yearSeeds = [];

  let yearInnerIndex = -1;

  for (let index = 0; index < yearCount; index++) {
    let outline = {
      name: `Year ${index}`,
      categories: [
        categories[yearInnerIndex + 1],
        categories[yearInnerIndex + 2],
        categories[yearInnerIndex + 3],
      ],
    };
    yearSeeds.push(outline);
    yearInnerIndex += 3;
  }

  const years = await Year.insertMany(yearSeeds);

  console.log("Years seeded");

  // Model seeds
  await Model.deleteMany();

  // Dynamically creating modelCount amount of parts
  let modelCount = 9;

  let modelSeeds = [];

  let modelInnerIndex = -1;

  for (let index = 0; index < modelCount; index++) {
    let outline = {
      name: `Year ${index}`,
      years: [
        years[modelInnerIndex + 1],
        years[modelInnerIndex + 2],
        years[modelInnerIndex + 3],
      ],
    };
    modelSeeds.push(outline);
    yearInnerIndex += 3;
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
      name: `Year ${index}`,
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

  console.log("Years seeded");

  process.exit();
});
