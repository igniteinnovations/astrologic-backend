import express from "express";
import { createBlog, getBlogs } from "../controllers/blogController.js";
import {
  addCategory,
  getCategories,
} from "../controllers/blogCategory.controller.js";
import { createNews, getNews } from "../controllers/news.controller.js";
import { createSatTips, getSatTips } from "../controllers/sat.controller.js";

const router = express.Router();

router.post("/create", createBlog);
router.get("/", getBlogs);

router.post("/add", addCategory);
router.get("/cat", getCategories);

router.post("/news/create", createNews);
router.get("/news", getNews);

router.post("/sat/create", createSatTips);
router.get("/sat", getSatTips);

export default router;
