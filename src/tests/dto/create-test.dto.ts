import { IsInt, Max, Min } from 'class-validator';
export class CreateTestDto {
  @IsInt()
  @Min(-2)
  @Max(2)
  one: number;

  @IsInt()
  @Min(-2)
  @Max(2)
  two: number;

  @IsInt()
  @Min(-2)
  @Max(2)
  three: number;

  @IsInt()
  @Min(-2)
  @Max(2)
  four: number;

  @IsInt()
  @Min(-2)
  @Max(2)
  five: number;
}
