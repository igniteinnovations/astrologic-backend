import express from "express";
import {
  createBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";
import {
  addCategory,
  getCategories,
  updateCategory,
  deleteCategory,
} from "../controllers/blogCategory.controller.js";
import {
  createNews,
  getNews,
  updateNews,
  deleteNews,
} from "../controllers/news.controller.js";
import {
  createSatTips,
  getSatTips,
  deleteSatTips,
  updateSatTips,
} from "../controllers/sat.controller.js";
import { loginAdmin } from "../controllers/admin.controller.js";

const router = express.Router();
//login
router.post("/login", loginAdmin);
//blog
router.post("/create", createBlog);
router.get("/", getBlogs);
router.put("/blogupdate/:id", updateBlog);
router.delete("/blogdelete/:id", deleteBlog);

//category
router.post("/add", addCategory);
router.get("/cat", getCategories);
router.put("/catupdate/:id", updateCategory);
router.delete("/catdelete/:id", deleteCategory);
//news
router.post("/news/create", createNews);
router.get("/news", getNews);
router.put("/newsupdate/:id", updateNews);
router.delete("/newsdelete/:id", deleteNews);
//sat
router.post("/sat/create", createSatTips);
router.get("/sat", getSatTips);
router.put("/satupdate/:id", updateSatTips);
router.delete("/satdelete/:id", deleteSatTips);

export default router;
