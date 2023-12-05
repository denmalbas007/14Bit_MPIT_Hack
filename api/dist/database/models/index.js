"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initModels = exports.ChatMessageContent = exports.ChatMessage = exports.ChatRoomParticipant = exports.ChatRoom = exports.BusStation = exports.BusRouteStation = exports.RouteSchedule = exports.Route = exports.Shift = exports.Bus = exports.UserNotification = exports.User = void 0;
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
    User_1.User.hasMany(UserNotification_1.UserNotification, {
        as: 'userNotifications',
        foreignKey: 'user_id'
    });
    User_1.User.hasMany(Shift_1.Shift, {
        as: 'shifts',
        foreignKey: 'user_id'
    });
    User_1.User.hasMany(ChatRoomParticipant_1.ChatRoomParticipant, {
        as: 'chatRoomParticipants',
        foreignKey: 'user_id'
    });
    UserNotification_1.UserNotification.belongsTo(User_1.User, {
        as: 'user',
        foreignKey: 'user_id'
    });
    Bus_1.Bus.hasMany(Shift_1.Shift, {
        as: 'shifts',
        foreignKey: 'bus_id'
    });
    Shift_1.Shift.belongsTo(User_1.User, {
        as: 'user',
        foreignKey: 'driver_id'
    });
    Shift_1.Shift.belongsTo(Bus_1.Bus, {
        as: 'bus',
        foreignKey: 'bus_id'
    });
    Shift_1.Shift.belongsTo(Route_1.Route, {
        as: 'route',
        foreignKey: 'route_id'
    });
    Route_1.Route.hasMany(Shift_1.Shift, {
        as: 'shifts',
        foreignKey: 'route_id'
    });
    Route_1.Route.hasMany(RouteSchedule_1.RouteSchedule, {
        as: 'routeSchedules',
        foreignKey: 'route_id'
    });
    Route_1.Route.hasMany(BusRouteStation_1.BusRouteStation, {
        as: 'busRouteStations',
        foreignKey: 'route_id'
    });
    RouteSchedule_1.RouteSchedule.belongsTo(Route_1.Route, {
        as: 'route',
        foreignKey: 'route_id'
    });
    BusRouteStation_1.BusRouteStation.belongsTo(BusRouteStation_1.BusRouteStation, {
        as: 'busRouteStation',
        foreignKey: 'id'
    });
    BusRouteStation_1.BusRouteStation.belongsTo(BusStation_1.BusStation, {
        as: 'busStation',
        foreignKey: 'bus_station_id'
    });
    BusRouteStation_1.BusRouteStation.belongsTo(Route_1.Route, {
        as: 'route',
        foreignKey: 'route_id'
    });
    BusStation_1.BusStation.hasMany(BusRouteStation_1.BusRouteStation, {
        as: 'busRouteStations',
        foreignKey: 'bus_station_id'
    });
    ChatRoom_1.ChatRoom.hasMany(ChatRoomParticipant_1.ChatRoomParticipant, {
        as: 'chatRoomParticipants',
        foreignKey: 'room_id'
    });
    ChatRoom_1.ChatRoom.hasMany(ChatMessage_1.ChatMessage, {
        as: 'chatMessages',
        foreignKey: 'room_id'
    });
    ChatRoomParticipant_1.ChatRoomParticipant.belongsTo(User_1.User, {
        as: 'user',
        foreignKey: 'participant_id'
    });
    ChatRoomParticipant_1.ChatRoomParticipant.belongsTo(ChatRoom_1.ChatRoom, {
        as: 'chatRoom',
        foreignKey: 'room_id'
    });
    ChatMessage_1.ChatMessage.belongsTo(ChatRoom_1.ChatRoom, {
        as: 'chatRoom',
        foreignKey: 'room_id'
    });
    ChatMessage_1.ChatMessage.belongsTo(ChatRoomParticipant_1.ChatRoomParticipant, {
        as: 'chatRoomParticipant',
        foreignKey: 'sender_id'
    });
    ChatMessage_1.ChatMessage.hasMany(ChatMessageContent_1.ChatMessageContent, {
        as: 'chatMessageContents',
        foreignKey: 'message_id'
    });
    ChatMessageContent_1.ChatMessageContent.belongsTo(ChatMessage_1.ChatMessage, {
        as: 'chatMessage',
        foreignKey: 'message_id'
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
        ChatMessageContent: ChatMessageContent_1.ChatMessageContent
    };
}
exports.initModels = initModels;
//# sourceMappingURL=index.js.map