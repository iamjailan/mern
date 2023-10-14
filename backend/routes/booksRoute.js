import express from "express";
const router = express.Router();
import {
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
  addBook,
} from "../controllers/booksCont.js";

router.route("/").get(getAllBooks).post(addBook);
router.route("/:id").get(getSingleBook).put(updateBook).delete(deleteBook);

// router.get("/", getAllBooks);
// router.get("/:id", getSingleBook);
// router.post("/", addBook);
// router.put("/:id", updateBook);
// router.delete("/:id", deleteBook);

export default router;
