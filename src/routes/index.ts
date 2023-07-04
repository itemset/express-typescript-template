import express, { Router } from "express";
import fs from "fs";
import path from "path";

const app = express()
	.use(express.json())
	.use(express.urlencoded({ extended: true }));

function loadRoutes(directory: string, router: Router) {
	fs.readdirSync(directory).forEach(async (fileName) => {
		const filePath = path.join(directory, fileName);

		if (fs.lstatSync(filePath).isDirectory())
			return loadRoutes(filePath, router);

		if (!fileName.includes(".js") || fileName === "index.js") return;

		router.use(
			directory.replace(__dirname, "") || "/",
			(await import(filePath)).default,
		);
	});
}

loadRoutes(path.join(__dirname), app);
export default app;
