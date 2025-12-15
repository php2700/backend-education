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
import ChapterModel from '../Models/chapterModel.js';
import CompetitionModel from '../Models/competitionModel.js';
import KangarooModel from '../Models/kangarooModel.js';
import KangarooDetailModel from '../Models/kangarooDetailModel.js';
import ScienceDetailModel from '../Models/scienceDetailModel.js';
import ScienceModel from '../Models/scienceModel.js';
import AboutCoreElaModel from '../Models/aboutCoreElaModel.js';
import AboutElaDetailModel from '../Models/ElaDetailModel.js';
import LanguageModel from '../Models/languageModel.js';
import TestImonialModel from '../Models/testimonialModel.js';
import AboutModel from '../Models/aboutModel.js';
import FaqModel from '../Models/faqModel.js';
import ContactTextModel from '../Models/contactTextModel.js';
import TermsModel from '../Models/TermsModel.js';
import ManagementModel from '../Models/managementModel.js';
import SatTestModel from '../Models/SatTestModel.js';
import PsatTestModel from "../Models/psatmodel.js"
import SsatTest from "../Models/SsatTestModel.js";
import ShsatTest from "../Models/ShsatTestModel.js";
import IseeTest from "../Models/IseeTestModel.js"
import ElaTest from "../Models/ElaTestModel.js"
import ScatTest from "../Models/ScatTestModel.js"
import AmcTest from "../Models/AmcTestModel.js"
import MathKangarooTest from "../Models/MathKangarooTestModel.js";
import ActTest from "../Models/ActTestModel.js"
import CogatTest from "../Models/CogatTestModel.js";
import SbacTest from "../Models/SbacTestModel.js"
import AccuplacerTest from "../Models/AccuplacerModel.js"
import StbTest from "../Models/StbTestModel.js"
import ElaTestModel from "../Models/ElaTestModel.js"
import K12ServiceModel, { MethodologyModel } from '../Models/k-12Model.js';




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
    if (!title || !description)
      return res.status(400).json({ success: false, message: "All fields are required" });

    const imagePath = req.file ? `public/uploads/${req.file.filename}` : null;
    const existing = await BannerModel.findOne();

    if (existing) {
      if (req.file && existing.image) {
        const oldImagePath = path.join(process.cwd(), existing.image);

        fs.unlink(oldImagePath, (err) => {
          if (err) console.log("Old image delete error:", err);
        });
      }

      existing.title = title;
      existing.description = description;
      if (imagePath) existing.image = imagePath;

      await existing.save();

      return res.status(200).json({
        success: true,
        message: "Banner updated successfully",
        data: existing,
      });
    }

    const bannerData = await BannerModel.create({
      title,
      description,
      image: imagePath,
    });

    res.status(201).json({
      success: true,
      message: "Banner created successfully",
      data: bannerData,
    });
  } catch (error) {
    next(error);
  }
};

export const getDashboardCounts = async (req, res) => {
  try {
    // Promise.all use kar rahe hain taaki saari counting ek saath ho (Fast Response)
    const [
      // HomeCount,
      BannerCount,
      WhyChooseCount,
      OfferCount,
      StoryCount,

      TrustCount,
      PlanCount,
      FooterBannerCount,

      // courseCount,
      // MathTestCount,
      // TutoringCount,
      // ChapterMCount,
      // CompetitionCount,
      // KangarooCount,
      // ScienceCount,

      // EnglishCount,


      // LanguageCount,
      // AboutCoreElaCount,
      // AboutElaCount,
      // AboutIseeCount,
      // RegistrationCount,


      aboutCount,
      pricingCount,
      managementCount,
      blogCount,
      testimonialCount,
      contactCount
    ] = await Promise.all([
      // User.countDocuments({}),           // Total Users
      // Course.countDocuments({}), 
      // 

      BannerModel.countDocuments({}),
      WhyChooseModel.countDocuments({}),
      OfferModel.countDocuments({}),
      StoryModel.countDocuments({}),
      TrustModel.countDocuments({}),
      PlanModel.countDocuments({}),
      FooterBannerModel.countDocuments({}),// Total Courses
      PricingModel.countDocuments({}),   // Total Pricing Plans (Aapka Schema)
      ManagementModel.countDocuments({}),// Total Management Members (Aapka Schema)
      BlogModel.countDocuments({}),           // Total Blogs
      TestImonialModel.countDocuments({}),    // Total Testimonials
      ContactTextModel.countDocuments({}),
      AboutModel.countDocuments({})
      // MathTestModel.countDocuments({})
      //   TutoringModel.countDocuments({})
      //   ChapterModel.countDocuments({})
      //   CompetitionModel.countDocuments({})
      //   KangarooModel.countDocuments({})
      //   ScienceModel.countDocuments({})

      //  // EnglishCount,


      //   LanguageModel.countDocuments({})
      //   AboutCoreElaModel.countDocuments({})
      //   AboutElaModel.countDocuments({})
      //   AboutIseeModel.countDocuments({})
      //   RegistrationModel.countDocuments({})       // Total Contacts
    ]);
    const totalHomeItems = BannerCount + WhyChooseCount + OfferCount + StoryCount + TrustCount + PlanCount + FooterBannerCount;
    // Response bhejein
    res.status(200).json({
      success: true,
      data: {
        homeTotal: totalHomeItems,
        //   BannerCount,
        // WhyChooseCount,
        // OfferCount,
        // StoryCount,
        // StoryCount,
        // TrustCount,
        // PlanCount,
        // FooterBannerCount,


        aboutCount,     // Frontend par data.userCount milega
        // courseCount,
        pricingCount,
        managementCount,
        blogCount,
        testimonialCount,
        contactCount
      }
    });


  } catch (error) {
    console.error("Dashboard Count Error:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching dashboard counts",
      error: error.message
    });
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
    const { className, fees, feesPerHour, planName, off } = req.body;

    console.log(req?.body)
    if (!className) return res.status(400).json({ success: false, message: "All field is required" });
    if (!req.file) return res.status(400).json({ success: false, message: "All field is required" });
    const parsedFees = JSON.parse(fees);
    const imagePath = `public/uploads/${req.file.filename}`
    const pricing = new PricingModel({
      className,
      fees: parsedFees,
      image: imagePath,
      feesPerHour, off, planName
    });
    await pricing.save();
    res.status(201).json({ message: "pricing added successfully", data: pricing });
  } catch (error) {
    next(error)
  }
};

