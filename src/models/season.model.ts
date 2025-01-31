import { DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '@/database/sequelize.js'
import { Season } from '@/entities/season.entity.js'

export type SeasonCreationAttributes = Optional<Season, 'id' | 'createdAt' | 'updatedAt'>

export class SeasonModel extends Model<Season, SeasonCreationAttributes> {}

SeasonModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tvShowId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'tv_show_id',
      references: {
        model: 'TV_Shows',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
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
    modelName: 'Season',
    tableName: 'Seasons'
  }
)
