import app from "./routes";
import { config } from "dotenv";

config();
const port = process.env.PORT;

app.listen(port, () => {
	console.log(`🚀 Server is running at http://localhost:${port}`);
});
