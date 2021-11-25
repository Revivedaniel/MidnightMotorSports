// Pulling in our database connection
const db = require("./connection");
// pulling in all our models and deconstructing
const { User, Part, Category, Make, Model } = require("../models");

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

  const categorySeeds = [
    { name: 'Turbo Kits' },
    { name: 'Intercoolers' },
    { name: 'Blow Off Valves' },
    { name: 'Coilovers' },
    { name: 'Lowering Springs' },
    { name: 'Shocks' },
    { name: 'Mufflers' },
    { name: 'Manifolds' },
    { name: 'Heat Shields' },
    { name: 'Calipers' },
    { name: 'Brake Rotors' },
    { name: 'Brake Pads' }
  ];

  const categories = await Category.insertMany(categorySeeds);

  console.log("Categories seeded");

  // Part seeds
  await Part.deleteMany();

  // Dynamically creating partsCount amount of parts
  let partsCount = 36;

  let partSeeds = [];

  for (let index = 0; index < partsCount; index++) {
    let outline = {
      name: `Part ${index}`,
      description: `Part ${index} description`,
      image: `http://localhost:3001/images/${index}`,
      price: Number(index + 1),
      year: index,
      category: categories[Math.floor(index / 3)]._id,
      quantity: index
    };
    partSeeds.push(outline);
  }

  const parts = await Part.insertMany(partSeeds);

  console.log("Parts seeded");

  // Model seeds
  await Model.deleteMany();

  // Dynamically creating modelCount amount of parts
  const modelSeeds = [
    { 
      name: 'evo789',
      parts: [parts[0], parts[1], parts[2], parts[3], parts[4], parts[5]] 
    },
    { 
      name: 'evox',
      parts: [parts[6], parts[7], parts[8], parts[9], parts[10], parts[11]] 
    },
    { 
      name: 'brz',
      parts: [parts[12], parts[13], parts[14], parts[15], parts[16], parts[17]] 
    },
    { 
      name: 'sti',
      parts: [parts[18], parts[19], parts[20], parts[21], parts[22], parts[23]] 
    },
    { 
      name: 'm2',
      parts: [parts[24], parts[25], parts[26], parts[27], parts[28], parts[29]] 
    },
    { 
      name: 'm4',
      parts: [parts[30], parts[31], parts[32], parts[33], parts[34], parts[35]] 
    },
  ];

  const models = await Model.insertMany(modelSeeds);

  console.log("Models seeded");

  // Make seeds
  await Make.deleteMany();

  // Dynamically creating makeCount amount of parts
  const makeSeeds = [
    {
      name: 'mitsubishi',
      models: [models[0], models[1]]
    },
    {
      name: 'subaru',
      models: [models[2], models[3]]
    },
    {
      name: 'bmw',
      models: [models[4], models[5]]
    },
  ];

  await Make.insertMany(makeSeeds);

  console.log("Makes seeded");

  process.exit();
});
