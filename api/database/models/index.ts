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
import { BusChargeHistory } from './BusChargeHistory'
import { StationPassengerHistory } from './StationPassengerHistory'

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
  BusChargeHistory,
  StationPassengerHistory,
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
  BusChargeHistory.initModel(sequelize)
  StationPassengerHistory.initModel(sequelize)

  User.hasMany(UserNotification, {
    as: 'userNotifications',
    foreignKey: 'userId'
  })
  User.hasMany(Shift, {
    as: 'shifts',
    foreignKey: 'driverId'
  })
  User.hasMany(ChatRoomParticipant, {
    as: 'chatRoomParticipants',
    foreignKey: 'participantId'
  })
  User.hasMany(Accident, {
    as: 'accidents',
    foreignKey: 'driverId'
  })
  UserNotification.belongsTo(User, {
    as: 'user',
    foreignKey: 'userId'
  })
  Bus.hasMany(Shift, {
    as: 'shifts',
    foreignKey: 'busId'
  })
  Bus.hasMany(Accident, {
    as: 'accidents',
    foreignKey: 'busId'
  })
  Bus.hasMany(BusChargeHistory, {
    as: 'busChargeHistories',
    foreignKey: 'busId'
  })
  Shift.belongsTo(User, {
    as: 'driver',
    foreignKey: 'driverId'
  })
  Shift.belongsTo(Bus, {
    as: 'bus',
    foreignKey: 'busId'
  })
  Shift.belongsTo(Route, {
    as: 'route',
    foreignKey: 'routeId'
  })
  Route.hasMany(Shift, {
    as: 'shifts',
    foreignKey: 'routeId'
  })
  Route.hasMany(RouteSchedule, {
    as: 'routeSchedules',
    foreignKey: 'routeId'
  })
  Route.hasMany(BusRouteStation, {
    as: 'busRouteStations',
    foreignKey: 'routeId'
  })
  RouteSchedule.belongsTo(Route, {
    as: 'route',
    foreignKey: 'routeId'
  })
  BusRouteStation.belongsTo(BusRouteStation, {
    as: 'busRouteStation',
    foreignKey: 'id'
  })
  BusRouteStation.belongsTo(BusStation, {
    as: 'busStation',
    foreignKey: 'busStationId'
  })
  BusRouteStation.belongsTo(Route, {
    as: 'route',
    foreignKey: 'routeId'
  })
  BusRouteStation.hasMany(StationPassengerHistory, {
    as: 'stationPassengerHistories',
    foreignKey: 'routeStationId'
  })
  BusStation.hasMany(BusRouteStation, {
    as: 'busRouteStations',
    foreignKey: 'busStationId'
  })
  ChatRoom.hasMany(ChatRoomParticipant, {
    as: 'chatRoomParticipants',
    foreignKey: 'roomId'
  })
  ChatRoom.hasMany(ChatMessage, {
    as: 'chatMessages',
    foreignKey: 'roomId'
  })
  ChatRoomParticipant.belongsTo(User, {
    as: 'user',
    foreignKey: 'participantId'
  })
  ChatRoomParticipant.belongsTo(ChatRoom, {
    as: 'chatRoom',
    foreignKey: 'roomId'
  })
  ChatMessage.belongsTo(ChatRoom, {
    as: 'chatRoom',
    foreignKey: 'roomId'
  })
  ChatMessage.belongsTo(ChatRoomParticipant, {
    as: 'chatRoomParticipant',
    foreignKey: 'senderId'
  })
  ChatMessage.hasMany(ChatMessageContent, {
    as: 'chatMessageContents',
    foreignKey: 'messageId'
  })
  ChatMessageContent.belongsTo(ChatMessage, {
    as: 'chatMessage',
    foreignKey: 'messageId'
  })
  Accident.belongsTo(Bus, {
    as: 'bus',
    foreignKey: 'busId'
  })
  Accident.belongsTo(User, {
    as: 'driver',
    foreignKey: 'driverId'
  })
  BusChargeHistory.belongsTo(Bus, {
    as: 'bus',
    foreignKey: 'busId'
  })
  StationPassengerHistory.belongsTo(BusRouteStation, {
    as: 'busRouteStation',
    foreignKey: 'routeStationId'
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
    Accident,
    BusChargeHistory,
    StationPassengerHistory
  }
}