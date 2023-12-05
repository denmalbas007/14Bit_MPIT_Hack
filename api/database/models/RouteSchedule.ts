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
import type { Route } from './Route'

type RouteScheduleAssociations = 'route'

export class RouteSchedule extends Model<
  InferAttributes<RouteSchedule, {omit: RouteScheduleAssociations}>,
  InferCreationAttributes<RouteSchedule, {omit: RouteScheduleAssociations}>
> {
  declare id: CreationOptional<number>
  declare routeId: number | null
  declare timeOfStart: Date | null
  declare timeOfEnd: Date | null
  declare frequency: string | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // RouteSchedule belongsTo Route
  declare route?: NonAttribute<Route>
  declare getRoute: BelongsToGetAssociationMixin<Route>
  declare setRoute: BelongsToSetAssociationMixin<Route, number>
  declare createRoute: BelongsToCreateAssociationMixin<Route>
  
  declare static associations: {
    route: Association<RouteSchedule, Route>
  }

  static initModel(sequelize: Sequelize): typeof RouteSchedule {
    RouteSchedule.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      routeId: {
        type: DataTypes.BIGINT
      },
      timeOfStart: {
        type: DataTypes.DATE
      },
      timeOfEnd: {
        type: DataTypes.DATE
      },
      frequency: {
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
    
    return RouteSchedule
  }
}
