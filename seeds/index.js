const sequelize = require("../config/connection");
const { User, Questions } = require("../models");

const userData = require("./userData.json");
const questionsData = require("./questionsData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const questions of questionsData) {
    await Questions.create({
      ...questions,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
