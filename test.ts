import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.contact.create({
    data: { firstName: "A", lastName: "B", email: "a@b.com" },
  });

  await prisma.contact.create({
    data: { firstName: "C", lastName: "D", email: "c@d.com" },
  });

  const contacts = await prisma.contact.findMany();

  console.log(contacts);
}

main();
