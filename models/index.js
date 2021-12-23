const Questions = require("./Questions");
const User = require("./User");

User.hasMany(Questions, {
  foreignKey: "questions_id",
  onDelete: "CASCADE",
});

Questions.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { Login, User, Questions };
