import http from "http";

import app from "./app";
// import { connectDb, disconnectDb } from "./db";
// import config from "./utils/config";
import logger from "./utils/logger";

const host = "localhost";
const port = 8000;

const server = http.createServer(app);

server.listen(port, host, () => {
	logger.info(`Server is running on http://${host}:${port}`);
});

// server.on("listening", () => {

// console.log("server is listening");
	// const addr = server.address();
	// const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
	// logger.info("listening on: %s", bind);
// });

// process.on("SIGTERM", () => server.close(() => disconnectDb()));

// connectDb().then(() => server.listen(config.port));
