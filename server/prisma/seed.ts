import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: "bob@prisma.io" },
    update: {},
    create: {
      id: "74288096-dc31-4928-a11b-daa35282ae4b",
      email: "bob@prisma.io",
      name: "Bob Doyle",
      inventoryItems: {
        create: {
          name: "Apples",
        },
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
