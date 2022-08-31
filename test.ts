import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // address is unique so we can use it in the unique query
  await prisma.contact.findUnique({ where: { addressId: "1" } });

  // adding two contacts with null address is fine
  await prisma.contact.create({
    data: { firstName: "A", lastName: "B", email: "a@b.com" },
  });
  await prisma.contact.create({
    data: { firstName: "C", lastName: "D", email: "c@d.com" },
  });

  // adding two contacts with the same address would fail
  // const address = await prisma.address.create({
  //   data: {
  //     addressOne: "123 Old Pkwy",
  //     city: "San Francisco",
  //     state: "CA",
  //     zip: "94430",
  //   },
  // });
  // await prisma.contact.create({
  //   data: {
  //     firstName: "E",
  //     lastName: "F",
  //     email: "e@f.com",
  //     addressId: address.id,
  //   },
  // });
  // await prisma.contact.create({
  //   data: {
  //     firstName: "G",
  //     lastName: "H",
  //     email: "g@h.com",
  //     addressId: address.id,
  //   },
  // });

  // just to see what we have in the db
  const contacts = await prisma.contact.findMany();
  console.log(contacts);
}

main();
