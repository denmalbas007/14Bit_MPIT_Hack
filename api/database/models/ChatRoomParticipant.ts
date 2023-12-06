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
import type { ChatRoom } from './ChatRoom'
import type { User } from './User'

type ChatRoomParticipantAssociations = 'user' | 'chatRoom'

export class ChatRoomParticipant extends Model<
    InferAttributes<ChatRoomParticipant, {omit: ChatRoomParticipantAssociations}>,
    InferCreationAttributes<ChatRoomParticipant, {omit: ChatRoomParticipantAssociations}>
    > {
  declare id: CreationOptional<number>
  declare participantId: number | null
  declare roomId: number | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // ChatRoomParticipant belongsTo User
  declare user?: NonAttribute<User>
  declare getUser: BelongsToGetAssociationMixin<User>
  declare setUser: BelongsToSetAssociationMixin<User, number>
  declare createUser: BelongsToCreateAssociationMixin<User>

  // ChatRoomParticipant belongsTo ChatRoom
  declare chatRoom?: NonAttribute<ChatRoom>
  declare getChatRoom: BelongsToGetAssociationMixin<ChatRoom>
  declare setChatRoom: BelongsToSetAssociationMixin<ChatRoom, number>
  declare createChatRoom: BelongsToCreateAssociationMixin<ChatRoom>

  declare static associations: {
    user: Association<ChatRoomParticipant, User>,
    chatRoom: Association<ChatRoomParticipant, ChatRoom>
  }

  static initModel(sequelize: Sequelize): typeof ChatRoomParticipant {
    ChatRoomParticipant.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      participantId: {
        type: DataTypes.BIGINT
      },
      roomId: {
        type: DataTypes.BIGINT
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

    return ChatRoomParticipant
  }
}