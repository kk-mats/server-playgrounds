import * as express from "express";
import * as path from "path";

const server = express();
server.use(express.static(path.join("./", "dist")));

server.get("/api", (req, res) => {
	res.send({ api: "test" });
});

server.get("*", (req, res) => {
	res.sendFile(path.resolve(".", "dist", "index.html"));
});

server.listen(3000, () => {
	console.log("server started");
});
