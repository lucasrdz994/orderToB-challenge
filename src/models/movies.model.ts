import { DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '@/database/sequelize.js'
import { Movie } from '@/entities/movie.entity.js'

export type MovieCreationAttributes = Optional<Movie, 'id' | 'createdAt' | 'updatedAt'>

export class MovieModel extends Model<Movie, MovieCreationAttributes> {}

MovieModel.init(
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
    releaseDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'release_date'
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
    modelName: 'Movie',
    tableName: 'Movies'
  }
)
