const connectDB = require("./config/db");
const express = require("express");

// express app
const app = express();
connectDB();

// Import the controllers
const {
  getphonebook,
  createphonebook,
  getphonebooks,
  deletephonebook,
  patchphonebook,
  putphonebook,
  
} = require("./controllers/phonebookControllers");

// middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API Running!"));

//Routes

app.get("/", (req, res) => res.send("API Running!"));
// GET a single phonebook
app.get("/api/phonebook/:id", getphonebook);
// DELETE a phonebook
app.delete("/api/phonebook/:id", deletephonebook);
// Update phonebook using PATCH
app.patch("/api/phonebook/:id", patchphonebook);
// Update phonebook using PUT
app.put("/api/phonebook/:id", putphonebook);
// Add a new phonebook
app.post("/api/phonebook", createphonebook);
// GET all phonebooks
app.get("/api/phonebook", getphonebooks);
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
