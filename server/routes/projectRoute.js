import express from "express";
import multer from "multer";
import {deleteProject, filterCategory, projectUpload,removeProject, updateProject} from "../controller/projectController.js";
const adminRouter = express.Router();

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage });
// add a new project include image
adminRouter.post("/add", upload.single("image"), projectUpload);

// getting items by category wise default all
adminRouter.get("/filter/:category",filterCategory);
// delete
adminRouter.delete("/projects/:id",deleteProject);
// Update
adminRouter.put("/projects/:id",updateProject);

export default adminRouter;
