import { client } from "@repo/prisma/client";

export default async function Home() {
  
  const users = await client.user.findFirst();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      name:
      <div> {users?.username} </div>
      password:
      <div> {users?.password} </div>
    </div>
  )
}
