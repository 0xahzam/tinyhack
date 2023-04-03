// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  await prisma.$connect();
  const questions = await prisma.user.findMany();
  await prisma.$disconnect();
  res.json(questions);
}
