import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import admin from 'firebase-admin';

@Injectable()
export class TestsService {
  async create(createTestDto: CreateTestDto) {
    const db = admin.database();
    const ref = db.ref(`/tests`).push();

    await ref.set(createTestDto);
    return {};
  }

  async findAll() {
    const db = admin.database();
    const ref = db.ref(`/tests`);

    const res = await ref.once('value');
    return res.val();
  }

  async findOne(id: string) {
    const db = admin.database();
    const ref = db.ref(`/tests/${id}`);

    const res = await ref.once('value');
    return res.val();
  }

  async update(id: string, updateTestDto: UpdateTestDto) {
    const db = admin.database();
    const ref = db.ref(`/tests/${id}`);

    const isExists = (await ref.once('value')).exists();
    if (!isExists) {
      throw new HttpException(
        '수정하려는 테스트가 존재하지 않습니다',
        HttpStatus.BAD_REQUEST,
      );
    }

    await ref.update(updateTestDto);
    return {};
  }

  async remove(id: string) {
    const db = admin.database();
    const ref = db.ref(`/tests/${id}`);

    const isExists = (await ref.once('value')).exists();
    if (!isExists) {
      throw new HttpException(
        '삭제하려는 테스트가 존재하지 않습니다',
        HttpStatus.BAD_REQUEST,
      );
    }

    await ref.remove();
    return {};
  }
}
