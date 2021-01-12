import { ApiProperty } from '@nestjs/swagger';

export class Customer {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly password: string;
}
