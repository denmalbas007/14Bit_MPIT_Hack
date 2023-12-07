import {
  Association,
  CreationOptional,
  DataTypes,
  HasManyGetAssociationsMixin,
  HasManySetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManyHasAssociationsMixin,
  HasManyCountAssociationsMixin,
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize'
import type { Accident } from './Accident'
import type { ChatRoomParticipant } from './ChatRoomParticipant'
import type { Shift } from './Shift'
import type { UserNotification } from './UserNotification'

type UserAssociations = 'userNotifications' | 'shifts' | 'chatRoomParticipants' | 'accidents'

export class User extends Model<
    InferAttributes<User, {omit: UserAssociations}>,
    InferCreationAttributes<User, {omit: UserAssociations}>
    > {
  declare id: CreationOptional<number>
  declare email: string | null
  declare lastName: string | null
  declare dateOfBirth: string | null
  declare secureSessionId: string | null
  declare passwordHash: string | null
  declare passwordSalt: string | null
  declare firstName: string | null
  declare userType: string | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // User hasMany UserNotification
  declare userNotifications?: NonAttribute<UserNotification[]>
  declare getUserNotifications: HasManyGetAssociationsMixin<UserNotification>
  declare setUserNotifications: HasManySetAssociationsMixin<UserNotification, number>
  declare addUserNotification: HasManyAddAssociationMixin<UserNotification, number>
  declare addUserNotifications: HasManyAddAssociationsMixin<UserNotification, number>
  declare createUserNotification: HasManyCreateAssociationMixin<UserNotification, 'userId'>
  declare removeUserNotification: HasManyRemoveAssociationMixin<UserNotification, number>
  declare removeUserNotifications: HasManyRemoveAssociationsMixin<UserNotification, number>
  declare hasUserNotification: HasManyHasAssociationMixin<UserNotification, number>
  declare hasUserNotifications: HasManyHasAssociationsMixin<UserNotification, number>
  declare countUserNotifications: HasManyCountAssociationsMixin

  // User hasMany Shift
  declare shifts?: NonAttribute<Shift[]>
  declare getShifts: HasManyGetAssociationsMixin<Shift>
  declare setShifts: HasManySetAssociationsMixin<Shift, number>
  declare addShift: HasManyAddAssociationMixin<Shift, number>
  declare addShifts: HasManyAddAssociationsMixin<Shift, number>
  declare createShift: HasManyCreateAssociationMixin<Shift, 'driverId'>
  declare removeShift: HasManyRemoveAssociationMixin<Shift, number>
  declare removeShifts: HasManyRemoveAssociationsMixin<Shift, number>
  declare hasShift: HasManyHasAssociationMixin<Shift, number>
  declare hasShifts: HasManyHasAssociationsMixin<Shift, number>
  declare countShifts: HasManyCountAssociationsMixin

  // User hasMany ChatRoomParticipant
  declare chatRoomParticipants?: NonAttribute<ChatRoomParticipant[]>
  declare getChatRoomParticipants: HasManyGetAssociationsMixin<ChatRoomParticipant>
  declare setChatRoomParticipants: HasManySetAssociationsMixin<ChatRoomParticipant, number>
  declare addChatRoomParticipant: HasManyAddAssociationMixin<ChatRoomParticipant, number>
  declare addChatRoomParticipants: HasManyAddAssociationsMixin<ChatRoomParticipant, number>
  declare createChatRoomParticipant: HasManyCreateAssociationMixin<ChatRoomParticipant, 'participantId'>
  declare removeChatRoomParticipant: HasManyRemoveAssociationMixin<ChatRoomParticipant, number>
  declare removeChatRoomParticipants: HasManyRemoveAssociationsMixin<ChatRoomParticipant, number>
  declare hasChatRoomParticipant: HasManyHasAssociationMixin<ChatRoomParticipant, number>
  declare hasChatRoomParticipants: HasManyHasAssociationsMixin<ChatRoomParticipant, number>
  declare countChatRoomParticipants: HasManyCountAssociationsMixin

  // User hasMany Accident
  declare accidents?: NonAttribute<Accident[]>
  declare getAccidents: HasManyGetAssociationsMixin<Accident>
  declare setAccidents: HasManySetAssociationsMixin<Accident, number>
  declare addAccident: HasManyAddAssociationMixin<Accident, number>
  declare addAccidents: HasManyAddAssociationsMixin<Accident, number>
  declare createAccident: HasManyCreateAssociationMixin<Accident, 'driverId'>
  declare removeAccident: HasManyRemoveAssociationMixin<Accident, number>
  declare removeAccidents: HasManyRemoveAssociationsMixin<Accident, number>
  declare hasAccident: HasManyHasAssociationMixin<Accident, number>
  declare hasAccidents: HasManyHasAssociationsMixin<Accident, number>
  declare countAccidents: HasManyCountAssociationsMixin

  declare static associations: {
    userNotifications: Association<User, UserNotification>,
    shifts: Association<User, Shift>,
    chatRoomParticipants: Association<User, ChatRoomParticipant>,
    accidents: Association<User, Accident>
  }

  static initModel(sequelize: Sequelize): typeof User {
    User.init({
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: DataTypes.TEXT
      },
      lastName: {
        type: DataTypes.TEXT
      },
      dateOfBirth: {
        type: DataTypes.DATEONLY
      },
      secureSessionId: {
        type: DataTypes.TEXT
      },
      passwordHash: {
        type: DataTypes.TEXT
      },
      passwordSalt: {
        type: DataTypes.TEXT
      },
      firstName: {
        type: DataTypes.TEXT
      },
      userType: {
        type: DataTypes.TEXT
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

    return User
  }
}