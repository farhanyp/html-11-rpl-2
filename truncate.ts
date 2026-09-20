import { db } from './prisma/db.ts';

async function run() {
  await db.$queryRaw`TRUNCATE TABLE "question_options" CASCADE;`;
  await db.$queryRaw`TRUNCATE TABLE "questions" CASCADE;`;
  await db.$queryRaw`TRUNCATE TABLE "quiz_attempts" CASCADE;`;
  await db.$queryRaw`TRUNCATE TABLE "quiz" CASCADE;`;
}
run().then(() => console.log('Truncated')).catch(console.error);
