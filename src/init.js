import "dotenv/config";
import sequelize from "./db";
import setAssociations from "./models";
import server from "./server";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);

const handleDBConnection = () => console.log("✅ DB Connected. 🚀");

async function startServer() {
  try {
    setAssociations();
    server.listen(PORT, handleListening);
    await sequelize.sync();
    handleDBConnection();
  } catch (error) {
    console.log(error);
  }
}

startServer();