export const editPricing = async (req, res, next) => {
  try {

    const { className, fees, feesPerHour, off, planName, _id } = req.body;

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

    pricingData.planName = planName || pricingData.planName;
    if (fees) {
      try {
        pricingData.fees = JSON.parse(fees);
      } catch {
        return res.status(400).json({ success: false, message: "Invalid fees format" });
      }
    }

    if (className)
      pricingData.className = className || pricingData.className;
    if (feesPerHour)
      pricingData.feesPerHour = feesPerHour || pricingData.feesPerHour;

    pricingData.off = off

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
    const { title, description, type } = req.body;

    if (!title || !description) return res.status(400).json({ success: false, message: "All field is required" });
    let imagePath = null;
    let videoPath = null;


    if (type === "image") {
      if (!req.files?.image) {
        return res.status(400).json({
          success: false,
          message: "Image is required when type is image",
        });
      }
      imagePath = `public/uploads/${req.files.image[0].filename}`;
    }

    if (type === "video") {
      if (!req.files?.video) {
        return res.status(400).json({
          success: false,
          message: "Video is required when type is video",
        });
      }
      videoPath = `public/uploads/${req.files.video[0].filename}`;
    }


    const blog = new BlogModel({
      title,
      description,
      type,
      image: imagePath,
      video: videoPath
    });
    await blog.save();
    res.status(201).json({ message: "blog added successfully", data: blog });
  } catch (error) {
    next(error)
  }
};

