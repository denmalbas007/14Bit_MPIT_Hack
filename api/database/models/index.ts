import type { Sequelize, Model } from 'sequelize'
import { Op } from 'sequelize'
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
import { Accident } from './Accident'

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
  Accident,
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
  Accident.initModel(sequelize)

  User.hasMany(UserNotification, {
    foreignKey: 'user_id'
  })
  User.hasMany(Shift, {
    foreignKey: 'driver_id'
  })
  User.hasMany(ChatRoomParticipant, {
    foreignKey: 'participant_id'
  })
  User.hasMany(Accident, {
    foreignKey: 'driver_id'
  })
  UserNotification.belongsTo(User, {
    foreignKey: 'user_id'
  })
  Bus.hasMany(Shift, {
    foreignKey: 'bus_id'
  })
  Bus.hasMany(Accident, {
    foreignKey: 'bus_id'
  })
  Shift.belongsTo(User, {
    foreignKey: 'driver_id'
  })
  Shift.belongsTo(Bus, {
    foreignKey: 'bus_id'
  })
  Shift.belongsTo(Route, {
    foreignKey: 'route_id'
  })
  Route.hasMany(Shift, {
    foreignKey: 'route_id'
  })
  Route.hasMany(RouteSchedule, {
    foreignKey: 'route_id'
  })
  Route.hasMany(BusRouteStation, {
    foreignKey: 'route_id'
  })
  RouteSchedule.belongsTo(Route, {
    foreignKey: 'route_id'
  })
  BusRouteStation.belongsTo(BusRouteStation, {
    foreignKey: 'id'
  })
  BusRouteStation.belongsTo(BusStation, {
    foreignKey: 'bus_station_id'
  })
  BusRouteStation.belongsTo(Route, {
    foreignKey: 'route_id'
  })
  BusStation.hasMany(BusRouteStation, {
    foreignKey: 'bus_station_id'
  })
  ChatRoom.hasMany(ChatRoomParticipant, {
    foreignKey: 'room_id'
  })
  ChatRoom.hasMany(ChatMessage, {
    foreignKey: 'room_id'
  })
  ChatRoomParticipant.belongsTo(User, {
    foreignKey: 'participant_id'
  })
  ChatRoomParticipant.belongsTo(ChatRoom, {
    foreignKey: 'room_id'
  })
  ChatMessage.belongsTo(ChatRoom, {
    foreignKey: 'room_id'
  })
  ChatMessage.belongsTo(ChatRoomParticipant, {
    foreignKey: 'sender_id'
  })
  ChatMessage.hasMany(ChatMessageContent, {
    foreignKey: 'message_id'
  })
  ChatMessageContent.belongsTo(ChatMessage, {
    foreignKey: 'message_id'
  })
  Accident.belongsTo(Bus, {
    foreignKey: 'bus_id'
  })
  Accident.belongsTo(User, {
    foreignKey: 'driver_id'
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
    ChatMessageContent,
    Accident
  }
}