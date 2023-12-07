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
import type { ChatMessage } from './ChatMessage'

type ChatMessageContentAssociations = 'chatMessage'

export class ChatMessageContent extends Model<
    InferAttributes<ChatMessageContent, {omit: ChatMessageContentAssociations}>,
    InferCreationAttributes<ChatMessageContent, {omit: ChatMessageContentAssociations}>
    > {
  declare id: CreationOptional<number>
  declare messageId: number | null
  declare contentType: string | null
  declare content: string | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // ChatMessageContent belongsTo ChatMessage
  declare chatMessage?: NonAttribute<ChatMessage>
  declare getChatMessage: BelongsToGetAssociationMixin<ChatMessage>
  declare setChatMessage: BelongsToSetAssociationMixin<ChatMessage, number>
  declare createChatMessage: BelongsToCreateAssociationMixin<ChatMessage>

  declare static associations: {
    chatMessage: Association<ChatMessageContent, ChatMessage>
  }

  static initModel(sequelize: Sequelize): typeof ChatMessageContent {
    ChatMessageContent.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      messageId: {
        type: DataTypes.BIGINT
      },
      contentType: {
        type: DataTypes.STRING
      },
      content: {
        type: DataTypes.STRING
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

    return ChatMessageContent
  }
}