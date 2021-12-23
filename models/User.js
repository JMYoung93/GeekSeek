const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: Sequelize.ENUM,
      values: ["male", "female", "other"],
    },
    looking_for: {
      type: Sequelize.ENUM,
      values: ["male", "female", "other"],
    },
    age: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ethnicity: {
      type: Sequelize.ENUM,
      values: [
        "African American",
        "Asian",
        "Caucasian",
        "Hispanic/Latino",
        "Other",
      ],
    },
    education: {
      type: Sequelize.ENUM,
      values: [
        "Some High School",
        "High School Graduate",
        "Some College",
        "Bachelor's (Undergraduate) Degree",
        "Master's Degree",
        "Doctorate Degree",
      ],
    },
    children: {
      type: DataTypes.BOOLEAN,
    },
    description: {
      type: DataTypes.STRING,
    },
    login_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "login",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
