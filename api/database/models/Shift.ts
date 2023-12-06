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
import type { Route } from './Route'
import type { User } from './User'

type ShiftAssociations = 'user' | 'bus' | 'route'

export class Shift extends Model<
    InferAttributes<Shift, {omit: ShiftAssociations}>,
    InferCreationAttributes<Shift, {omit: ShiftAssociations}>
    > {
  declare id: CreationOptional<number>
  declare startsAt: Date | null
  declare endsAt: Date | null
  declare driverId: number | null
  declare busId: number | null
  declare routeId: number | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // Shift belongsTo User
  declare user?: NonAttribute<User>
  declare getUser: BelongsToGetAssociationMixin<User>
  declare setUser: BelongsToSetAssociationMixin<User, number>
  declare createUser: BelongsToCreateAssociationMixin<User>

  // Shift belongsTo Bus
  declare bus?: NonAttribute<Bus>
  declare getBus: BelongsToGetAssociationMixin<Bus>
  declare setBus: BelongsToSetAssociationMixin<Bus, number>
  declare createBus: BelongsToCreateAssociationMixin<Bus>

  // Shift belongsTo Route
  declare route?: NonAttribute<Route>
  declare getRoute: BelongsToGetAssociationMixin<Route>
  declare setRoute: BelongsToSetAssociationMixin<Route, number>
  declare createRoute: BelongsToCreateAssociationMixin<Route>

  declare static associations: {
    user: Association<Shift, User>,
    bus: Association<Shift, Bus>,
    route: Association<Shift, Route>
  }

  static initModel(sequelize: Sequelize): typeof Shift {
    Shift.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      startsAt: {
        type: DataTypes.DATE
      },
      endsAt: {
        type: DataTypes.DATE
      },
      driverId: {
        type: DataTypes.BIGINT
      },
      busId: {
        type: DataTypes.BIGINT
      },
      routeId: {
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

    return Shift
  }
}