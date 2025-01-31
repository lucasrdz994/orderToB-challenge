import { DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '@/database/sequelize.js'
import { Director } from '@/entities/director.entity.js'

export type DirectorCreationAttributes = Optional<Director, 'id' | 'createdAt' | 'updatedAt'>

export class DirectorModel extends Model<Director, DirectorCreationAttributes> {}

DirectorModel.init(
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
    birthdate: {
      type: DataTypes.DATE,
      allowNull: true
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
    modelName: 'Director',
    tableName: 'Directors'
  }
)
