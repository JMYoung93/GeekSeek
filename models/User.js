const { Model, DataTypes, Sequelize } = require("sequelize");
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
