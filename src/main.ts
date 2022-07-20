import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import admin, { ServiceAccount } from 'firebase-admin';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const adminConfig: ServiceAccount = {
    projectId: process.env.PROJECT_ID,
    privateKey: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
    clientEmail: process.env.CLIENT_EMAIL,
  };

  admin.initializeApp({
    credential: admin.credential.cert(adminConfig),
    databaseURL: 'https://conde-test-9e519-default-rtdb.firebaseio.com/',
  });

  const db = admin.database();

  const ref = db.ref('/');
  ref.once('value', (snapshot) => console.log(snapshot.val()));

  await app.listen(3000);
}
bootstrap();
