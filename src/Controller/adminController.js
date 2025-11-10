import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import path from 'path'
import fs from 'fs'
import AdminModel from '../Models/adminModel.js';
import WhyChooseModel from '../Models/whyChooseModel.js';

const checkPassword = async (password, hashPassword) => {
  const verifyPassword = await bcrypt.compare(password, hashPassword);
  if (verifyPassword) return verifyPassword;
  throw new Error('Email and Password wrong')
}

const generateToken = async (userData) => {
  const token = await jwt.sign({ id: userData?.id, role: userData?.role }, process.env.JWT_SECRET_KEY, { algorithm: process.env.JWT_ALGORITHM, expiresIn: process.env.JWT_EXPIRE_TIME });
  if (token) return token;
  throw new Error('something went wrong')

}

export const Login = async (req, res, next) => {
  try {
    const { email, password } = req?.body;

    const isExistEmail = await AdminModel.findOne({ email: email });
    if (!isExistEmail) return res.status(404).json({ success: false, message: 'email not valid' })

    await checkPassword(password, isExistEmail?.password);
    const token = await generateToken(isExistEmail);

    const userData = {
      _id: isExistEmail?._id,
      role: isExistEmail?.role,
      token: token
    }
    return res.status(200).json({ message: 'login-successfully', data: userData })
  } catch (error) {
    next(error)
  }
}


export const addWhyChoose = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) return res.status(400).json({ success: false, message: "All field is required" });
    if (!req.file) return res.status(400).json({ success: false, message: "All field is required" });

    const imagePath = req.file ? `public/uploads/${req.file.filename}` : null;

    const whyChooseData = await WhyChooseModel.create({
      title,
      description,
      image: imagePath,
    });

    res.status(201).json({
      success: true,
      message: "why choose added successfully",
      data: whyChooseData,
    });
  } catch (error) {
    next(error);
  }
};

export const editWhyChoose = async (req, res, next) => {
  try {

    const { title, description, _id } = req.body;

    const whyChoose = await WhyChooseModel.findById(_id);
    if (!whyChoose)
      return res.status(404).json({ success: false, message: "why choose data not found" });

    if (req.file) {
      if (whyChoose.image) {
        const oldPath = path.join("public", whyChoose.image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      whyChoose.image = `public/uploads/${req.file.filename}`;
    }

    whyChoose.title = title || whyChoose.title;
    whyChoose.description = description || whyChoose.description;

    await whyChoose.save();

    res.status(200).json({
      success: true,
      message: "whyChoose updated successfully",
      data: whyChoose,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteWhyChoose = async (req, res, next) => {
  try {
    const { id } = req.params;
    const whyChoose = await WhyChooseModel.findById(id);
    if (!whyChoose)
      return res.status(404).json({ success: false, message: "whyChoose  not found" });

    if (whyChoose.image) {
      const imagePath = path.join("public", whyChoose.image);
      if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
    }
    await WhyChooseModel.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "whyChoose  deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};