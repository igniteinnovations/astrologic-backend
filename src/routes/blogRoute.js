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
import {
  addService,
  getServices,
  updateService,
  deleteService,
} from "../controllers/serviceController.js";
import {
  createImage,
  getImages,
  getImageById,
  updateImage,
  deleteImage,
} from "../controllers/image.controller.js";
import upload from "../middleware/upload.middleware.js";
import {
  bookConsultation,
  getConsultations,
} from "../controllers/consultationController.js";
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
//service
router.post("/service/create", addService);
router.get("/service", getServices);
router.put("/serviceupdate/:id", updateService);
router.delete("/servicedelete/:id", deleteService);
//book consultation
router.post("/book", bookConsultation);
router.get("/getconsultation", getConsultations);
//upload image
router.post("/image/create", upload.single("image"), createImage);
router.get("/getallimages", getImages);
router.get("/getimage/:id", getImageById);
router.put("/updateimage/:id", upload.single("image"), updateImage);
router.delete("/deleteimage/:id", deleteImage);

export default router;
