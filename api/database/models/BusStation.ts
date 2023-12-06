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

type BusStationAssociations = 'busRouteStations'

export class BusStation extends Model<
    InferAttributes<BusStation, {omit: BusStationAssociations}>,
    InferCreationAttributes<BusStation, {omit: BusStationAssociations}>
    > {
  declare id: CreationOptional<number>
  declare name: string | null
  declare longitude: number | null
  declare latitude: number | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // BusStation hasMany BusRouteStation
  declare busRouteStations?: NonAttribute<BusRouteStation[]>
  declare getBusRouteStations: HasManyGetAssociationsMixin<BusRouteStation>
  declare setBusRouteStations: HasManySetAssociationsMixin<BusRouteStation, number>
  declare addBusRouteStation: HasManyAddAssociationMixin<BusRouteStation, number>
  declare addBusRouteStations: HasManyAddAssociationsMixin<BusRouteStation, number>
  declare createBusRouteStation: HasManyCreateAssociationMixin<BusRouteStation, 'busStationId'>
  declare removeBusRouteStation: HasManyRemoveAssociationMixin<BusRouteStation, number>
  declare removeBusRouteStations: HasManyRemoveAssociationsMixin<BusRouteStation, number>
  declare hasBusRouteStation: HasManyHasAssociationMixin<BusRouteStation, number>
  declare hasBusRouteStations: HasManyHasAssociationsMixin<BusRouteStation, number>
  declare countBusRouteStations: HasManyCountAssociationsMixin

  declare static associations: {
    busRouteStations: Association<BusStation, BusRouteStation>
  }

  static initModel(sequelize: Sequelize): typeof BusStation {
    BusStation.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: DataTypes.TEXT
      },
      longitude: {
        type: DataTypes.DOUBLE
      },
      latitude: {
        type: DataTypes.DOUBLE
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

    return BusStation
  }
}