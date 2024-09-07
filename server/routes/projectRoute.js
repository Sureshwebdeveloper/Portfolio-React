import express from "express";
import multer from "multer";
import {filterCategory, projectUpload,removeProject} from "../controller/projectController.js";
const adminRouter = express.Router();

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage });
adminRouter.post("/add", upload.single("image"), projectUpload);
adminRouter.post("/remove",removeProject);
adminRouter.get("/filter/:category",filterCategory);

export default adminRouter;
