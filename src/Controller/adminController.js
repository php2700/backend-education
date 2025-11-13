import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import path from 'path'
import fs from 'fs'
import AdminModel from '../Models/adminModel.js';
import WhyChooseModel from '../Models/whyChooseModel.js';
import StoryModel from '../Models/successStoryModel.js';
import TrustModel from '../Models/trustModel.js';
import PlanModel from '../Models/planModel.js';
import OfferModel from '../Models/offerModel.js';
import BannerModel from '../Models/bannerModel.js';
import FooterBannerModel from '../Models/footerBannerModel.js';
import PricingModel from '../Models/pricingModel.js';
import MathTestModel from '../Models/mathTestModel.js';
import TutoringModel from '../Models/tutoringModel.js';
import BlogModel from '../Models/blogModel.js';
import RegistrationModel from '../Models/registrationModel.js';
import AboutIseeModel from '../Models/aboutIseeModel.js';
import AboutElaModel from '../Models/aboutElaModel.js';
import CommonCoreModel from '../Models/commonCoreModel.js';
import CommonLanguageModel from '../Models/commonLanguageModel.js';
import ChapterModel from '../Models/chapterModel.js';
import CompetitionModel from '../Models/competitionModel.js';
import KangarooModel from '../Models/kangarooModel.js';

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


export const addBanner = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) return res.status(400).json({ success: false, message: "All field is required" });
    if (!req.file) return res.status(400).json({ success: false, message: "All field is required" });

    const imagePath = req.file ? `public/uploads/${req.file.filename}` : null;

    const bannerData = await BannerModel.create({
      title,
      description,
      image: imagePath,
    });

    res.status(201).json({
      success: true,
      message: "banner added successfully",
      data: bannerData,
    });
  } catch (error) {
    next(error);
  }
};

