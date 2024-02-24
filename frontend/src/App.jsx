import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3000", { transports: ["websocket"] });

function App() {
  const [message, setMessage] = useState("");

  socket.on("accident", (data) => {
    console.log(data);
  });

  return (
    <div>
      <div>
        dsd
        <p>hi bb</p>
      </div>
    </div>
  );
}

export default App;
