
import postgres from "postgres";

const dbConfig = {
	host: "localhost",
	port: 5432,
	database: "wm4quizapp",
    username:"ansuj9123",
    password:"Bless123",
};

const dbConnection = postgres(dbConfig);

export default dbConnection;