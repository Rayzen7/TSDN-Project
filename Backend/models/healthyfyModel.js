import { Sequelize } from "sequelize";

const sequelize = new Sequelize("healthyfy", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const Healthyfy = sequelize.define("news", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  link: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.STRING,
  },
}, {
  timestamps: false, 
  freezeTableName: true,
});

export default Healthyfy;

sequelize.sync()
  .then(() => console.log("Database & table ready"))
  .catch((error) => console.error("Error syncing database:", error));
