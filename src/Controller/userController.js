import AboutIseeModel from "../Models/aboutIseeModel.js";
import BannerModel from "../Models/bannerModel.js";
import BlogModel from "../Models/blogModel.js";
import FooterBannerModel from "../Models/footerBannerModel.js";
import MathTestModel from "../Models/mathTestModel.js";
import OfferModel from "../Models/offerModel.js";
import PlanModel from "../Models/planModel.js";
import PricingModel from "../Models/pricingModel.js";
import RegistrationModel from "../Models/registrationModel.js";
import StoryModel from "../Models/successStoryModel.js";
import TestPrepModel from "../Models/testPrepModel.js";
import TrustModel from "../Models/trustModel.js";
import TutoringModel from "../Models/tutoringModel.js";
import WhyChooseModel from "../Models/whyChooseModel.js";

export const getWhyChoose = async (req, res, next) => {
  try {
    const data = await WhyChooseModel.find().sort({ createdAt: -1 });;
    res.status(200).json({ message: "Fetched successfully", data });
  } catch (error) {
    next(error)
  }
};

export const getStory = async (req, res, next) => {
  try {
    const stories = await StoryModel.find().sort({ createdAt: -1 });
    res.json({ data: stories });
  } catch (error) {
    next(error)
  }
};

export const getTrust = async (req, res, next) => {
  try {
    const trustData = await TrustModel.find().sort({ createdAt: -1 });
    res.json({ data: trustData });
  } catch (error) {
    next(error)
  }
};

export const getPlan = async (req, res, next) => {
  try {
    const planData = await PlanModel.find().sort({ createdAt: -1 });
    res.json({ data: planData });
  } catch (error) {
    next(error)
  }
};

export const getOffer = async (req, res, next) => {
  try {
    const offerData = await OfferModel.find().sort({ createdAt: -1 });
    res.json({ data: offerData });
  } catch (error) {
    next(error)
  }
};

export const getBanner = async (req, res, next) => {
  try {
    const bannerData = await BannerModel.find().sort({ createdAt: -1 });
    res.json({ data: bannerData });
  } catch (error) {
    next(error)
  }
};

export const getFooterBanner = async (req, res, next) => {
  try {
    const footerBannerData = await FooterBannerModel.findOne()
    res.json({ data: footerBannerData });
  } catch (error) {
    next(error)
  }
};

export const getPricing = async (req, res, next) => {
  try {
    const pricingData = await PricingModel.find().sort({ createdAt: -1 });
    res.json({ data: pricingData });
  } catch (error) {
    next(error)
  }
};

export const getMathTest = async (req, res, next) => {
  try {
    const mathTestData = await MathTestModel.findOne()
    res.json({ data: mathTestData });
  } catch (error) {
    next(error)
  }
};

export const getTutoring = async (req, res, next) => {
  try {
    const tutoringData = await TutoringModel.findOne()
    res.json({ data: tutoringData });
  } catch (error) {
    next(error)
  }
};

export const getBlog = async (req, res, next) => {
  try {
    const blogData = await BlogModel.find().sort({ createdAt: -1 });
    res.json({ data: blogData });
  } catch (error) {
    next(error)
  }
};

export const getRegistration = async (req, res, next) => {
  try {
    const registrationData = await RegistrationModel.findOne()
    res.json({ data: registrationData });
  } catch (error) {
    next(error)
  }
};

export const getAboutIsee = async (req, res, next) => {
  try {
    const aboutIseeData = await AboutIseeModel.findOne()
    res.json({ data: aboutIseeData });
  } catch (error) {
    next(error)
  }
};

export const getTestPrep = async (req, res, next) => {
  try {
    const getTestPrepData = await TestPrepModel.findOne()
    res.json({ data: getTestPrepData });
  } catch (error) {
    next(error)
  }
};