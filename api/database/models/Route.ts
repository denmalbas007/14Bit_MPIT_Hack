import {
  Association,
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
import type { BusRouteStation } from './BusRouteStation'
import type { RouteSchedule } from './RouteSchedule'
import type { Shift } from './Shift'

type RouteAssociations = 'shifts' | 'routeSchedules' | 'busRouteStations'

export class Route extends Model<
  InferAttributes<Route, {omit: RouteAssociations}>,
  InferCreationAttributes<Route, {omit: RouteAssociations}>
> {
  declare id: CreationOptional<number>
  declare name: string | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // Route hasMany Shift
  declare shifts?: NonAttribute<Shift[]>
  declare getShifts: HasManyGetAssociationsMixin<Shift>
  declare setShifts: HasManySetAssociationsMixin<Shift, number>
  declare addShift: HasManyAddAssociationMixin<Shift, number>
  declare addShifts: HasManyAddAssociationsMixin<Shift, number>
  declare createShift: HasManyCreateAssociationMixin<Shift, 'routeId'>
  declare removeShift: HasManyRemoveAssociationMixin<Shift, number>
  declare removeShifts: HasManyRemoveAssociationsMixin<Shift, number>
  declare hasShift: HasManyHasAssociationMixin<Shift, number>
  declare hasShifts: HasManyHasAssociationsMixin<Shift, number>
  declare countShifts: HasManyCountAssociationsMixin
  
  // Route hasMany RouteSchedule
  declare routeSchedules?: NonAttribute<RouteSchedule[]>
  declare getRouteSchedules: HasManyGetAssociationsMixin<RouteSchedule>
  declare setRouteSchedules: HasManySetAssociationsMixin<RouteSchedule, number>
  declare addRouteSchedule: HasManyAddAssociationMixin<RouteSchedule, number>
  declare addRouteSchedules: HasManyAddAssociationsMixin<RouteSchedule, number>
  declare createRouteSchedule: HasManyCreateAssociationMixin<RouteSchedule, 'routeId'>
  declare removeRouteSchedule: HasManyRemoveAssociationMixin<RouteSchedule, number>
  declare removeRouteSchedules: HasManyRemoveAssociationsMixin<RouteSchedule, number>
  declare hasRouteSchedule: HasManyHasAssociationMixin<RouteSchedule, number>
  declare hasRouteSchedules: HasManyHasAssociationsMixin<RouteSchedule, number>
  declare countRouteSchedules: HasManyCountAssociationsMixin
  
  // Route hasMany BusRouteStation
  declare busRouteStations?: NonAttribute<BusRouteStation[]>
  declare getBusRouteStations: HasManyGetAssociationsMixin<BusRouteStation>
  declare setBusRouteStations: HasManySetAssociationsMixin<BusRouteStation, number>
  declare addBusRouteStation: HasManyAddAssociationMixin<BusRouteStation, number>
  declare addBusRouteStations: HasManyAddAssociationsMixin<BusRouteStation, number>
  declare createBusRouteStation: HasManyCreateAssociationMixin<BusRouteStation, 'routeId'>
  declare removeBusRouteStation: HasManyRemoveAssociationMixin<BusRouteStation, number>
  declare removeBusRouteStations: HasManyRemoveAssociationsMixin<BusRouteStation, number>
  declare hasBusRouteStation: HasManyHasAssociationMixin<BusRouteStation, number>
  declare hasBusRouteStations: HasManyHasAssociationsMixin<BusRouteStation, number>
  declare countBusRouteStations: HasManyCountAssociationsMixin
  
  declare static associations: {
    shifts: Association<Route, Shift>,
    routeSchedules: Association<Route, RouteSchedule>,
    busRouteStations: Association<Route, BusRouteStation>
  }

  static initModel(sequelize: Sequelize): typeof Route {
    Route.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: DataTypes.TEXT
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
    
    return Route
  }
}
