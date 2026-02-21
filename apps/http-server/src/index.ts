import * as express from "express";
import {client} from "@repo/prisma/client";

const app = express.default();
app.use(express.json());

app.get("/", async (req: express.Request, res: express.Response) => {
  const users = await client.user.findMany();
  res.send({ users });
});

app.post("/signup",async (req: express.Request, res: express.Response) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const user = await client.user.create({
      data: {
        username : username,
        password : password,
      }
    })
    res.status(201).json({
      message : "User created successfully",
      user : user,
    })
  } catch (error) {
    res.status(500).json({
      message : "User already exists",
    })
  }
})

app.listen(3001, () => {
  console.log("Server is running on port 3001");
})