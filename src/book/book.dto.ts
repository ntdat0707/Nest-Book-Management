import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt } from 'class-validator';
export class BookInput {
  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsInt()
  readonly code: string;

  @ApiProperty()
  @IsInt()
  readonly price: number;

  @ApiProperty({ required: false })
  @IsString()
  readonly type?: string;
}
