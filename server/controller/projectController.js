import projectModel from "../models/ProjectModel.js";
import fs from "fs";

const projectUpload = async (req, res) => {
  const { title, category, github_url, deployment_url } = req.body;
  try {
    let image_filename = `${req.file.filename}`;

    const response = await new projectModel({
      title,
      category,
      image: image_filename,
      github_url,
      deployment_url,
    });

    await response.save();

    return res.status(200).json({
      success: true,
      message: "Project Deatile Save Successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const removeProject = async (req, res) => {
  const { id } = req.body;

  try {
    const response = await projectModel.findById(id);

    if (!response) {
      res.status(400).json({ success: false, message: "No Id Matached" });
    }

    fs.unlink(`uploads/${response.image}`, (err) => {
      if (err) {
        console.error("Error deleting image:", err);
      }
    });
    console.log(`uploads/${response.image}`);

    await projectModel.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Item Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const filterCategory = async (req, res) => {
  const category = req.params.category;

  try {
    if (category == "All") {
      const allProjects = await projectModel.find({});
      return res.status(200).json({
        success: true,
        data: allProjects,
        dataLength: allProjects.length,
      });
    }
    const project = await projectModel.find({ category });
    if (!project || project.length <= 0) {
      return res
        .status(400)
        .json({ success: false, message: `${category} Not Found ` });
    }
    res.status(200).json({
      success: true,
      message: `${category} Category Changed`,
      data: project,
    });
  } catch (error) {}
};

export { projectUpload, removeProject, filterCategory };
