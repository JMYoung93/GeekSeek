const { Model, DataTypes, Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
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
      type: DataTypes.ENUM,
      values: ["male", "female", "other"],
    },
    looking_for: {
      type: DataTypes.ENUM,
      values: ["male", "female", "other"],
    },
    age: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ethnicity: {
      type: DataTypes.ENUM,
      values: [
        "African American",
        "Asian",
        "Caucasian",
        "Hispanic/Latino",
        "Other",
      ],
    },
    education: {
      type: DataTypes.ENUM,
      values: [
        "Some High School",
        "High School Graduate",
        "Some College",
        "Bachelors (Undergraduate) Degree",
        "Masters Degree",
        "Doctorate Degree",
      ],
    },
    children: {
      type: DataTypes.ENUM,
      values: ["Yes", "No"],
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
