import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  await prisma.$connect();
  if (req.method === "POST") {
    const { id, wallet, solved } = req.body;
    console.log(id, wallet, solved);
    try {
      const newUser = await prisma.user.create({
        data: {
          id: parseInt(id, 10),
          wallet: wallet,
          solved: solved,
        },
      });
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Unable to create user" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
  await prisma.$disconnect();
}