export const editBlog = async (req, res, next) => {
  try {
    const { title, description, type, _id } = req.body;

    const blogData = await BlogModel.findById(_id);
    if (!blogData) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }
    if (req.files?.image?.length > 0) {
      const newImage = `public/uploads/${req.files.image[0].filename}`;

      if (blogData.image) {
        const oldPath = path.join("public", blogData.image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }

      blogData.image = newImage;
      blogData.video = null;
    }

    if (req.files?.video?.length > 0) {
      const newVideo = `public/uploads/${req.files.video[0].filename}`;

      if (blogData.video) {
        const oldPath = path.join("public", blogData.video);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }

      blogData.video = newVideo;
      blogData.image = null;
    }

    // Update fields
    blogData.type = type || blogData.type;
    blogData.title = title || blogData.title;
    blogData.description = description || blogData.description;

    await blogData.save();

    return res.status(200).json({
      success: true,
      message: "Blog updated successfully",
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
    if (blogData.image || blogData.video) {
      const name = blogData.image || blogData.video;
      const imagePath = path.resolve(name);
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

    if (!title || !purpose || !testStructure) {
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
    const { description, title, condition, competition, whyTake } = req.body;
    const competitionData = await CompetitionModel.findOneAndUpdate(
      {},
      {
        description,
        title,
        condition,
        competition, whyTake
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
    const { testPrepDescription, testStructureDescription } = req.body;

    const kangarooData = await KangarooModel.findOneAndUpdate(
      {},
      {
        testPrepDescription,
        testStructureDescription,
      },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true
      }
    );

    return res.status(200).json({
      success: true,
      message: "Kangaroo test data saved successfully",
      data: kangarooData,
    });

  } catch (error) {
    console.error("Error saving Kangaroo test:", error);
    next(error);
  }
};


export const postKangaroo = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    if (!req.file) return res.status(400).json({ success: false, message: "All field is required" });

    const imagePath = `public/uploads/${req.file.filename}`
    const newData = new KangarooDetailModel({
      image: imagePath,
      title,
      description: JSON.parse(description)
    });

    await newData.save();

    res.status(201).json({
      success: true,
      message: "Kangaroo detail created successfully",
      data: newData,
    });
  } catch (err) {
    next(err);
  }
};

export const editKangaroo = async (req, res, next) => {
  try {
    const { id, title, description } = req.body;

    const item = await KangarooDetailModel.findById(id);
    if (!item) {
      return res.status(404).json({ success: false, message: "Data not found" });
    }

    if (req.file) {
      if (item.image) {
        const oldPath = path.join("public", item.image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      item.image = `public/uploads/${req.file.filename}`;
    }

    item.title = title;
    item.description = JSON.parse(description)
    await item.save();

    res.status(200).json({
      success: true,
      message: "Kangaroo detail updated successfully",
      data: item,
    });

  } catch (err) {
    next(err);
  }
};

export const deleteKangaroo = async (req, res, next) => {
  try {
    const { id } = req.params;

    const item = await KangarooDetailModel.findById(id);
    if (!item) {
      return res.status(404).json({ success: false, message: "Data not found" });
    }

    await KangarooDetailModel.findByIdAndDelete(id);
    if (item.image) {
      const imagePath = path.resolve(item.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }
    res.status(200).json({
      success: true,
      message: "Kangaroo detail deleted successfully",
    });

  } catch (err) {
    next(err);
  }
};


export const upsertScience = async (req, res, next) => {
  try {
    const { description, tutorDescription } = req.body;

    const scienceData = await ScienceModel.findOneAndUpdate(
      {},
      {
        description,
        tutorDescription,
      },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true
      }
    );

    return res.status(200).json({
      success: true,
      message: "science data saved successfully",
      data: scienceData,
    });

  } catch (error) {
    console.error("Error saving science:", error);
    next(error);
  }
};


export const postScience = async (req, res, next) => {
  try {
    const { title, description, heading } = req.body;
    if (!req.file) return res.status(400).json({ success: false, message: "All field is required" });

    const imagePath = `public/uploads/${req.file.filename}`
    const newData = new ScienceDetailModel({
      image: imagePath,
      title,
      description, heading
    });

    await newData.save();

    res.status(201).json({
      success: true,
      message: "science detail created successfully",
      data: newData,
    });
  } catch (err) {
    next(err);
  }
};

export const editScience = async (req, res, next) => {
  try {
    const { id, title, description, heading } = req.body;

    const item = await ScienceDetailModel.findById(id);
    if (!item) {
      return res.status(404).json({ success: false, message: "Data not found" });
    }

    if (req.file) {
      if (item.image) {
        const oldPath = path.join("public", item.image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      item.image = `public/uploads/${req.file.filename}`;
    }

    item.title = title || item?.title
    item.description = description || item.description
    item.heading = heading || item.heading
    await item.save();

    res.status(200).json({
      success: true,
      message: "science detail updated successfully",
      data: item,
    });

  } catch (err) {
    next(err);
  }
};

export const deleteScienceDetail = async (req, res, next) => {
  try {
    const { id } = req.params;

    const item = await ScienceDetailModel.findById(id);
    if (!item) {
      return res.status(404).json({ success: false, message: "Data not found" });
    }

    await ScienceDetailModel.findByIdAndDelete(id);
    if (item.image) {
      const imagePath = path.resolve(item.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }
    res.status(200).json({
      success: true,
      message: "science detail deleted successfully",
    });

  } catch (err) {
    next(err);
  }
};


export const upsertCoreEla = async (req, res, next) => {
  try {
    const { coreDescription, coverDescription } = req.body;

    const aboutCoreElaData = await AboutCoreElaModel.findOneAndUpdate(
      {},
      {
        coreDescription, coverDescription
      },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true
      }
    );

    return res.status(200).json({
      success: true,
      message: "aboutCoreEla data saved successfully",
      data: aboutCoreElaData,
    });

  } catch (error) {
    console.error("Error saving science:", error);
    next(error);
  }
};


export const postCoreEla = async (req, res, next) => {
  try {
    const { title } = req.body;
    if (!req.file) return res.status(400).json({ success: false, message: "All field is required" });

    const imagePath = `public/uploads/${req.file.filename}`
    const newData = new AboutElaDetailModel({
      image: imagePath,
      title,
    });

    await newData.save();

    res.status(201).json({
      success: true,
      message: "about Ela  detail created successfully",
      data: newData,
    });
  } catch (err) {
    next(err);
  }
};

export const editCoreEla = async (req, res, next) => {
  try {
    const { id, title } = req.body;

    const item = await AboutElaDetailModel.findById(id);
    if (!item) {
      return res.status(404).json({ success: false, message: "Data not found" });
    }

    if (req.file) {
      if (item.image) {
        const oldPath = path.join("public", item.image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      item.image = `public/uploads/${req.file.filename}`;
    }

    item.title = title || item?.title
    await item.save();

    res.status(200).json({
      success: true,
      message: "about Ela  detail detail updated successfully",
      data: item,
    });

  } catch (err) {
    next(err);
  }
};

export const deleteCoreElaDetail = async (req, res, next) => {
  try {
    const { id } = req.params;

    const item = await AboutElaDetailModel.findById(id);
    if (!item) {
      return res.status(404).json({ success: false, message: "Data not found" });
    }

    await AboutElaDetailModel.findByIdAndDelete(id);
    if (item.image) {
      const imagePath = path.resolve(item.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }
    res.status(200).json({
      success: true,
      message: "about ela detail deleted successfully",
    });

  } catch (err) {
    next(err);
  }
};


export const upsertLanguage = async (req, res, next) => {
  try {
    const { heading, description, property1, property2, property3, property4, property5 } = req.body;
    let imagePath;
    if (req.file)
      imagePath = `public/uploads/${req.file.filename}`;

    const existingLanguage = await LanguageModel.findOne();

    if (existingLanguage) {
      if (imagePath) {
        if (existingLanguage.image && fs.existsSync(path.join(process.cwd(), existingLanguage.image))) {
          fs.unlinkSync(path.join(process.cwd(), existingLanguage.image));
        }
        existingLanguage.image = imagePath;
      }

      existingLanguage.heading = heading;
      existingLanguage.description = description;
      existingLanguage.property1 = property1;
      existingLanguage.property2 = property2;
      existingLanguage.property3 = property3;
      existingLanguage.property4 = property4;
      existingLanguage.property5 = property5;


      await existingLanguage.save();
      return res.status(200).json({
        success: true,
        message: "language updated successfully",
        data: existingLanguage,
      });
    }

    if (!req.file) {
      return res.status(400).json({ message: "image is required for creating new data" });
    }

    const newLanguage = await LanguageModel.create({
      description, heading,
      image: imagePath, property1, property2, property3, property4, property5
    });
    await newLanguage.save();

    res.status(201).json({
      success: true,
      message: "language created successfully",
      data: newLanguage,
    });


  } catch (err) {
    next(err);
  }
};


export const postTestImonial = async (req, res, next) => {
  try {
    const { title, description, address } = req.body;
    if (!req.file) return res.status(400).json({ success: false, message: "All field is required" });

    const imagePath = `public/uploads/${req.file.filename}`
    const newData = new TestImonialModel({
      image: imagePath,
      title, description, address
    });

    await newData.save();

    res.status(201).json({
      success: true,
      message: "testimonial detail created successfully",
      data: newData,
    });
  } catch (err) {
    next(err);
  }
};


export const postMethodology = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    if (!req.file) return res.status(400).json({ success: false, message: "All field is required" });

    const imagePath = `public/uploads/${req.file.filename}`
    const newData = new MethodologyModel({
      image: imagePath,
      title, description
    });

    await newData.save();

    res.status(201).json({
      success: true,
      message: "methodology  detail created successfully",
      data: newData,
    });
  } catch (err) {
    next(err);
  }
};

export const editTestImonial = async (req, res, next) => {
  try {
    const { _id, title, description, address } = req.body;

    const item = await TestImonialModel.findById(_id);
    if (!item) {
      return res.status(404).json({ success: false, message: "Data not found" });
    }

    if (req.file) {
      if (item.image) {
        const oldPath = path.join("public", item.image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      item.image = `public/uploads/${req.file.filename}`;
    }

    item.title = title || item?.title
    item.description = description || item?.description
    item.address = address || item?.address
    await item.save();
    res.status(200).json({
      success: true,
      message: "testimonial detail updated successfully",
      data: item,
    });

  } catch (err) {
    next(err);
  }
};

export const editMethodology = async (req, res, next) => {
  try {

    const { description, title, _id } = req.body;

    const methodologyData = await MethodologyModel.findById(_id);
    if (!methodologyData)
      return res.status(404).json({ success: false, message: "methodology data data not found" });

    if (req.file) {
      if (methodologyData.image) {
        const oldPath = path.join("public", methodologyData.image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      methodologyData.image = `public/uploads/${req.file.filename}`;
    }

    methodologyData.description = description || methodologyData.description;
    methodologyData.title = title || methodologyData.title;

    await methodologyData.save();

    res.status(200).json({
      success: true,
      message: "methodologyData updated successfully",
      data: methodologyData,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTestImonialDetail = async (req, res, next) => {
  try {
    const { id } = req.params;

    const item = await TestImonialModel.findById(id);
    if (!item) {
      return res.status(404).json({ success: false, message: "Data not found" });
    }

    await TestImonialModel.findByIdAndDelete(id);
    if (item.image) {
      const imagePath = path.resolve(item.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }
    res.status(200).json({
      success: true,
      message: "testimonial deleted successfully",
    });

  } catch (err) {
    next(err);
  }
};


export const deleteMethodology = async (req, res, next) => {
  try {
    const { id } = req.params;

    const item = await MethodologyModel.findById(id);
    if (!item) {
      return res.status(404).json({ success: false, message: "Data not found" });
    }

    await MethodologyModel.findByIdAndDelete(id);
    if (item.image) {
      const imagePath = path.resolve(item.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }
    res.status(200).json({
      success: true,
      message: "methodolgy deleted successfully",
    });

  } catch (err) {
    next(err);
  }
};

export const upsertAbout = async (req, res, next) => {
  try {
    const {
      description,
      whyUsDescription,
      howDiffrentDescription,
      safetyDescription,
      tutorDescription,
      howDiffrentHeader
    } = req.body;

    const toArray = (value) => {
      try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) ? parsed : [parsed];
      } catch {
        return [value];
      }
    };

    let imagePath;
    if (req.file) {
      imagePath = `public/uploads/${req.file.filename}`;
    }

    let existingAbout = await AboutModel.findOne();

    // ---------- UPDATE ----------
    if (existingAbout) {
      // Replace old image
      if (imagePath) {
        if (
          existingAbout.image &&
          fs.existsSync(path.join(process.cwd(), existingAbout.image))
        ) {
          fs.unlinkSync(path.join(process.cwd(), existingAbout.image));
        }
        existingAbout.image = imagePath;
      }

      existingAbout.description = toArray(description);
      existingAbout.whyUsDescription = toArray(whyUsDescription);
      existingAbout.howDiffrentDescription = toArray(howDiffrentDescription);
      existingAbout.safetyDescription = toArray(safetyDescription);
      existingAbout.tutorDescription = tutorDescription;
      existingAbout.howDiffrentHeader = howDiffrentHeader;

      await existingAbout.save();

      return res.status(200).json({
        success: true,
        message: "About updated successfully",
        data: existingAbout,
      });
    }

    // ---------- CREATE ----------
    if (!req.file) {
      return res.status(400).json({
        message: "Image is required for creating new About data",
      });
    }

    const newAbout = await AboutModel.create({
      image: imagePath,
      description: toArray(description),
      whyUsDescription: toArray(whyUsDescription),
      howDiffrentDescription: toArray(howDiffrentDescription),
      safetyDescription: toArray(safetyDescription),
      tutorDescription,
       howDiffrentHeader, 
    });

    return res.status(201).json({
      success: true,
      message: "About created successfully",
      data: newAbout,
    });
  } catch (err) {
    next(err);
  }
};


export const deleteFaqDetail = async (req, res, next) => {
  try {
    const { id } = req.params;

    const item = await FaqModel.findById(id);
    if (!item) {
      return res.status(404).json({ success: false, message: "Data not found" });
    }
    await FaqModel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "faq deleted successfully",
    });

  } catch (err) {
    next(err);
  }
};

export const postFaq = async (req, res, next) => {
  try {
    const { title, description, points } = req.body;

    const newData = new FaqModel({
      title, description, points
    });
    await newData.save();
    res.status(201).json({
      success: true,
      message: "faq detail created successfully",
      data: newData,
    });
  } catch (err) {
    next(err);
  }
};

export const addContactText = async (req, res, next) => {
  try {
    const { description, mobile, email, address } = req.body;

    if (!description || !mobile || !email || !address) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const existing = await ContactTextModel.findOne();

    let result;

    if (existing) {
      existing.description = description;
      existing.mobile = mobile;
      existing.email = email;
      existing.address = address;
      result = await existing.save();
    } else {
      const contactText = new ContactTextModel({
        description,
        mobile, address,
        email,
      });
      result = await contactText.save();
    }

    res.status(201).json({
      success: true,
      message: "contact text saved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const editFaq = async (req, res, next) => {
  try {
    const { _id, title, description, points } = req.body;

    const item = await FaqModel.findById(_id);
    if (!item) {
      return res.status(404).json({ success: false, message: "Data not found" });
    }

    item.title = title || item?.title
    item.description = description || item?.description
    item.points = points || item?.points
    await item.save();
    res.status(200).json({
      success: true,
      message: "faq detail updated successfully",
      data: item,
    });

  } catch (err) {
    next(err);
  }
};




// GET ALL TERMS
export const getTerms = async (req, res) => {
  try {
    const terms = await TermsModel.find().sort({ createdAt: 1 });
    res.status(200).json({ success: true, data: terms });
  } catch (error) {
    console.error("Error in getTerms:", error); // Console log error for debugging
    res.status(500).json({ success: false, message: error.message });
  }
};

// CREATE NEW TERM SECTION
export const createTerm = async (req, res) => {
  try {
    const { title, description, points } = req.body;

    // Validation check
    if (!title) {
      return res.status(400).json({ success: false, message: "Title is required" });
    }

    const newTerm = new TermsModel({
      title,
      description,
      points
    });

    await newTerm.save();
    res.status(201).json({ success: true, data: newTerm });
  } catch (error) {
    console.error("Error in createTerm:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE TERM SECTION
export const updateTerm = async (req, res) => {
  try {
    const { _id, title, description, points } = req.body;

    const updatedTerm = await TermsModel.findByIdAndUpdate(
      _id,
      { title, description, points },
      { new: true }
    );

    res.status(200).json({ success: true, data: updatedTerm });
  } catch (error) {
    console.error("Error in updateTerm:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE TERM SECTION
export const deleteTerm = async (req, res) => {
  try {
    await TermsModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    console.error("Error in deleteTerm:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};


export const getMembers = async (req, res) => {
  try {
    const members = await ManagementModel.find().sort({ order: 1, createdAt: 1 });
    res.status(200).json({ success: true, data: members });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ADD MEMBER
export const addMember = async (req, res) => {
  try {
    const { name, role, description, order } = req.body;

    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image is required" });
    }

    // ✅ CHANGE: Sirf path save kar rahe hain (e.g., "uploads/image.png")
    // .replace(/\\/g, "/") Windows ke backslashes ko forward slash me badalne ke liye hai
    const imagePath = req.file.path.replace(/\\/g, "/");

    const newMember = new ManagementModel({
      name,
      role,
      description,
      image: imagePath, // Ab DB me relative path save hoga
      order: order || 0
    });

    await newMember.save();
    res.status(201).json({ success: true, data: newMember });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE MEMBER
export const updateMember = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, role, description, order } = req.body;

    const member = await ManagementModel.findById(id);
    if (!member) return res.status(404).json({ success: false, message: "Member not found" });

    let updatedData = { name, role, description, order };

    if (req.file) {
      // ✅ CHANGE: New image path
      updatedData.image = req.file.path.replace(/\\/g, "/");
    }

    const updatedMember = await ManagementModel.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );

    res.status(200).json({ success: true, data: updatedMember });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE MEMBER
export const deleteMember = async (req, res) => {
  try {
    await ManagementModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};




// 1. GET API - Data Fetch Karne Ke Liye
export const getSatData = async (req, res) => {
  try {
    // Database se pehla document dhundo
    const data = await SatTestModel.findOne();

    // Agar data nahi hai, to null return karo (Frontend empty form dikhayega)
    res.status(200).json({
      success: true,
      data: data || null,
    });
  } catch (error) {
    console.error("Error fetching SAT data:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};
export const getPSatData = async (req, res) => {
  try {
    // Database se pehla document dhundo
    const data = await PsatTestModel.findOne();

    // Agar data nahi hai, to null return karo (Frontend empty form dikhayega)
    res.status(200).json({
      success: true,
      data: data || null,
    });
  } catch (error) {
    console.error("Error fetching SAT data:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

// 2. POST API - Create ya Update (Edit) Karne Ke Liye
export const saveSatData = async (req, res) => {
  try {
    // findOneAndUpdate data ko update karega. 
    // "upsert: true" ka matlab: Agar data nahi hai to naya bana do.
    // "new: true" ka matlab: Updated data wapas bhejo.

    const updatedData = await SatTestModel.findOneAndUpdate(
      {}, // Empty filter kyunki humein ek hi document chahiye
      req.body,
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    res.status(200).json({
      success: true,
      message: "SAT Page Data Saved Successfully",
      data: updatedData,
    });
  } catch (error) {
    console.error("Error saving SAT data:", error);
    res.status(500).json({ message: "Save Failed", error });
  }
};
export const savePSatData = async (req, res) => {
  try {
    // findOneAndUpdate data ko update karega. 
    // "upsert: true" ka matlab: Agar data nahi hai to naya bana do.
    // "new: true" ka matlab: Updated data wapas bhejo.

    const updatedData = await PsatTestModel.findOneAndUpdate(
      {}, // Empty filter kyunki humein ek hi document chahiye
      req.body,
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    res.status(200).json({
      success: true,
      message: "SAT Page Data Saved Successfully",
      data: updatedData,
    });
  } catch (error) {
    console.error("Error saving SAT data:", error);
    res.status(500).json({ message: "Save Failed", error });
  }
};

// 3. DELETE API - Poora Data Delete Karne Ke Liye
export const deleteSatData = async (req, res) => {
  try {
    // Collection se sab kuch uda do
    await SatTestModel.deleteMany({});

    res.status(200).json({
      success: true,
      message: "All SAT Page Data Deleted Successfully",
    });
  } catch (error) {
    console.error("Error deleting SAT data:", error);
    res.status(500).json({ message: "Delete Failed", error });
  }
};
export const deletePSatData = async (req, res) => {
  try {
    // Collection se sab kuch uda do
    await PsatTestModel.deleteMany({});

    res.status(200).json({
      success: true,
      message: "All SAT Page Data Deleted Successfully",
    });
  } catch (error) {
    console.error("Error deleting SAT data:", error);
    res.status(500).json({ message: "Delete Failed", error });
  }
};



// --- 1. GET DATA (Read) ---
export const getSsatData = async (req, res) => {
  try {
    const data = await SsatTest.findOne();
    // Data bhej do, agar nahi hai to null
    res.status(200).json({ success: true, data: data || null });
  } catch (error) {
    console.error("Error fetching SSAT Data:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

// --- 2. SAVE / UPDATE DATA (Create or Edit) ---
export const saveSsatData = async (req, res) => {
  try {
    // findOneAndUpdate: Agar data hai to update, nahi to naya create (upsert: true)
    const updatedData = await SsatTest.findOneAndUpdate(
      {}, // Empty filter (single page)
      req.body, // Frontend se aaya naya data
      {
        new: true, // Return updated doc
        upsert: true, // Create if not exists
        setDefaultsOnInsert: true
      }
    );

    res.status(200).json({
      success: true,
      message: "SSAT Page Updated Successfully",
      data: updatedData,
    });
  } catch (error) {
    console.error("Error saving SSAT Data:", error);
    res.status(500).json({ message: "Save Failed", error });
  }
};

// --- 3. DELETE DATA ---
export const deleteSsatData = async (req, res) => {
  try {
    await SsatTest.deleteMany({});
    res.status(200).json({
      success: true,
      message: "All SSAT Data Deleted Successfully"
    });
  } catch (error) {
    console.error("Error deleting SSAT Data:", error);
    res.status(500).json({ message: "Delete Failed", error });
  }
};

export const getShsatData = async (req, res) => {
  try {
    const data = await ShsatTest.findOne();
    res.status(200).json({ success: true, data: data || null });
  } catch (error) {
    console.error("Error fetching SHSAT data:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

// --- SAVE / UPDATE DATA (Upsert Logic) ---
export const saveShsatData = async (req, res) => {
  try {
    // Agar data hai to update karo, nahi to naya banao
    const updatedData = await ShsatTest.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.status(200).json({
      success: true,
      message: "SHSAT Page Updated Successfully",
      data: updatedData
    });
  } catch (error) {
    console.error("Error saving SHSAT data:", error);
    res.status(500).json({ message: "Save Failed", error });
  }
};

// --- DELETE DATA ---
export const deleteShsatData = async (req, res) => {
  try {
    await ShsatTest.deleteMany({});
    res.status(200).json({
      success: true,
      message: "All SHSAT Data Deleted Successfully"
    });
  } catch (error) {
    console.error("Error deleting SHSAT data:", error);
    res.status(500).json({ message: "Delete Failed", error });
  }
};


export const getIseeData = async (req, res) => {
  try {
    const data = await IseeTest.findOne();
    res.status(200).json({ success: true, data: data || null });
  } catch (error) {
    console.error("Error fetching ISEE data:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

// --- SAVE / UPDATE DATA ---
export const saveIseeData = async (req, res) => {
  try {
    const updatedData = await IseeTest.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.status(200).json({
      success: true,
      message: "ISEE Page Updated Successfully",
      data: updatedData
    });
  } catch (error) {
    console.error("Error saving ISEE data:", error);
    res.status(500).json({ message: "Save Failed", error });
  }
};

// --- DELETE DATA ---
export const deleteIseeData = async (req, res) => {
  try {
    await IseeTest.deleteMany({});
    res.status(200).json({
      success: true,
      message: "All ISEE Data Deleted Successfully"
    });
  } catch (error) {
    console.error("Error deleting ISEE data:", error);
    res.status(500).json({ message: "Delete Failed", error });
  }
};


export const getElaData = async (req, res) => {
  try {
    const data = await ElaTest.findOne();
    res.status(200).json({ success: true, data: data || null });
  } catch (error) {
    console.error("Error fetching ELA data:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

// --- SAVE / UPDATE DATA ---
export const saveElaData = async (req, res) => {
  try {
    const updatedData = await ElaTest.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.status(200).json({
      success: true,
      message: "ELA Page Updated Successfully",
      data: updatedData
    });
  } catch (error) {
    console.error("Error saving ELA data:", error);
    res.status(500).json({ message: "Save Failed", error });
  }
};

// --- DELETE DATA ---
export const deleteElaData = async (req, res) => {
  try {
    await ElaTest.deleteMany({});
    res.status(200).json({
      success: true,
      message: "All ELA Data Deleted Successfully"
    });
  } catch (error) {
    console.error("Error deleting ELA data:", error);
    res.status(500).json({ message: "Delete Failed", error });
  }
};

export const getScatData = async (req, res) => {
  try {
    const data = await ScatTest.findOne();
    res.status(200).json({ success: true, data: data || null });
  } catch (error) {
    console.error("Error fetching SCAT data:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

// --- SAVE / UPDATE DATA (Upsert) ---
export const saveScatData = async (req, res) => {
  try {
    const updatedData = await ScatTest.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.status(200).json({
      success: true,
      message: "SCAT Page Updated Successfully",
      data: updatedData
    });
  } catch (error) {
    console.error("Error saving SCAT data:", error);
    res.status(500).json({ message: "Save Failed", error });
  }
};

// --- DELETE DATA ---
export const deleteScatData = async (req, res) => {
  try {
    await ScatTest.deleteMany({});
    res.status(200).json({
      success: true,
      message: "All SCAT Data Deleted Successfully"
    });
  } catch (error) {
    console.error("Error deleting SCAT data:", error);
    res.status(500).json({ message: "Delete Failed", error });
  }
};

export const getAmcData = async (req, res) => {
  try {
    const data = await AmcTest.findOne();
    res.status(200).json({ success: true, data: data || null });
  } catch (error) {
    console.error("Error fetching AMC data:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

// --- SAVE / UPDATE DATA (Upsert) ---
export const saveAmcData = async (req, res) => {
  try {
    const updatedData = await AmcTest.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.status(200).json({
      success: true,
      message: "AMC Page Updated Successfully",
      data: updatedData
    });
  } catch (error) {
    console.error("Error saving AMC data:", error);
    res.status(500).json({ message: "Save Failed", error });
  }
};

// --- DELETE DATA ---
export const deleteAmcData = async (req, res) => {
  try {
    await AmcTest.deleteMany({});
    res.status(200).json({
      success: true,
      message: "All AMC Data Deleted Successfully"
    });
  } catch (error) {
    console.error("Error deleting AMC data:", error);
    res.status(500).json({ message: "Delete Failed", error });
  }
};

export const getMathKangarooData = async (req, res) => {
  try {
    const data = await MathKangarooTest.findOne();
    res.status(200).json({ success: true, data: data || null });
  } catch (error) {
    console.error("Error fetching Math Kangaroo data:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

// --- SAVE / UPDATE DATA (Upsert) ---
export const saveMathKangarooData = async (req, res) => {
  try {
    const updatedData = await MathKangarooTest.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.status(200).json({
      success: true,
      message: "Math Kangaroo Page Updated Successfully",
      data: updatedData
    });
  } catch (error) {
    console.error("Error saving Math Kangaroo data:", error);
    res.status(500).json({ message: "Save Failed", error });
  }
};

// --- DELETE DATA ---
export const deleteMathKangarooData = async (req, res) => {
  try {
    await MathKangarooTest.deleteMany({});
    res.status(200).json({
      success: true,
      message: "All Math Kangaroo Data Deleted Successfully"
    });
  } catch (error) {
    console.error("Error deleting Math Kangaroo data:", error);
    res.status(500).json({ message: "Delete Failed", error });
  }
};

export const getActData = async (req, res) => {
  try {
    const data = await ActTest.findOne();
    res.status(200).json({ success: true, data: data || null });
  } catch (error) {
    console.error("Error fetching ACT data:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

// --- SAVE / UPDATE DATA (Upsert) ---
export const saveActData = async (req, res) => {
  try {
    const updatedData = await ActTest.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.status(200).json({
      success: true,
      message: "ACT Page Updated Successfully",
      data: updatedData
    });
  } catch (error) {
    console.error("Error saving ACT data:", error);
    res.status(500).json({ message: "Save Failed", error });
  }
};

// --- DELETE DATA ---
export const deleteActData = async (req, res) => {
  try {
    await ActTest.deleteMany({});
    res.status(200).json({
      success: true,
      message: "All ACT Data Deleted Successfully"
    });
  } catch (error) {
    console.error("Error deleting ACT data:", error);
    res.status(500).json({ message: "Delete Failed", error });
  }
};

export const getCogatData = async (req, res) => {
  try {
    const data = await CogatTest.findOne();
    res.status(200).json({ success: true, data: data || null });
  } catch (error) {
    console.error("Error fetching CogAT data:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

// --- SAVE / UPDATE DATA (Upsert) ---
export const saveCogatData = async (req, res) => {
  try {
    const updatedData = await CogatTest.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.status(200).json({
      success: true,
      message: "CogAT Page Updated Successfully",
      data: updatedData
    });
  } catch (error) {
    console.error("Error saving CogAT data:", error);
    res.status(500).json({ message: "Save Failed", error });
  }
};

// --- DELETE DATA ---
export const deleteCogatData = async (req, res) => {
  try {
    await CogatTest.deleteMany({});
    res.status(200).json({
      success: true,
      message: "All CogAT Data Deleted Successfully"
    });
  } catch (error) {
    console.error("Error deleting CogAT data:", error);
    res.status(500).json({ message: "Delete Failed", error });
  }
};
export const getSbacData = async (req, res) => {
  try {
    const data = await SbacTest.findOne();
    res.status(200).json({ success: true, data: data || null });
  } catch (error) {
    console.error("Error fetching SBAC data:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

// --- SAVE / UPDATE DATA (Upsert) ---
export const saveSbacData = async (req, res) => {
  try {
    const updatedData = await SbacTest.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.status(200).json({
      success: true,
      message: "SBAC Page Updated Successfully",
      data: updatedData
    });
  } catch (error) {
    console.error("Error saving SBAC data:", error);
    res.status(500).json({ message: "Save Failed", error });
  }
};

// --- DELETE DATA ---
export const deleteSbacData = async (req, res) => {
  try {
    await SbacTest.deleteMany({});
    res.status(200).json({
      success: true,
      message: "All SBAC Data Deleted Successfully"
    });
  } catch (error) {
    console.error("Error deleting SBAC data:", error);
    res.status(500).json({ message: "Delete Failed", error });
  }
};
export const getAccuplacerData = async (req, res) => {
  try {
    const data = await AccuplacerTest.findOne();
    res.status(200).json({ success: true, data: data || null });
  } catch (error) {
    console.error("Error fetching Accuplacer data:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

// --- SAVE / UPDATE DATA (Upsert) ---
export const saveAccuplacerData = async (req, res) => {
  try {
    const updatedData = await AccuplacerTest.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.status(200).json({
      success: true,
      message: "Accuplacer Page Updated Successfully",
      data: updatedData
    });
  } catch (error) {
    console.error("Error saving Accuplacer data:", error);
    res.status(500).json({ message: "Save Failed", error });
  }
};

// --- DELETE DATA ---
export const deleteAccuplacerData = async (req, res) => {
  try {
    await AccuplacerTest.deleteMany({});
    res.status(200).json({
      success: true,
      message: "All Accuplacer Data Deleted Successfully"
    });
  } catch (error) {
    console.error("Error deleting Accuplacer data:", error);
    res.status(500).json({ message: "Delete Failed", error });
  }
};
export const getStbData = async (req, res) => {
  try {
    const data = await StbTest.findOne();
    res.status(200).json({ success: true, data: data || null });
  } catch (error) {
    console.error("Error fetching STB data:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

// --- SAVE / UPDATE DATA (Upsert) ---
export const saveStbData = async (req, res) => {
  try {
    const updatedData = await StbTest.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.status(200).json({
      success: true,
      message: "STB Page Updated Successfully",
      data: updatedData
    });
  } catch (error) {
    console.error("Error saving STB data:", error);
    res.status(500).json({ message: "Save Failed", error });
  }
};

// --- DELETE DATA ---
export const deleteStbData = async (req, res) => {
  try {
    await StbTest.deleteMany({});
    res.status(200).json({
      success: true,
      message: "All STB Data Deleted Successfully"
    });
  } catch (error) {
    console.error("Error deleting STB data:", error);
    res.status(500).json({ message: "Delete Failed", error });
  }
};

export const postK12 = async (req, res, next) => {
  try {
    const {
      title,
      description,

      title1,
      description1,

      title2,
      description2,

      title3,
      description3
    } = req.body;

    // files from multer
    const files = req.files;

    const image = files?.image ? `public/uploads/${files.image[0].filename}` : null;
    const image1 = files?.image1 ? `public/uploads/${files.image1[0].filename}` : null;
    const image2 = files?.image2 ? `public/uploads/${files.image2[0].filename}` : null;
    const image3 = files?.image3 ? `public/uploads/${files.image3[0].filename}` : null;

    // find existing document (you want to update single document)
    const existing = await K12ServiceModel.findOne();

    if (existing) {
      // delete old images if new one uploaded
      if (image && existing.image && fs.existsSync(path.join(process.cwd(), existing.image))) {
        fs.unlinkSync(path.join(process.cwd(), existing.image));
      }
      if (image1 && existing.image1 && fs.existsSync(path.join(process.cwd(), existing.image1))) {
        fs.unlinkSync(path.join(process.cwd(), existing.image1));
      }
      if (image2 && existing.image2 && fs.existsSync(path.join(process.cwd(), existing.image2))) {
        fs.unlinkSync(path.join(process.cwd(), existing.image2));
      }
      if (image3 && existing.image3 && fs.existsSync(path.join(process.cwd(), existing.image3))) {
        fs.unlinkSync(path.join(process.cwd(), existing.image3));
      }

      // update fields
      if (image) existing.image = image;
      if (image1) existing.image1 = image1;
      if (image2) existing.image2 = image2;
      if (image3) existing.image3 = image3;

      existing.title = title;
      existing.description = description;

      existing.title1 = title1;
      existing.description1 = Array.isArray(description1) ? JSON.parse(description1) : JSON.parse([description1]);

      existing.title2 = title2;
      existing.description2 = Array.isArray(description2) ? JSON.parse(description2) : JSON.parse([description2]);

      existing.title3 = title3;
      existing.description3 = Array.isArray(description3) ? JSON.parse(description3) : JSON.parse([description3]);

      await existing.save();

      return res.status(200).json({
        success: true,
        message: "K-12 service updated successfully",
        data: existing
      });
    }

    // Creating new record
    if (!image || !image1 || !image2 || !image3) {
      return res.status(400).json({
        success: false,
        message: "All 4 images are required while creating new data",
      });
    }

    const newData = await K12ServiceModel.create({
      image,
      title,
      description,

      image1,
      title1,
      description1: Array.isArray(description1) ? description1 : [description1],

      image2,
      title2,
      description2: Array.isArray(description2) ? description2 : [description2],

      image3,
      title3,
      description3: Array.isArray(description3) ? description3 : [description3],
    });

    return res.status(201).json({
      success: true,
      message: "K-12 service created successfully",
      data: newData
    });

  } catch (err) {
    next(err);
  }
};
