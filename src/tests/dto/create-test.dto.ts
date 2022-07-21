import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Max, Min } from 'class-validator';
export class CreateTestDto {
  @ApiProperty({ description: '첫번째 질문' })
  @IsInt()
  @Min(-2)
  @Max(2)
  one: number;

  @ApiProperty({ description: '두번째 질문' })
  @IsInt()
  @Min(-2)
  @Max(2)
  two: number;

  @ApiProperty({ description: '세번째 질문' })
  @IsInt()
  @Min(-2)
  @Max(2)
  three: number;

  @ApiProperty({ description: '네번째 질문' })
  @IsInt()
  @Min(-2)
  @Max(2)
  four: number;

  @ApiProperty({ description: '다섯번째 질문' })
  @IsInt()
  @Min(-2)
  @Max(2)
  five: number;
}
