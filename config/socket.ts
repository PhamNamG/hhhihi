// lib/socket.ts
import { io, Socket } from "socket.io-client";


export const getSocket = () => {
  const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL, {
    withCredentials: true,
    transports: ["websocket"],
  });

  socket.on("connect_error", (err) => {
    console.error("❌ Connect error:", err.message);
  });

  socket.on("reconnect_error", (err) => {
    console.error("❌ Reconnect error:", err.message);
  });

  return socket;
};
