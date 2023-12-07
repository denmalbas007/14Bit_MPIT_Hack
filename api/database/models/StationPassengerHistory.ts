import {
    Association,
    BelongsToGetAssociationMixin,
    BelongsToSetAssociationMixin,
    BelongsToCreateAssociationMixin,
    CreationOptional,
    DataTypes,
    InferCreationAttributes,
    InferAttributes,
    Model,
    NonAttribute,
    Sequelize
} from 'sequelize'
import type { BusRouteStation } from './BusRouteStation'

type StationPassengerHistoryAssociations = 'busRouteStation'

export class StationPassengerHistory extends Model<
    InferAttributes<StationPassengerHistory, {omit: StationPassengerHistoryAssociations}>,
    InferCreationAttributes<StationPassengerHistory, {omit: StationPassengerHistoryAssociations}>
    > {
    declare id: CreationOptional<number>
    declare routeStationId: number | null
    declare passengerCount: number | null
    declare createdAt: CreationOptional<Date>
    declare updatedAt: CreationOptional<Date>

    // StationPassengerHistory belongsTo BusRouteStation
    declare busRouteStation?: NonAttribute<BusRouteStation>
    declare getBusRouteStation: BelongsToGetAssociationMixin<BusRouteStation>
    declare setBusRouteStation: BelongsToSetAssociationMixin<BusRouteStation, number>
    declare createBusRouteStation: BelongsToCreateAssociationMixin<BusRouteStation>

    declare static associations: {
        busRouteStation: Association<StationPassengerHistory, BusRouteStation>
    }

    static initModel(sequelize: Sequelize): typeof StationPassengerHistory {
        StationPassengerHistory.init({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            routeStationId: {
                type: DataTypes.BIGINT
            },
            passengerCount: {
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

        return StationPassengerHistory
    }
}