import adminModel from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import sendMail from "../utils/emailTemplate.js";

const createToken = async (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const newUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    if ((!name, !email || !password)) {
      return res
        .status(400)
        .json({ success: false, message: "Please Fill All Fields" });
    }

    const emailExists = await adminModel.findOne({ email });
    if (emailExists) {
      return res
        .status(400)
        .json({ success: false, message: "User Already Exists" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const userData = new adminModel({
      name,
      email,
      password: hashedPassword,
    });

    await userData.save();

    return res.status(201).json({
      success: true,
      userData: {
        ...userData._doc,
        password: undefined,
      },
      message: "Account Registerd",
    });
  } catch (error) {
    // res.status(500).json({ success: false, message: "Internal Server Error" });
    next(error);
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.json({ success: false, message: "Please Fill All Fields" });
    }

    const user = await adminModel.findOne({ email }).select("+password");

    const checkPassword = bcrypt.compareSync(password, user.password);

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User Not Found" });
    }

    if (!checkPassword) {
      return res
        .status(404)
        .json({ success: false, message: "Wrong Credentials" });
    }

    if (user) {
      const token = await createToken({ id: user._id });
      return res.json({ success: true, message: "Welcome Back", token });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const sendEmail = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    if (!name || !email || !message) {
      res
        .status(404)
        .json({
          success: false,
          message: "Please Fill All Fields To Send Email",
        });
    }

   await sendMail(name, email, message);
    return res
      .status(200)
      .json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.log(error);
  }
};

export { loginUser, newUser, sendEmail };
