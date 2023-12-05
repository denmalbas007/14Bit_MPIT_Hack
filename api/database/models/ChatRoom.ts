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
import type { ChatMessage } from './ChatMessage'
import type { ChatRoomParticipant } from './ChatRoomParticipant'

type ChatRoomAssociations = 'chatRoomParticipants' | 'chatMessages'

export class ChatRoom extends Model<
  InferAttributes<ChatRoom, {omit: ChatRoomAssociations}>,
  InferCreationAttributes<ChatRoom, {omit: ChatRoomAssociations}>
> {
  declare id: CreationOptional<number>
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // ChatRoom hasMany ChatRoomParticipant
  declare chatRoomParticipants?: NonAttribute<ChatRoomParticipant[]>
  declare getChatRoomParticipants: HasManyGetAssociationsMixin<ChatRoomParticipant>
  declare setChatRoomParticipants: HasManySetAssociationsMixin<ChatRoomParticipant, number>
  declare addChatRoomParticipant: HasManyAddAssociationMixin<ChatRoomParticipant, number>
  declare addChatRoomParticipants: HasManyAddAssociationsMixin<ChatRoomParticipant, number>
  declare createChatRoomParticipant: HasManyCreateAssociationMixin<ChatRoomParticipant, 'roomId'>
  declare removeChatRoomParticipant: HasManyRemoveAssociationMixin<ChatRoomParticipant, number>
  declare removeChatRoomParticipants: HasManyRemoveAssociationsMixin<ChatRoomParticipant, number>
  declare hasChatRoomParticipant: HasManyHasAssociationMixin<ChatRoomParticipant, number>
  declare hasChatRoomParticipants: HasManyHasAssociationsMixin<ChatRoomParticipant, number>
  declare countChatRoomParticipants: HasManyCountAssociationsMixin
  
  // ChatRoom hasMany ChatMessage
  declare chatMessages?: NonAttribute<ChatMessage[]>
  declare getChatMessages: HasManyGetAssociationsMixin<ChatMessage>
  declare setChatMessages: HasManySetAssociationsMixin<ChatMessage, number>
  declare addChatMessage: HasManyAddAssociationMixin<ChatMessage, number>
  declare addChatMessages: HasManyAddAssociationsMixin<ChatMessage, number>
  declare createChatMessage: HasManyCreateAssociationMixin<ChatMessage, 'roomId'>
  declare removeChatMessage: HasManyRemoveAssociationMixin<ChatMessage, number>
  declare removeChatMessages: HasManyRemoveAssociationsMixin<ChatMessage, number>
  declare hasChatMessage: HasManyHasAssociationMixin<ChatMessage, number>
  declare hasChatMessages: HasManyHasAssociationsMixin<ChatMessage, number>
  declare countChatMessages: HasManyCountAssociationsMixin
  
  declare static associations: {
    chatRoomParticipants: Association<ChatRoom, ChatRoomParticipant>,
    chatMessages: Association<ChatRoom, ChatMessage>
  }

  static initModel(sequelize: Sequelize): typeof ChatRoom {
    ChatRoom.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
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
    
    return ChatRoom
  }
}
