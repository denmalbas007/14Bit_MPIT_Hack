import type { Sequelize, Model } from 'sequelize'
import {Op} from "sequelize"
import { User } from './User'
import { UserNotification } from './UserNotification'
import { Bus } from './Bus'
import { Shift } from './Shift'
import { Route } from './Route'
import { RouteSchedule } from './RouteSchedule'
import { BusRouteStation } from './BusRouteStation'
import { BusStation } from './BusStation'
import { ChatRoom } from './ChatRoom'
import { ChatRoomParticipant } from './ChatRoomParticipant'
import { ChatMessage } from './ChatMessage'
import { ChatMessageContent } from './ChatMessageContent'

export {
  User,
  UserNotification,
  Bus,
  Shift,
  Route,
  RouteSchedule,
  BusRouteStation,
  BusStation,
  ChatRoom,
  ChatRoomParticipant,
  ChatMessage,
  ChatMessageContent,
  Op
}

export function initModels(sequelize: Sequelize) {
  User.initModel(sequelize)
  UserNotification.initModel(sequelize)
  Bus.initModel(sequelize)
  Shift.initModel(sequelize)
  Route.initModel(sequelize)
  RouteSchedule.initModel(sequelize)
  BusRouteStation.initModel(sequelize)
  BusStation.initModel(sequelize)
  ChatRoom.initModel(sequelize)
  ChatRoomParticipant.initModel(sequelize)
  ChatMessage.initModel(sequelize)
  ChatMessageContent.initModel(sequelize)

  User.hasMany(UserNotification, {
    as: 'userNotifications',
    foreignKey: 'user_id'
  })
  User.hasMany(Shift, {
    as: 'shifts',
    foreignKey: 'user_id'
  })
  User.hasMany(ChatRoomParticipant, {
    as: 'chatRoomParticipants',
    foreignKey: 'user_id'
  })
  UserNotification.belongsTo(User, {
    as: 'user',
    foreignKey: 'user_id'
  })
  Bus.hasMany(Shift, {
    as: 'shifts',
    foreignKey: 'bus_id'
  })
  Shift.belongsTo(User, {
    as: 'user',
    foreignKey: 'driver_id'
  })
  Shift.belongsTo(Bus, {
    as: 'bus',
    foreignKey: 'bus_id'
  })
  Shift.belongsTo(Route, {
    as: 'route',
    foreignKey: 'route_id'
  })
  Route.hasMany(Shift, {
    as: 'shifts',
    foreignKey: 'route_id'
  })
  Route.hasMany(RouteSchedule, {
    as: 'routeSchedules',
    foreignKey: 'route_id'
  })
  Route.hasMany(BusRouteStation, {
    as: 'busRouteStations',
    foreignKey: 'route_id'
  })
  RouteSchedule.belongsTo(Route, {
    as: 'route',
    foreignKey: 'route_id'
  })
  BusRouteStation.belongsTo(BusRouteStation, {
    as: 'busRouteStation',
    foreignKey: 'id'
  })
  BusRouteStation.belongsTo(BusStation, {
    as: 'busStation',
    foreignKey: 'bus_station_id'
  })
  BusRouteStation.belongsTo(Route, {
    as: 'route',
    foreignKey: 'route_id'
  })
  BusStation.hasMany(BusRouteStation, {
    as: 'busRouteStations',
    foreignKey: 'bus_station_id'
  })
  ChatRoom.hasMany(ChatRoomParticipant, {
    as: 'chatRoomParticipants',
    foreignKey: 'room_id'
  })
  ChatRoom.hasMany(ChatMessage, {
    as: 'chatMessages',
    foreignKey: 'room_id'
  })
  ChatRoomParticipant.belongsTo(User, {
    as: 'user',
    foreignKey: 'participant_id'
  })
  ChatRoomParticipant.belongsTo(ChatRoom, {
    as: 'chatRoom',
    foreignKey: 'room_id'
  })
  ChatMessage.belongsTo(ChatRoom, {
    as: 'chatRoom',
    foreignKey: 'room_id'
  })
  ChatMessage.belongsTo(ChatRoomParticipant, {
    as: 'chatRoomParticipant',
    foreignKey: 'sender_id'
  })
  ChatMessage.hasMany(ChatMessageContent, {
    as: 'chatMessageContents',
    foreignKey: 'message_id'
  })
  ChatMessageContent.belongsTo(ChatMessage, {
    as: 'chatMessage',
    foreignKey: 'message_id'
  })

  return {
    User,
    UserNotification,
    Bus,
    Shift,
    Route,
    RouteSchedule,
    BusRouteStation,
    BusStation,
    ChatRoom,
    ChatRoomParticipant,
    ChatMessage,
    ChatMessageContent
  }
}
