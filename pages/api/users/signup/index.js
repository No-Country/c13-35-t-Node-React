import bcrypt from "bcrypt";
import prisma from "../../../../prisma/client";

export default async function signup(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { email, password, name } = req.body;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
