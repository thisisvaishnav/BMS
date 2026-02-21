import { WebSocketServer } from "ws";

import {client} from "@repo/prisma/client";
const server = new WebSocketServer({ port: 4001 });

server.on("connection", async (socket) => {

  socket.send("hi there you are connected to the websocket server");
  
  await client.user.create({
    data: {
      username: Math.random().toString(36),
      password: Math.random().toString(36),
    },
  });
});