const Phonebook = require("../models/phonebookModel");

// Create a new phonebook
const createphonebook = async (req, res) => {
  try {
    const { name, address, email,phonebook } = req.body;
    if (!name || !address || !email || !phonebook) {
      return res
        .status(400)
        .json({ error: "All fields (name, address, email,phonebook) are required" });
    }

    const newphonebook = new phonebook({ name, address, email });
    const savednewbook = await newphonebook.save();

    res.status(201).json(savedphonebook);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET all phonebooks
const getphonebooks = async (req, res) => {
  try {
    const phonebook = await Phonebook.find();
    res.json(phonebook);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET a single phonebook by ID
const getphonebook = async (req, res) => {
  try {
    const phonebook = await Phonebook.findById(req.params.id);
    if (!phonebook) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json(phonebook);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// DELETE a blog by ID
const deletephonebook = async (req, res) => {
  try {
    const phonebook = await Phonebook.findByIdAndDelete(req.params.id);
    if (!phonebook) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update (Patch) a single blog by ID
const patchphonebook = async (req, res) => {
  try {
    const phonebook = await Phonebook.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!phonebook) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.json(phonebook);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Replace (Put) a single blog by ID
const putphonebook = async (req, res) => {
  try {
    const blog = await Blog.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createphonebook,
  getphonebooks,
  getphonebook,
  deletephonebook,
  patchphonebook,
  putphonebook,
};