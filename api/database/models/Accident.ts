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
import type { User } from './User'

type AccidentAssociations = 'bus' | 'driver'

export class Accident extends Model<
    InferAttributes<Accident, {omit: AccidentAssociations}>,
    InferCreationAttributes<Accident, {omit: AccidentAssociations}>
    > {
    declare id: CreationOptional<number>
    declare busId: number | null
    declare driverId: number | null
    declare createdAt: CreationOptional<Date>
    declare updatedAt: CreationOptional<Date>

    // Accident belongsTo Bus
    declare bus?: NonAttribute<Bus>
    declare getBus: BelongsToGetAssociationMixin<Bus>
    declare setBus: BelongsToSetAssociationMixin<Bus, number>
    declare createBus: BelongsToCreateAssociationMixin<Bus>

    // Accident belongsTo User (as Driver)
    declare driver?: NonAttribute<User>
    declare getDriver: BelongsToGetAssociationMixin<User>
    declare setDriver: BelongsToSetAssociationMixin<User, number>
    declare createDriver: BelongsToCreateAssociationMixin<User>

    declare static associations: {
        bus: Association<Accident, Bus>,
        driver: Association<Accident, User>
    }

    static initModel(sequelize: Sequelize): typeof Accident {
        Accident.init({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            busId: {
                type: DataTypes.BIGINT
            },
            driverId: {
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

        return Accident
    }
}