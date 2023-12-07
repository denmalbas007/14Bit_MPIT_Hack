"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initModels = exports.Op = exports.StationPassengerHistory = exports.BusChargeHistory = exports.Accident = exports.ChatMessageContent = exports.ChatMessage = exports.ChatRoomParticipant = exports.ChatRoom = exports.BusStation = exports.BusRouteStation = exports.RouteSchedule = exports.Route = exports.Shift = exports.Bus = exports.UserNotification = exports.User = void 0;
const sequelize_1 = require("sequelize");
Object.defineProperty(exports, "Op", { enumerable: true, get: function () { return sequelize_1.Op; } });
const User_1 = require("./User");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return User_1.User; } });
const UserNotification_1 = require("./UserNotification");
Object.defineProperty(exports, "UserNotification", { enumerable: true, get: function () { return UserNotification_1.UserNotification; } });
const Bus_1 = require("./Bus");
Object.defineProperty(exports, "Bus", { enumerable: true, get: function () { return Bus_1.Bus; } });
const Shift_1 = require("./Shift");
Object.defineProperty(exports, "Shift", { enumerable: true, get: function () { return Shift_1.Shift; } });
const Route_1 = require("./Route");
Object.defineProperty(exports, "Route", { enumerable: true, get: function () { return Route_1.Route; } });
const RouteSchedule_1 = require("./RouteSchedule");
Object.defineProperty(exports, "RouteSchedule", { enumerable: true, get: function () { return RouteSchedule_1.RouteSchedule; } });
const BusRouteStation_1 = require("./BusRouteStation");
Object.defineProperty(exports, "BusRouteStation", { enumerable: true, get: function () { return BusRouteStation_1.BusRouteStation; } });
const BusStation_1 = require("./BusStation");
Object.defineProperty(exports, "BusStation", { enumerable: true, get: function () { return BusStation_1.BusStation; } });
const ChatRoom_1 = require("./ChatRoom");
Object.defineProperty(exports, "ChatRoom", { enumerable: true, get: function () { return ChatRoom_1.ChatRoom; } });
const ChatRoomParticipant_1 = require("./ChatRoomParticipant");
Object.defineProperty(exports, "ChatRoomParticipant", { enumerable: true, get: function () { return ChatRoomParticipant_1.ChatRoomParticipant; } });
const ChatMessage_1 = require("./ChatMessage");
Object.defineProperty(exports, "ChatMessage", { enumerable: true, get: function () { return ChatMessage_1.ChatMessage; } });
const ChatMessageContent_1 = require("./ChatMessageContent");
Object.defineProperty(exports, "ChatMessageContent", { enumerable: true, get: function () { return ChatMessageContent_1.ChatMessageContent; } });
const Accident_1 = require("./Accident");
Object.defineProperty(exports, "Accident", { enumerable: true, get: function () { return Accident_1.Accident; } });
const BusChargeHistory_1 = require("./BusChargeHistory");
Object.defineProperty(exports, "BusChargeHistory", { enumerable: true, get: function () { return BusChargeHistory_1.BusChargeHistory; } });
const StationPassengerHistory_1 = require("./StationPassengerHistory");
Object.defineProperty(exports, "StationPassengerHistory", { enumerable: true, get: function () { return StationPassengerHistory_1.StationPassengerHistory; } });
function initModels(sequelize) {
    User_1.User.initModel(sequelize);
    UserNotification_1.UserNotification.initModel(sequelize);
    Bus_1.Bus.initModel(sequelize);
    Shift_1.Shift.initModel(sequelize);
    Route_1.Route.initModel(sequelize);
    RouteSchedule_1.RouteSchedule.initModel(sequelize);
    BusRouteStation_1.BusRouteStation.initModel(sequelize);
    BusStation_1.BusStation.initModel(sequelize);
    ChatRoom_1.ChatRoom.initModel(sequelize);
    ChatRoomParticipant_1.ChatRoomParticipant.initModel(sequelize);
    ChatMessage_1.ChatMessage.initModel(sequelize);
    ChatMessageContent_1.ChatMessageContent.initModel(sequelize);
    Accident_1.Accident.initModel(sequelize);
    BusChargeHistory_1.BusChargeHistory.initModel(sequelize);
    StationPassengerHistory_1.StationPassengerHistory.initModel(sequelize);
    User_1.User.hasMany(UserNotification_1.UserNotification, {
        as: 'userNotifications',
        foreignKey: 'userId'
    });
    User_1.User.hasMany(Shift_1.Shift, {
        as: 'shifts',
        foreignKey: 'driverId'
    });
    User_1.User.hasMany(ChatRoomParticipant_1.ChatRoomParticipant, {
        as: 'chatRoomParticipants',
        foreignKey: 'participantId'
    });
    User_1.User.hasMany(Accident_1.Accident, {
        as: 'accidents',
        foreignKey: 'driverId'
    });
    UserNotification_1.UserNotification.belongsTo(User_1.User, {
        as: 'user',
        foreignKey: 'userId'
    });
    Bus_1.Bus.hasMany(Shift_1.Shift, {
        as: 'shifts',
        foreignKey: 'busId'
    });
    Bus_1.Bus.hasMany(Accident_1.Accident, {
        as: 'accidents',
        foreignKey: 'busId'
    });
    Bus_1.Bus.hasMany(BusChargeHistory_1.BusChargeHistory, {
        as: 'busChargeHistories',
        foreignKey: 'busId'
    });
    Shift_1.Shift.belongsTo(User_1.User, {
        as: 'driver',
        foreignKey: 'driverId'
    });
    Shift_1.Shift.belongsTo(Bus_1.Bus, {
        as: 'bus',
        foreignKey: 'busId'
    });
    Shift_1.Shift.belongsTo(Route_1.Route, {
        as: 'route',
        foreignKey: 'routeId'
    });
    Route_1.Route.hasMany(Shift_1.Shift, {
        as: 'shifts',
        foreignKey: 'routeId'
    });
    Route_1.Route.hasMany(RouteSchedule_1.RouteSchedule, {
        as: 'routeSchedules',
        foreignKey: 'routeId'
    });
    Route_1.Route.hasMany(BusRouteStation_1.BusRouteStation, {
        as: 'busRouteStations',
        foreignKey: 'routeId'
    });
    RouteSchedule_1.RouteSchedule.belongsTo(Route_1.Route, {
        as: 'route',
        foreignKey: 'routeId'
    });
    BusRouteStation_1.BusRouteStation.belongsTo(BusRouteStation_1.BusRouteStation, {
        as: 'busRouteStation',
        foreignKey: 'id'
    });
    BusRouteStation_1.BusRouteStation.belongsTo(BusStation_1.BusStation, {
        as: 'busStation',
        foreignKey: 'busStationId'
    });
    BusRouteStation_1.BusRouteStation.belongsTo(Route_1.Route, {
        as: 'route',
        foreignKey: 'routeId'
    });
    BusRouteStation_1.BusRouteStation.hasMany(StationPassengerHistory_1.StationPassengerHistory, {
        as: 'stationPassengerHistories',
        foreignKey: 'routeStationId'
    });
    BusStation_1.BusStation.hasMany(BusRouteStation_1.BusRouteStation, {
        as: 'busRouteStations',
        foreignKey: 'busStationId'
    });
    ChatRoom_1.ChatRoom.hasMany(ChatRoomParticipant_1.ChatRoomParticipant, {
        as: 'chatRoomParticipants',
        foreignKey: 'roomId'
    });
    ChatRoom_1.ChatRoom.hasMany(ChatMessage_1.ChatMessage, {
        as: 'chatMessages',
        foreignKey: 'roomId'
    });
    ChatRoomParticipant_1.ChatRoomParticipant.belongsTo(User_1.User, {
        as: 'user',
        foreignKey: 'participantId'
    });
    ChatRoomParticipant_1.ChatRoomParticipant.belongsTo(ChatRoom_1.ChatRoom, {
        as: 'chatRoom',
        foreignKey: 'roomId'
    });
    ChatMessage_1.ChatMessage.belongsTo(ChatRoom_1.ChatRoom, {
        as: 'chatRoom',
        foreignKey: 'roomId'
    });
    ChatMessage_1.ChatMessage.belongsTo(ChatRoomParticipant_1.ChatRoomParticipant, {
        as: 'chatRoomParticipant',
        foreignKey: 'senderId'
    });
    ChatMessage_1.ChatMessage.hasMany(ChatMessageContent_1.ChatMessageContent, {
        as: 'chatMessageContents',
        foreignKey: 'messageId'
    });
    ChatMessageContent_1.ChatMessageContent.belongsTo(ChatMessage_1.ChatMessage, {
        as: 'chatMessage',
        foreignKey: 'messageId'
    });
    Accident_1.Accident.belongsTo(Bus_1.Bus, {
        as: 'bus',
        foreignKey: 'busId'
    });
    Accident_1.Accident.belongsTo(User_1.User, {
        as: 'driver',
        foreignKey: 'driverId'
    });
    BusChargeHistory_1.BusChargeHistory.belongsTo(Bus_1.Bus, {
        as: 'bus',
        foreignKey: 'busId'
    });
    StationPassengerHistory_1.StationPassengerHistory.belongsTo(BusRouteStation_1.BusRouteStation, {
        as: 'busRouteStation',
        foreignKey: 'routeStationId'
    });
    return {
        User: User_1.User,
        UserNotification: UserNotification_1.UserNotification,
        Bus: Bus_1.Bus,
        Shift: Shift_1.Shift,
        Route: Route_1.Route,
        RouteSchedule: RouteSchedule_1.RouteSchedule,
        BusRouteStation: BusRouteStation_1.BusRouteStation,
        BusStation: BusStation_1.BusStation,
        ChatRoom: ChatRoom_1.ChatRoom,
        ChatRoomParticipant: ChatRoomParticipant_1.ChatRoomParticipant,
        ChatMessage: ChatMessage_1.ChatMessage,
        ChatMessageContent: ChatMessageContent_1.ChatMessageContent,
        Accident: Accident_1.Accident,
        BusChargeHistory: BusChargeHistory_1.BusChargeHistory,
        StationPassengerHistory: StationPassengerHistory_1.StationPassengerHistory
    };
}
exports.initModels = initModels;
//# sourceMappingURL=index.js.map