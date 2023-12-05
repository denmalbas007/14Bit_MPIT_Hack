import {
  Association,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  BelongsToCreateAssociationMixin,
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
import type { ChatMessageContent } from './ChatMessageContent'
import type { ChatRoom } from './ChatRoom'
import type { ChatRoomParticipant } from './ChatRoomParticipant'

type ChatMessageAssociations = 'chatRoom' | 'chatRoomParticipant' | 'chatMessageContents'

export class ChatMessage extends Model<
  InferAttributes<ChatMessage, {omit: ChatMessageAssociations}>,
  InferCreationAttributes<ChatMessage, {omit: ChatMessageAssociations}>
> {
  declare id: CreationOptional<number>
  declare roomId: number | null
  declare senderId: number | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // ChatMessage belongsTo ChatRoom
  declare chatRoom?: NonAttribute<ChatRoom>
  declare getChatRoom: BelongsToGetAssociationMixin<ChatRoom>
  declare setChatRoom: BelongsToSetAssociationMixin<ChatRoom, number>
  declare createChatRoom: BelongsToCreateAssociationMixin<ChatRoom>
  
  // ChatMessage belongsTo ChatRoomParticipant
  declare chatRoomParticipant?: NonAttribute<ChatRoomParticipant>
  declare getChatRoomParticipant: BelongsToGetAssociationMixin<ChatRoomParticipant>
  declare setChatRoomParticipant: BelongsToSetAssociationMixin<ChatRoomParticipant, number>
  declare createChatRoomParticipant: BelongsToCreateAssociationMixin<ChatRoomParticipant>
  
  // ChatMessage hasMany ChatMessageContent
  declare chatMessageContents?: NonAttribute<ChatMessageContent[]>
  declare getChatMessageContents: HasManyGetAssociationsMixin<ChatMessageContent>
  declare setChatMessageContents: HasManySetAssociationsMixin<ChatMessageContent, number>
  declare addChatMessageContent: HasManyAddAssociationMixin<ChatMessageContent, number>
  declare addChatMessageContents: HasManyAddAssociationsMixin<ChatMessageContent, number>
  declare createChatMessageContent: HasManyCreateAssociationMixin<ChatMessageContent, 'messageId'>
  declare removeChatMessageContent: HasManyRemoveAssociationMixin<ChatMessageContent, number>
  declare removeChatMessageContents: HasManyRemoveAssociationsMixin<ChatMessageContent, number>
  declare hasChatMessageContent: HasManyHasAssociationMixin<ChatMessageContent, number>
  declare hasChatMessageContents: HasManyHasAssociationsMixin<ChatMessageContent, number>
  declare countChatMessageContents: HasManyCountAssociationsMixin
  
  declare static associations: {
    chatRoom: Association<ChatMessage, ChatRoom>,
    chatRoomParticipant: Association<ChatMessage, ChatRoomParticipant>,
    chatMessageContents: Association<ChatMessage, ChatMessageContent>
  }

  static initModel(sequelize: Sequelize): typeof ChatMessage {
    ChatMessage.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      roomId: {
        type: DataTypes.BIGINT
      },
      senderId: {
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
    
    return ChatMessage
  }
}
