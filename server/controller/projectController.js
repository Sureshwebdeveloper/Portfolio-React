import projectModel from "../models/ProjectModel.js";
import fs from "fs";
import path from "path"
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

const deleteProject = async (req,res) => {
    try {
      const project = await projectModel.findById(req.body.id);
      
      if (!project) {
        return res.status(404).json({
          success: false,
          message: "Project not found",
        });
      }
  
      // Delete the image file from the server
       fs.unlink(`uploads/${project.image}`, (err) => {
        if (err) {
          console.log(err);
        }
      });

      await projectModel.findByIdAndDelete(req.body.id);
  
      return res.status(200).json({
        success: true,
        message: "Project deleted successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
};

const updateProject = async (req, res) => {
  const { id } = req.params; 
  const { title, category, github_url, deployment_url } = req.body;

  try {
    const updateData = {};
    if (title) updateData.title = title;
    if (category) updateData.category = category;
    if (github_url) updateData.github_url = github_url;
    if (deployment_url) updateData.deployment_url = deployment_url;

  const updatedProject = await projectModel.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true } // This option returns the updated document
    );

    if (!updatedProject) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: updatedProject,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


export { projectUpload, filterCategory,deleteProject ,updateProject};
