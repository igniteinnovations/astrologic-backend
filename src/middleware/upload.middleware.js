import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads/images");
  },
  filename: function (req, file, cb) {
    const fileName = uuidv4() + path.extname(file.originalname);
    cb(null, fileName);
  },
});

const upload = multer({ storage });

export default upload;
