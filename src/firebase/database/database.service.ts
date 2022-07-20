import { Injectable, InternalServerErrorException } from '@nestjs/common';
import admin, { ServiceAccount } from 'firebase-admin';
import { Database } from 'firebase-admin/lib/database/database';

@Injectable()
export class DatabaseService {
  private db: Database;
  constructor() {
    const adminConfig: ServiceAccount = {
      projectId: process.env.PROJECT_ID,
      privateKey: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
      clientEmail: process.env.CLIENT_EMAIL,
    };
    admin.initializeApp({
      credential: admin.credential.cert(adminConfig),
      databaseURL: 'https://conde-test-9e519-default-rtdb.firebaseio.com/',
    });
    this.db = admin.database();
  }
  async create(path: string, data: any): Promise<void> {
    const ref = this.db.ref(path).push();
    try {
      await ref.set(data);
    } catch {
      throw new InternalServerErrorException();
    }
  }
  async read<T>(path: string): Promise<T> {
    const ref = this.db.ref(path);
    try {
      const res = await ref.once('value');
      return res.val();
    } catch {
      throw new InternalServerErrorException();
    }
  }
  async update(path: string, data: any): Promise<void> {
    const ref = this.db.ref(path);
    try {
      await ref.update(data);
    } catch {
      throw new InternalServerErrorException();
    }
  }
  async delete(path: string): Promise<void> {
    const ref = this.db.ref(path);
    try {
      await ref.remove();
    } catch {
      throw new InternalServerErrorException();
    }
  }
}
