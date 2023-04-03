import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  await prisma.$connect();

  const { id, solved } = req.body;

  try {
    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        solved,
      },
    });

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating user" });
  }

  await prisma.$disconnect();
}
