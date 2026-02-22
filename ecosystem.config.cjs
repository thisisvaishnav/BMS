module.exports = {
  apps: [
    {
      name: "web",
      cwd: "/root/BMS/apps/web",
      script: "pnpm",
      args: "start"
    },
    {
      name: "api",
      cwd: "/root/BMS/apps/http-server",
      script: "dist/index.js"
    },
    {
      name: "websocket",
      cwd: "/root/BMS/apps/websocket",
      script: "dist/index.js"
    }
  ]
};
