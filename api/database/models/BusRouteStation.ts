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
import type { BusStation } from './BusStation'
import type { Route } from './Route'
import type { StationPassengerHistory } from './StationPassengerHistory'

type BusRouteStationAssociations = 'busRouteStation' | 'busStation' | 'route' | 'stationPassengerHistories'

export class BusRouteStation extends Model<
    InferAttributes<BusRouteStation, {omit: BusRouteStationAssociations}>,
    InferCreationAttributes<BusRouteStation, {omit: BusRouteStationAssociations}>
    > {
  declare id: CreationOptional<number>
  declare routeId: number | null
  declare busStationId: number | null
  declare previousRouteStationId: number | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // BusRouteStation belongsTo BusRouteStation
  declare busRouteStation?: NonAttribute<BusRouteStation>
  declare getBusRouteStation: BelongsToGetAssociationMixin<BusRouteStation>
  declare setBusRouteStation: BelongsToSetAssociationMixin<BusRouteStation, number>
  declare createBusRouteStation: BelongsToCreateAssociationMixin<BusRouteStation>

  // BusRouteStation belongsTo BusStation
  declare busStation?: NonAttribute<BusStation>
  declare getBusStation: BelongsToGetAssociationMixin<BusStation>
  declare setBusStation: BelongsToSetAssociationMixin<BusStation, number>
  declare createBusStation: BelongsToCreateAssociationMixin<BusStation>

  // BusRouteStation belongsTo Route
  declare route?: NonAttribute<Route>
  declare getRoute: BelongsToGetAssociationMixin<Route>
  declare setRoute: BelongsToSetAssociationMixin<Route, number>
  declare createRoute: BelongsToCreateAssociationMixin<Route>

  // BusRouteStation hasMany StationPassengerHistory
  declare stationPassengerHistories?: NonAttribute<StationPassengerHistory[]>
  declare getStationPassengerHistories: HasManyGetAssociationsMixin<StationPassengerHistory>
  declare setStationPassengerHistories: HasManySetAssociationsMixin<StationPassengerHistory, number>
  declare addStationPassengerHistory: HasManyAddAssociationMixin<StationPassengerHistory, number>
  declare addStationPassengerHistories: HasManyAddAssociationsMixin<StationPassengerHistory, number>
  declare createStationPassengerHistory: HasManyCreateAssociationMixin<StationPassengerHistory, 'routeStationId'>
  declare removeStationPassengerHistory: HasManyRemoveAssociationMixin<StationPassengerHistory, number>
  declare removeStationPassengerHistories: HasManyRemoveAssociationsMixin<StationPassengerHistory, number>
  declare hasStationPassengerHistory: HasManyHasAssociationMixin<StationPassengerHistory, number>
  declare hasStationPassengerHistories: HasManyHasAssociationsMixin<StationPassengerHistory, number>
  declare countStationPassengerHistories: HasManyCountAssociationsMixin

  declare static associations: {
    busRouteStation: Association<BusRouteStation, BusRouteStation>,
    busStation: Association<BusRouteStation, BusStation>,
    route: Association<BusRouteStation, Route>,
    stationPassengerHistories: Association<BusRouteStation, StationPassengerHistory>
  }

  static initModel(sequelize: Sequelize): typeof BusRouteStation {
    BusRouteStation.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      routeId: {
        type: DataTypes.BIGINT
      },
      busStationId: {
        type: DataTypes.BIGINT
      },
      previousRouteStationId: {
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

    return BusRouteStation
  }
}