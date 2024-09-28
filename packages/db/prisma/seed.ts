import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
const prisma = new PrismaClient()

async function main() {
  const hashalice = await bcrypt.hash('alice', 10);
  const hashbob = await bcrypt.hash('bob', 10);
  const alic = await prisma.user.upsert({
    where: { number: '999999999900' },
    update: {},
    create: {
      number: '999999999900',
      password: hashalice,
      name: 'aliceeee',
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Success",
          amount: 20000,
          token: "12222222",
          provider: "HDFC Bank",
        },
      },
      Balance:{
        create:{
          amount:500,
          locked:500
        }
      }
    },
  })
  const bo = await prisma.user.upsert({
    where: { number: '999999999888' },
    update: {},
    create: {
      number: '999999999888',
      password: hashbob,
      name: 'bobbbb',
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Failure",
          amount: 2000,
          token: "123333333",
          provider: "HDFC Bank",
        },
      },
      Balance:{
        create:{
          amount:500,
          locked:500
        }
      }
    },
  })
  console.log({ alic, bo })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })