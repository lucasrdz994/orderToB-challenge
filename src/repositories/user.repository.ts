import { User } from '@/entities/user.entity.js'
import { UserModel } from '@/models/user.model.js'

export class UserRepository {
  public async findByEmail(email: string) {
    const user = await UserModel.findOne({ where: { email } })

    if (!user) {
      return null
    }

    return user.dataValues
  }

  public async save({ name, email, password, createdAt, updatedAt }: Omit<User, 'id'>) {
    const user = await UserModel.create({
      email,
      name,
      password,
      createdAt,
      updatedAt
    })

    return user.dataValues
  }
}
