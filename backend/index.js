import server from "./src/server.js";

const port = process.env.PORT || 3001;

  try {
    server.listen(port, () => {
      console.log(`🚀 listening at ${port} 🚀`); 
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }