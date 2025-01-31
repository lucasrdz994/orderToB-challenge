import { DirectorModel } from '@/models/director.model.js'
import { EpisodeModel } from '@/models/episode.model.js'
import { SeasonModel } from '@/models/season.model.js'

export class EpisodeRepository {
  public async getById(id: number) {
    const episode = await EpisodeModel.findByPk(id, {
      include: [
        {
          model: DirectorModel,
          as: 'director', // Alias utilizado en la asociación
          required: false // Si no todos los episodios tienen un director, puedes poner `false`
        },
        {
          model: SeasonModel,
          as: 'season', // Alias utilizado en la asociación
          required: false // Si no todos los episodios tienen una temporada, puedes poner `false`
        }
      ]
    })

    if (!episode) {
      return null
    }

    return episode.dataValues
  }
}
