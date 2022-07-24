import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Length, Max, Min } from 'class-validator';
export class CreateTestDto {
  @ApiProperty({
    description: '닉네임',
  })
  @IsString()
  @Length(1, 20)
  nickname: string;

  @ApiProperty({
    description: '나이',
  })
  @IsInt()
  @Min(1)
  @Max(99)
  age: number;

  @ApiProperty({
    description: '꼰대 레벨',
    enum: [1, 2, 3, 4, 5],
    enumName: 'CondeLevelEnum',
  })
  @IsInt()
  @Min(1)
  @Max(5)
  level: number;
}
