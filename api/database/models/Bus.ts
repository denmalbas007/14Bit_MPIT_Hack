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
import type { Shift } from './Shift'

type BusAssociations = 'shifts'

export class Bus extends Model<
  InferAttributes<Bus, {omit: BusAssociations}>,
  InferCreationAttributes<Bus, {omit: BusAssociations}>
> {
  declare id: CreationOptional<number>
  declare plateNumber: string | null
  declare modelName: string | null
  declare serialNumber: string | null
  declare latitude: number | null
  declare longitude: number | null
  declare levelOfCharge: number | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // Bus hasMany Shift
  declare shifts?: NonAttribute<Shift[]>
  declare getShifts: HasManyGetAssociationsMixin<Shift>
  declare setShifts: HasManySetAssociationsMixin<Shift, number>
  declare addShift: HasManyAddAssociationMixin<Shift, number>
  declare addShifts: HasManyAddAssociationsMixin<Shift, number>
  declare createShift: HasManyCreateAssociationMixin<Shift, 'busId'>
  declare removeShift: HasManyRemoveAssociationMixin<Shift, number>
  declare removeShifts: HasManyRemoveAssociationsMixin<Shift, number>
  declare hasShift: HasManyHasAssociationMixin<Shift, number>
  declare hasShifts: HasManyHasAssociationsMixin<Shift, number>
  declare countShifts: HasManyCountAssociationsMixin
  
  declare static associations: {
    shifts: Association<Bus, Shift>
  }

  static initModel(sequelize: Sequelize): typeof Bus {
    Bus.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      plateNumber: {
        type: DataTypes.TEXT
      },
      modelName: {
        type: DataTypes.TEXT
      },
      serialNumber: {
        type: DataTypes.TEXT
      },
      latitude: {
        type: DataTypes.DOUBLE
      },
      longitude: {
        type: DataTypes.DOUBLE
      },
      levelOfCharge: {
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
    
    return Bus
  }
}
