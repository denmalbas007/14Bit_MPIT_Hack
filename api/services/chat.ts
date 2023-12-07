import {ChatMessage, ChatMessageContent, ChatRoom, ChatRoomParticipant} from "../database/models";
import {Op} from "sequelize";


async function __getRoomByUserId(options) {
  return await ChatRoom.findOne({

    include: {
      model: ChatRoomParticipant,
      as: "chatRoomParticipants",
      where: {
        userId: {
          [Op.in]: [options.fromUserId, options.toUserId]
        }
      }
    }
  })
}

/**
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */

async function getChats(options) {

  const chats = await ChatRoom.findAll()
  return {
    status: 200,
    data: {
      chats
    }
  };
}

/**
 * @param {Object} options
 * @param {} options.fromUserId
 * @param {} options.toUserId
 * @param {} options.firstMessageAt
 * @throws {Error}
 * @return {Promise}
 */
async function getChatByUserid(options) {
  const room = await __getRoomByUserId(options)
  const messages = await ChatMessage.findAll({
    where: {
      createdAt: {
        [Op.lte]: options.firstMessageAt
      },
      roomId: room.id
    },
    order: ['createdAt','DESC'],
    limit: 10,
    include: [{
      model: ChatMessageContent,
      as: "chatMessageContents"
    }]
  });
  return {
    status: 200,
    data: {
      room,
      messages
    }
  };
}

/**
 * @param {Object} options
 * @param {} options.userId
 * @param {} options.fromUserId
 * @param {} options.toUserId
 * @param {Array} options.content
 * @throws {Error}
 * @return {Promise}
 */
async function postChatByUserid(options) {
  const room = await __getRoomByUserId(options);
  const newMessage = await ChatMessage.create({
    roomId: room.id,
    senderId: options.fromUserId
  });


  for (const content of options.content) {
    await ChatMessageContent.create({
      messageId: newMessage.id,
      contentType: content.type,
      content: content.text
    })
  }
  return {
    status: 200,
    data: {
      newMessage
    }
  };
}

export default  {
  getChats,
  getChatByUserid,
  postChatByUserid
}