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
import type { Accident } from './Accident'
import type { BusChargeHistory } from './BusChargeHistory'
import type { Shift } from './Shift'

type BusAssociations = 'shifts' | 'accidents' | 'busChargeHistories'

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
  declare capacity: number | null
  declare passengerCount: number | null
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

  // Bus hasMany Accident
  declare accidents?: NonAttribute<Accident[]>
  declare getAccidents: HasManyGetAssociationsMixin<Accident>
  declare setAccidents: HasManySetAssociationsMixin<Accident, number>
  declare addAccident: HasManyAddAssociationMixin<Accident, number>
  declare addAccidents: HasManyAddAssociationsMixin<Accident, number>
  declare createAccident: HasManyCreateAssociationMixin<Accident, 'busId'>
  declare removeAccident: HasManyRemoveAssociationMixin<Accident, number>
  declare removeAccidents: HasManyRemoveAssociationsMixin<Accident, number>
  declare hasAccident: HasManyHasAssociationMixin<Accident, number>
  declare hasAccidents: HasManyHasAssociationsMixin<Accident, number>
  declare countAccidents: HasManyCountAssociationsMixin

  // Bus hasMany BusChargeHistory
  declare busChargeHistories?: NonAttribute<BusChargeHistory[]>
  declare getBusChargeHistories: HasManyGetAssociationsMixin<BusChargeHistory>
  declare setBusChargeHistories: HasManySetAssociationsMixin<BusChargeHistory, number>
  declare addBusChargeHistory: HasManyAddAssociationMixin<BusChargeHistory, number>
  declare addBusChargeHistories: HasManyAddAssociationsMixin<BusChargeHistory, number>
  declare createBusChargeHistory: HasManyCreateAssociationMixin<BusChargeHistory, 'busId'>
  declare removeBusChargeHistory: HasManyRemoveAssociationMixin<BusChargeHistory, number>
  declare removeBusChargeHistories: HasManyRemoveAssociationsMixin<BusChargeHistory, number>
  declare hasBusChargeHistory: HasManyHasAssociationMixin<BusChargeHistory, number>
  declare hasBusChargeHistories: HasManyHasAssociationsMixin<BusChargeHistory, number>
  declare countBusChargeHistories: HasManyCountAssociationsMixin

  declare static associations: {
    shifts: Association<Bus, Shift>,
    accidents: Association<Bus, Accident>,
    busChargeHistories: Association<Bus, BusChargeHistory>
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
      capacity: {
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

    return Bus
  }
}