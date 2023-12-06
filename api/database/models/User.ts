import {
  Association,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  BelongsToCreateAssociationMixin,
  CreationOptional,
  DataTypes,
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize'
import type { User } from './User'

type UserNotificationAssociations = 'user'

export class UserNotification extends Model<
    InferAttributes<UserNotification, {omit: UserNotificationAssociations}>,
    InferCreationAttributes<UserNotification, {omit: UserNotificationAssociations}>
    > {
  declare id: CreationOptional<number>
  declare userId: number | null
  declare content: string | null
  declare type: string | null
  declare isSuggestion: boolean | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // UserNotification belongsTo User
  declare user?: NonAttribute<User>
  declare getUser: BelongsToGetAssociationMixin<User>
  declare setUser: BelongsToSetAssociationMixin<User, number>
  declare createUser: BelongsToCreateAssociationMixin<User>

  declare static associations: {
    user: Association<UserNotification, User>
  }

  static initModel(sequelize: Sequelize): typeof UserNotification {
    UserNotification.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      userId: {
        type: DataTypes.BIGINT
      },
      content: {
        type: DataTypes.TEXT
      },
      type: {
        type: DataTypes.TEXT
      },
      isSuggestion: {
        type: DataTypes.BOOLEAN
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    }, {
      sequelize
    })

    return UserNotification
  }
}