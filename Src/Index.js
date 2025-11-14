import ejs from "ejs";
import express from "express";
import path from "path"; // 1. Import path
import { fileURLToPath } from "url"; // 2. Import fileURLToPath

// 3. Add this code block to define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;

//--------middleware----------
app.set("view engine", "ejs");
// 4. Use path.join() for a reliable path
app.set('views', path.join(__dirname, 'Views'));

app.use(express.static("public"));
app.use(express.static(path.join(__dirname,'..', 'public')));
app.use(express.urlencoded({extended: true}));
// 5. Removed the incorrect "app.use(ejs)" line

//-------BACKEND Begins--------
app.get("/", (req, res) => {
    res.render("Home.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.listen(PORT, () => {
    console.log("App listening on port " + PORT);
});