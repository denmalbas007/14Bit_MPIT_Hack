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
import type { Bus } from './Bus'

type BusChargeHistoryAssociations = 'bus'

export class BusChargeHistory extends Model<
    InferAttributes<BusChargeHistory, {omit: BusChargeHistoryAssociations}>,
    InferCreationAttributes<BusChargeHistory, {omit: BusChargeHistoryAssociations}>
    > {
    declare id: CreationOptional<number>
    declare busId: number | null
    declare charge: number | null
    declare checkedAt: Date | null
    declare createdAt: CreationOptional<Date>
    declare updatedAt: CreationOptional<Date>

    // BusChargeHistory belongsTo Bus
    declare bus?: NonAttribute<Bus>
    declare getBus: BelongsToGetAssociationMixin<Bus>
    declare setBus: BelongsToSetAssociationMixin<Bus, number>
    declare createBus: BelongsToCreateAssociationMixin<Bus>

    declare static associations: {
        bus: Association<BusChargeHistory, Bus>
    }

    static initModel(sequelize: Sequelize): typeof BusChargeHistory {
        BusChargeHistory.init({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            busId: {
                type: DataTypes.BIGINT
            },
            charge: {
                type: DataTypes.DOUBLE
            },
            checkedAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW
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

        return BusChargeHistory
    }
}