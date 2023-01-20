import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface RoleCreationAttr {
  value: string;
  description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttr> {
  @ApiProperty({example: 1, description: 'Уникальный индентификатор'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'Администратор', description: 'Название роли'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  value: string;

  @ApiProperty({example: 'Управляет всем сайтом', description: 'Описание роли'})
  @Column({type: DataType.STRING, allowNull: false})
  description: string;
}

