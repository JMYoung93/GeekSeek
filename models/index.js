const Login = require("./Login");
const Questions = require("./Questions");
const User = require("./User");

User.hasMany(Questions, {
  foreignKey: "questions_id",
});

Questions.belongsTo(User, {
  foreignKey: "login_id",
});

module.exports = { Login, User, Questions };
