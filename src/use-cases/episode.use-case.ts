import { EpisodeRepository } from '@/repositories/episode.repository.js'

export class EpisodeUseCases {
  constructor(private episodeRepository = new EpisodeRepository()) {}

  public async getById(id: number) {
    const user = await this.episodeRepository.getById(id)

    return user
  }
}
