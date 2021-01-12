import { ApiProperty } from '@nestjs/swagger';

export class BookInput {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly code: string;

  @ApiProperty()
  readonly price: number;

  @ApiProperty({ required: false })
  readonly type?: string;
}
