import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    
    category: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    github_url:{
      type: String,
      required: true,
    },

    deployment_url:{
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const projectModel =
  mongoose.model.project || mongoose.model("project", projectSchema);
export default projectModel;
