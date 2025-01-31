import { DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '@/database/sequelize.js'
import { User } from '@/entities/user.entity.js'

export type UserCreationAttributes = Optional<User, 'id' | 'createdAt' | 'updatedAt'>

export class UserModel extends Model<User, UserCreationAttributes> {}

UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    }
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'Users'
  }
)
