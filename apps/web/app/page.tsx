import { prisma } from "@repo/database";
import { Button } from "@/components/ui/button";

export default async function IndexPage() {
  const users = await prisma.user.findMany();

  return (
    <div>
      <h1 className="font-bold underline bg-green-500  mt-2">Hello World</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
      <Button className="bg-red-600">Click</Button>
    </div>
  );
}