export const editBanner = async (req, res, next) => {
  try {

    const { title, description, _id } = req.body;

    const bannerData = await BannerModel.findById(_id);
    if (!bannerData)
      return res.status(404).json({ success: false, message: "why choose data not found" });

    if (req.file) {
      if (bannerData.image) {
        const oldPath = path.join("public", bannerData.image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      bannerData.image = `public/uploads/${req.file.filename}`;
    }

    bannerData.title = title || bannerData.title;
    bannerData.description = description || bannerData.description;

    await bannerData.save();

    res.status(200).json({
      success: true,
      message: "bannerData updated successfully",
      data: bannerData,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteBanner = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bannerData = await BannerModel.findById(id);
    if (!bannerData)
      return res.status(404).json({ success: false, message: "bannerData  not found" });

    if (bannerData.image) {
      const imagePath = path.join("public", bannerData.image);
      if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
    }
    await BannerModel.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "bannerData  deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};


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

export const addStory = async (req, res, next) => {
  try {
    const { description, name, designation, rating } = req.body;

    if (!description || !name || !designation) return res.status(400).json({ success: false, message: "All field is required" });
    if (!req.file) return res.status(400).json({ success: false, message: "All field is required" });

    const imagePath = `public/uploads/${req.file.filename}`
    const newStory = new StoryModel({

      description,
      image: imagePath, name, designation, rating
    });
    await newStory.save();
    res.status(201).json({ message: "Story added successfully", data: newStory });
  } catch (error) {
    next(error)
  }
};

export const editStory = async (req, res, next) => {
  try {

    const { description, name, designation, rating, _id } = req.body;

    const storyData = await StoryModel.findById(_id);
    if (!storyData)
      return res.status(404).json({ success: false, message: "story data data not found" });

    if (req.file) {
      if (storyData.image) {
        const oldPath = path.join("public", storyData.image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      storyData.image = `public/uploads/${req.file.filename}`;
    }

    storyData.description = description || storyData.description;
    storyData.name = name || storyData.name;
    storyData.designation = designation || storyData.designation;
    storyData.rating = rating || storyData.rating;

    await storyData.save();

    res.status(200).json({
      success: true,
      message: "storyData updated successfully",
      data: storyData,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteStory = async (req, res, next) => {
  try {
    const { id } = req.params;

    const story = await StoryModel.findById(id);
    if (!story) return res.status(404).json({ success: false, message: "Story not found" });
    await StoryModel.findByIdAndDelete(id);
    if (story.image) {
      const imagePath = path.resolve(story.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }
    res.json({ success: true, message: "Story deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export const addTrust = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) return res.status(400).json({ success: false, message: "All field is required" });
    if (!req.file) return res.status(400).json({ success: false, message: "All field is required" });

    const imagePath = `public/uploads/${req.file.filename}`
    const trust = new TrustModel({
      title,
      description,
      image: imagePath,
    });
    await trust.save();
    res.status(201).json({ message: "Story added successfully", data: trust });
  } catch (error) {
    next(error)
  }
};

export const editTrust = async (req, res, next) => {
  try {

    const { title, description, _id } = req.body;

    const trustData = await TrustModel.findById(_id);
    if (!trustData)
      return res.status(404).json({ success: false, message: "story data data not found" });

    if (req.file) {
      if (trustData.image) {
        const oldPath = path.join("public", trustData.image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      trustData.image = `public/uploads/${req.file.filename}`;
    }

    trustData.title = title || trustData.title;
    trustData.description = description || trustData.description;


    await trustData.save();

    res.status(200).json({
      success: true,
      message: "trustData updated successfully",
      data: trustData,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTrust = async (req, res, next) => {
  try {
    const { id } = req.params;

    const trustData = await TrustModel.findById(id);
    if (!trustData) return res.status(404).json({ success: false, message: "trustData not found" });
    await TrustModel.findByIdAndDelete(id);
    if (trustData.image) {
      const imagePath = path.resolve(trustData.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }
    res.json({ success: true, message: "trustData deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export const addPlan = async (req, res, next) => {
  try {
    const { name, amount, duration, feature } = req.body;

    if (!name || !amount || !duration) return res.status(400).json({ success: false, message: "All field is required" });

    const plan = new PlanModel({
      name,
      amount,
      duration, feature
    });
    await plan.save();
    res.status(201).json({ message: "plan added successfully", data: plan });
  } catch (error) {
    next(error)
  }
};

export const editPlan = async (req, res, next) => {
  try {

    const { name, amount, duration, feature, _id } = req.body;

    const planData = await PlanModel.findById(_id);
    if (!planData)
      return res.status(404).json({ success: false, message: "plan data data not found" });

    planData.name = name || planData.name;
    planData.amount = amount || planData.amount;
    planData.duration = duration || planData.duration;
    planData.feature = feature || planData.feature;
    await planData.save();

    res.status(200).json({
      success: true,
      message: "planData updated successfully",
      data: planData,
    });
  } catch (error) {
    next(error);
  }
};

export const deletePlan = async (req, res, next) => {
  try {
    const { id } = req.params;
    const planData = await PlanModel.findById(id);
    if (!planData) return res.status(404).json({ success: false, message: "planData not found" });
    await PlanModel.findByIdAndDelete(id);
    res.json({ success: true, message: "planData deleted successfully" });
  } catch (error) {
    next(error);
  }
};



export const addOffer = async (req, res, next) => {
  try {
    const { type, title, description, expireDate } = req.body;

    if (!type || !title || !description) return res.status(400).json({ success: false, message: "All field is required" });

    const offer = new OfferModel({
      type,
      title,
      description, expireDate
    });
    await offer.save();
    res.status(201).json({ message: "offer added successfully", data: offer });
  } catch (error) {
    next(error)
  }
};

export const editOffer = async (req, res, next) => {
  try {

    const { type, title, description, expireDate, _id } = req.body;

    const offerData = await OfferModel.findById(_id);
    if (!offerData)
      return res.status(404).json({ success: false, message: "offer data not found" });

    offerData.type = type || offerData.type;
    offerData.title = title || offerData.title;
    offerData.description = description || offerData.description;
    offerData.expireDate = expireDate || offerData.expireDate;
    await offerData.save();
    res.status(200).json({
      success: true,
      message: "offerData updated successfully",
      data: offerData,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteOffer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const offerData = await OfferModel.findById(id);
    if (!offerData) return res.status(404).json({ success: false, message: "offerData not found" });
    await OfferModel.findByIdAndDelete(id);
    res.json({ success: true, message: "offerData deleted successfully" });
  } catch (error) {
    next(error);
  }
};


export const addFooterBanner = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    if (!title || !description)
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });

    let imagePath;
    if (req.file)
      imagePath = `public/uploads/${req.file.filename}`;

    const existingBanner = await FooterBannerModel.findOne();

    if (existingBanner) {
      if (imagePath) {
        if (existingBanner.image && fs.existsSync(path.join(process.cwd(), existingBanner.image))) {
          fs.unlinkSync(path.join(process.cwd(), existingBanner.image));
        }
        existingBanner.image = imagePath;
      }

      existingBanner.title = title;
      existingBanner.description = description;

      await existingBanner.save();
      return res.status(200).json({
        success: true,
        message: "Banner updated successfully",
        data: existingBanner,
      });
    }
    if (!req.file) {
      return res.status(400).json({ message: "Banner image is required for creating new data" });
    }

    const newBanner = await FooterBannerModel.create({
      title,
      description,
      image: imagePath,
    });

    res.status(201).json({
      success: true,
      message: "Banner added successfully",
      data: newBanner,
    });
  } catch (error) {
    next(error);
  }
};


export const addPricing = async (req, res, next) => {
  try {
    const { className, fees, feesPerHour, off } = req.body;

    console.log(req?.body)
    if (!className || !fees || !feesPerHour) return res.status(400).json({ success: false, message: "All field is required" });
    if (!req.file) return res.status(400).json({ success: false, message: "All field is required" });

    const imagePath = `public/uploads/${req.file.filename}`
    const pricing = new PricingModel({
      className,
      fees,
      image: imagePath,
      feesPerHour, off
    });
    await pricing.save();
    res.status(201).json({ message: "pricing added successfully", data: pricing });
  } catch (error) {
    next(error)
  }
};

export const editPricing = async (req, res, next) => {
  try {

    const { className, fees, feesPerHour, off, _id } = req.body;

    const pricingData = await PricingModel.findById(_id);
    if (!pricingData)
      return res.status(404).json({ success: false, message: "pricing data not found" });

    if (req.file) {
      if (pricingData.image) {
        const oldPath = path.join("public", pricingData.image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      pricingData.image = `public/uploads/${req.file.filename}`;
    }

    pricingData.fees = fees || pricingData.fees;
    pricingData.className = className || pricingData.className;
    pricingData.feesPerHour = feesPerHour || pricingData.feesPerHour;
    pricingData.off = off || pricingData.off;

    await pricingData.save();

    res.status(200).json({
      success: true,
      message: "pricingData updated successfully",
      data: pricingData,
    });
  } catch (error) {
    next(error);
  }
};

export const deletePricing = async (req, res, next) => {
  try {
    const { id } = req.params;

    const pricingData = await PricingModel.findById(id);
    if (!pricingData) return res.status(404).json({ success: false, message: "pricingData not found" });
    await PricingModel.findByIdAndDelete(id);
    if (pricingData.image) {
      const imagePath = path.resolve(pricingData.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }
    res.json({ success: true, message: "pricingData deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export const upsetMathTest = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ success: false, message: "Title and description are required" });
    }

    // Check if a record already exists
    const existingData = await MathTestModel.findOne();

    let result;
    if (existingData) {
      // Update the existing one
      existingData.title = title;
      existingData.description = description;
      await existingData.save();

      result = existingData;
    } else {
      const newData = new MathTestModel({ title, description });
      await newData.save();
      result = newData;
    }

    return res.status(200).json({
      success: true,
      message: existingData
        ? "Data updated successfully"
        : "Data created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const upsertTutoring = async (req, res, next) => {
  try {
    const { heading, headingDescription, chapter } = req.body;

    if (!heading || !headingDescription) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const updatedTutoring = await TutoringModel.findOneAndUpdate(
      {},
      { heading, headingDescription, chapter },
      { new: true, upsert: true }
    );

    res.status(200).json({
      success: true,
      message: "Tutoring data saved successfully",
      data: updatedTutoring,
    });
  } catch (error) {
    next(error);
  }
};


export const addBlog = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) return res.status(400).json({ success: false, message: "All field is required" });
    if (!req.file) return res.status(400).json({ success: false, message: "All field is required" });

    const imagePath = `public/uploads/${req.file.filename}`
    const blog = new BlogModel({
      title,
      description,
      image: imagePath,
    });
    await blog.save();
    res.status(201).json({ message: "blog added successfully", data: blog });
  } catch (error) {
    next(error)
  }
};

export const editBlog = async (req, res, next) => {
  try {

    const { title, description, _id } = req.body;

    const blogData = await BlogModel.findById(_id);
    if (!blogData)
      return res.status(404).json({ success: false, message: "blog data not found" });

    if (req.file) {
      if (blogData.image) {
        const oldPath = path.join("public", blogData.image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      blogData.image = `public/uploads/${req.file.filename}`;
    }

    blogData.title = title || blogData.title;
    blogData.description = description || blogData.description;
    await blogData.save();

    res.status(200).json({
      success: true,
      message: "blogData updated successfully",
      data: blogData,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteBlog = async (req, res, next) => {
  try {
    const { id } = req.params;

    const blogData = await BlogModel.findById(id);
    if (!blogData) return res.status(404).json({ success: false, message: "blogData not found" });
    await BlogModel.findByIdAndDelete(id);
    if (blogData.image) {
      const imagePath = path.resolve(blogData.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }
    res.json({ success: true, message: "blogData deleted successfully" });
  } catch (error) {
    next(error);
  }
};


export const upsertRegistration = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: "Title and description are required." });
    }

    const registrationData = { title, description };
    const result = await RegistrationModel.findOneAndUpdate(
      {},
      registrationData,
      { new: true, upsert: true }
    );
    return res.status(200).json({
      message: "Registration saved successfully.",
      data: result,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", error });
  }
};


export const upsertAboutIsee = async (req, res, next) => {
  try {
    const { title, purpose, testStructure } = req.body;

    if (!title || !purpose || !testStructure  ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const result = await AboutIseeModel.findOneAndUpdate(
      {},
      { title, purpose, testStructure },
      { new: true, upsert: true }
    );

    return res.status(200).json({
      message: "about Isee saved successfully",
      data: result
    });
  } catch (error) {
    next(error)
  }
};




export const upsertAboutEla = async (req, res, next) => {
  try {
    const { testPrepDescription, description, heading, whoTake, questionType } = req.body;

    if (!description || !testPrepDescription || !heading || !whoTake || !questionType) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const existing = await AboutElaModel.findOne();

    let result;

    if (existing) {
      existing.description = description;
      existing.heading = heading;
      existing.whoTake = whoTake;
      existing.questionType = questionType;
      existing.testPrepDescription = testPrepDescription
      result = await existing.save();
    } else {
      const newQuestion = new AboutElaModel({
        description,
        heading,
        whoTake,
        questionType,
        testPrepDescription
      });
      result = await newQuestion.save();
    }

    res.status(201).json({
      success: true,
      message: "about Ela saved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};


export const upsertCommonCore = async (req, res, next) => {
  try {
    const { description, coverDescription, heading } = req.body;

    if (!description || !coverDescription || !heading) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const updatedCommonCore = await CommonCoreModel.findOneAndUpdate(
      {},
      { description, coverDescription, heading },
      { new: true, upsert: true }
    );

    res.status(200).json({
      success: true,
      message: "CommonCore data saved successfully",
      data: updatedCommonCore,
    });
  } catch (error) {
    next(error);
  }
};

export const upsertCommonLanguageArt = async (req, res, next) => {
  try {
    const { description, heading } = req.body;

    if (!description || !heading) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    const updatedLanguage = await CommonLanguageModel.findOneAndUpdate(
      {},
      { description, heading },
      { new: true, upsert: true }
    );
    res.status(200).json({
      success: true,
      message: "Language data saved successfully",
      data: updatedLanguage,
    });
  } catch (error) {
    next(error);
  }
};

export const upsertChapter = async (req, res, next) => {
  try {
    const { title, description, subjectDescription, chapterName } = req.body;

    if (!title || !description || !subjectDescription || !chapterName) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const updatedChapter = await ChapterModel.findOneAndUpdate(
      {},
      { title, description, subjectDescription, chapterName },
      { new: true, upsert: true }
    );

    res.status(200).json({
      success: true,
      message: "Chapter data saved successfully",
      data: updatedChapter,
    });
  } catch (error) {
    next(error);
  }
};

export const upsertCompetition = async (req, res) => {
  try {
    const { description, title, condition, competition,whyTake } = req.body;
    const competitionData = await CompetitionModel.findOneAndUpdate(
      {},
      {
        description,
        title,
        condition,
        competition,whyTake
      },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true
      }
    );

    res.status(200).json({
      success: true,
      message: "Competition data saved successfully",
      data: competitionData
    });
  } catch (error) {
    throw error;
  }
};


export const upsertKangaroo = async (req, res, next) => {
  try {
    const { testPrepDescription, testStructureDescription, data } = req.body;
    let parsedData = [];

    // Parse stringified JSON
    if (typeof data === "string") {
      parsedData = JSON.parse(data);
    } else if (Array.isArray(data)) {
      parsedData = data;
    }

    // Convert testStructureDescription if string
    const parsedStructure = Array.isArray(testStructureDescription)
      ? testStructureDescription
      : typeof testStructureDescription === "string"
      ? JSON.parse(testStructureDescription)
      : [testStructureDescription];

    // 🔥 Handle multiple uploaded files (like image_0, image_1, etc.)
    if (req.files && req.files.length > 0) {
      req.files.forEach((file) => {
        // filename example: "image_0", "image_1"
        const match = file.fieldname.match(/image_(\d+)/);
        if (match) {
          const index = parseInt(match[1]);
          if (parsedData[index]) {
            parsedData[index].image = `public/uploads/${file.filename}`;
          }
        }
      });
    }

    // Upsert (update existing or insert new)
    const kangarooData = await KangarooModel.findOneAndUpdate(
      {},
      {
        testPrepDescription,
        testStructureDescription: parsedStructure,
        data: parsedData,
      },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Kangaroo test data saved successfully",
      data: kangarooData,
    });
  } catch (error) {
    console.error("Error saving Kangaroo test:", error);
    next(error);
  }
};
