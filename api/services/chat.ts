/**
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
import {ChatRoom, ChatRoomParticipant} from "../database/models";

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
 * @param {} options.userId
 @param {} options.callerUserId
 * @param {} options.firstMessageAt
 * @throws {Error}
 * @return {Promise}
 */
async function getChatByUserid(options) {
  const chat = ChatRoom.findOne({

    include: {
      model: ChatRoomParticipant,
      where: {

      }
    }
  })
  return {
    status: 200,
    data: 'getChatByUserid ok!'
  };
}

/**
 * @param {Object} options
 * @param {} options.userId 
 * @param {} options.content 
 * @throws {Error}
 * @return {Promise}
 */
async function postChatByUserid(options) {

  return {
    status: 200,
    data: 'postChatByUserid ok!'
  };
}

export default  {
  getChats,
  getChatByUserid,
  postChatByUserid
}