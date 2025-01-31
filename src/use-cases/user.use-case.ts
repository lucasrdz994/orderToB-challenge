import { UserRepository } from '@/repositories/user.repository.js'
import { getTimestamps } from '@/shared/utils/dates.js'
import bcrypt from 'bcrypt'

export class UserUseCases {
  constructor(private userRepository = new UserRepository()) {}

  public async create(name: string, email: string, password: string) {
    const { createdAt, updatedAt } = getTimestamps()

    password = bcrypt.hashSync(password, 10)

    const user = await this.userRepository.save({ name, email, password, createdAt, updatedAt })

    return user
  }
}
