import { Router, Request, Response } from "express";

const router = Router();

// http://localhost:PORT/testing/
router.get("/", function (req: Request, res: Response) {
	res.json({
		success: true,
		message: "Hello World",
	});
});

export default router;
