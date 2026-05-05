import 'dotenv/config';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import * as bcrypt from 'bcrypt';
import { PrismaClient } from '../src/generated/prisma';

async function main() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error('DATABASE_URL is not configured');
  }

  const prisma = new PrismaClient({
    adapter: new PrismaMariaDb(databaseUrl),
  });

  for (const name of ['USER', 'ADMIN', 'NHANVIEN']) {
    await prisma.role.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  const adminPassword = process.env.ADMIN_PASSWORD ?? 'admin123456';
  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  await prisma.user.upsert({
    where: { username: 'admin' },
    update: {
      email: process.env.ADMIN_EMAIL ?? 'admin@example.com',
      roles: {
        connect: { name: 'ADMIN' },
      },
    },
    create: {
      username: 'admin',
      email: process.env.ADMIN_EMAIL ?? 'admin@example.com',
      password: hashedPassword,
      roles: {
        connect: { name: 'ADMIN' },
      },
    },
  });

  await prisma.$disconnect();
}

main().catch(async (error) => {
  console.error(error);
  process.exit(1);
});
