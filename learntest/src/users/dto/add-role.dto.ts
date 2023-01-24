import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class AddRoleDto {
  @ApiProperty({example: 'ADMIN', description: 'Роль'})
  @IsString({message: 'Должно быть строкой'})
  readonly value:string;
  @ApiProperty({example: '8', description: 'Индификатор пользователя'})
  @IsNumber({}, {message: 'Должно быть числом'})
  readonly userId:number;
}