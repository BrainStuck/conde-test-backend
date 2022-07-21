import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import admin from 'firebase-admin';

@Injectable()
export class TestsService {
  async create(createTestDto: CreateTestDto) {
    const db = admin.database();
    const ref = db.ref(`/tests`).push();

    try {
      await ref.set(createTestDto);
      return {};
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async findAll() {
    const db = admin.database();
    const ref = db.ref(`/tests`);

    try {
      const res = await ref.once('value');
      return res.val();
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async findOne(id: string) {
    const db = admin.database();
    const ref = db.ref(`/tests/${id}`);

    try {
      const res = await ref.once('value');
      return res.val();
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async update(id: string, updateTestDto: UpdateTestDto) {
    const db = admin.database();
    const ref = db.ref(`/tests/${id}`);

    try {
      await ref.update(updateTestDto);
      return {};
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async remove(id: string) {
    const db = admin.database();
    const ref = db.ref(`/tests/${id}`);

    try {
      await ref.remove();
      return {};
    } catch {
      throw new InternalServerErrorException();
    }
  }
}
