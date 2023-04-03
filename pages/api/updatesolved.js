import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  const { id, wallet, solved } = req.query;
  try {
    const user = await prisma.user.update({
      where: {
        id: id,
        wallet: wallet,
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
}
