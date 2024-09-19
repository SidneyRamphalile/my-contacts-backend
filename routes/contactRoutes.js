const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
// @route GET /api/contacts - Get all contacts
// @route POST /api/contacts - Create a new contact
router.route("/").get(getContacts).post(createContact);

// @route GET /api/contacts/:id - Get a single contact by ID
// @route PUT /api/contacts/:id - Update a contact by ID
// @route DELETE /api/contacts/:id - Delete a contact by ID
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
