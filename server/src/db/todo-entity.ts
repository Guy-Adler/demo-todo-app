import { TodoCreateData, TodoData } from "@shared/models/todo-data";
import { DataTypes, Model } from "sequelize";
import { sequelize } from ".";

interface TodoInstance extends Model<TodoData, TodoCreateData>, TodoData {}

export const TodoEntity = sequelize.define<TodoInstance>("Todo", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  text: {
    type: DataTypes.STRING,
  },
});
