import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TestsService } from './tests.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('/tests')
@Controller('tests')
export class TestsController {
  constructor(private readonly testsService: TestsService) {}

  @ApiOperation({
    summary: '테스트 생성 API',
    description: '유저가 실시한 테스트를 DB에 저장합니다.',
  })
  @Post()
  create(@Body() createTestDto: CreateTestDto) {
    return this.testsService.create(createTestDto);
  }

  @ApiOperation({
    summary: '테스트 모두 조회 API',
    description: 'DB에 저장된 테스트를 모두 가져옵니다.',
  })
  @Get()
  findAll() {
    return this.testsService.findAll();
  }

  @ApiOperation({
    summary: '특정 테스트 조회 API',
    description: 'DB에 저장된 특정 테스트를 가져옵니다.',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testsService.findOne(id);
  }

  @ApiOperation({
    summary: '테스트 수정 API',
    description: 'DB에 저장된 테스트를 수정합니다.',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestDto: UpdateTestDto) {
    return this.testsService.update(id, updateTestDto);
  }

  @ApiOperation({
    summary: '테스트 삭제 API',
    description: 'DB에 저장된 테스트를 삭제합니다.',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testsService.remove(id);
  }
}
