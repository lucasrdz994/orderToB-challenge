import { DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '@/database/sequelize.js'
import { Episode } from '@/entities/episode.entity.js'
import { DirectorModel } from './director.model.js'
import { SeasonModel } from './season.model.js'

export type EpisodeCreationAttributes = Optional<Episode, 'id' | 'createdAt' | 'updatedAt'>

export class EpisodeModel extends Model<Episode, EpisodeCreationAttributes> {}

EpisodeModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    seasonId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'season_id'
    },
    directorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Directors',
        key: 'id'
      },
      field: 'director_id',
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
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
    modelName: 'Episode',
    tableName: 'Episodes'
  }
)

EpisodeModel.belongsTo(DirectorModel, { foreignKey: 'directorId', as: 'director' })
EpisodeModel.belongsTo(SeasonModel, { foreignKey: 'seasonId', as: 'season' })
