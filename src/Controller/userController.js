import AboutCoreElaModel from "../Models/aboutCoreElaModel.js";
import AboutElaModel from "../Models/aboutElaModel.js";
import AboutIseeModel from "../Models/aboutIseeModel.js";
import BannerModel from "../Models/bannerModel.js";
import BlogModel from "../Models/blogModel.js";
import ChapterModel from "../Models/chapterModel.js";
import CompetitionModel from "../Models/competitionModel.js";
import AboutElaDetailModel from "../Models/ElaDetailModel.js";
import FooterBannerModel from "../Models/footerBannerModel.js";
import KangarooDetailModel from "../Models/kangarooDetailModel.js";
import KangarooModel from "../Models/kangarooModel.js";
import LanguageModel from "../Models/languageModel.js";
import MathTestModel from "../Models/mathTestModel.js";
import OfferModel from "../Models/offerModel.js";
import PlanModel from "../Models/planModel.js";
import PricingModel from "../Models/pricingModel.js";
import RegistrationModel from "../Models/registrationModel.js";
import ScienceDetailModel from "../Models/scienceDetailModel.js";
import ScienceModel from "../Models/scienceModel.js";
import StoryModel from "../Models/successStoryModel.js";
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
    const bannerData = await BannerModel.findOne();
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


export const getAboutEla = async (req, res, next) => {
  try {
    const getTestPrepData = await AboutElaModel.findOne()
    res.json({ data: getTestPrepData });
  } catch (error) {
    next(error)
  }
};

export const getChapter = async (req, res, next) => {
  try {
    const data = await ChapterModel.findOne();

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "No chapter data found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Chapter data fetched successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const getCompetition = async (req, res, next) => {
  try {
    const data = await CompetitionModel.findOne();

    if (!data) {
      return res.status(404).json({
        success: false,
        message: " no competition data found",
      });
    }
    res.status(200).json({
      success: true,
      message: "competition data fetched successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
}

export const getKangaroo = async (req, res, next) => {
  try {
    const kangarooData = await KangarooModel.findOne();
    if (!kangarooData) {
      return res.status(404).json({
        success: false,
        message: "No Kangaroo test data found",
      });
    }

    res.status(200).json({
      success: true,
      data: kangarooData,
    });
  } catch (error) {
    next(error)
  }
};


export const getKangarooDetail = async (req, res, next) => {
  try {
    const data = await KangarooDetailModel.find().sort({ createdAt: -1 })
    res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    next(err);
  }
};


export const getScience = async (req, res, next) => {
  try {
    const scienceData = await ScienceModel.findOne();
    if (!scienceData) {
      return res.status(404).json({
        success: false,
        message: "No science data found",
      });
    }

    res.status(200).json({
      success: true,
      data: scienceData,
    });
  } catch (error) {
    next(error)
  }
};

export const getScienceDetail = async (req, res, next) => {
  try {
    const data = await ScienceDetailModel.find().sort({ createdAt: -1 })
    res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    next(err);
  }
};


export const getCoreEla = async (req, res, next) => {
  try {
    const aboutCoreEla = await AboutCoreElaModel.findOne();
    if (!aboutCoreEla) {
      return res.status(404).json({
        success: false,
        message: "No about data found",
      });
    }

    res.status(200).json({
      success: true,
      data: aboutCoreEla,
    });
  } catch (error) {
    next(error)
  }
};

export const getElaDetail = async (req, res, next) => {
  try {
    const data = await AboutElaDetailModel.find().sort({ createdAt: -1 })
    res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const getLanguage = async (req, res, next) => {
  try {
    const data = await LanguageModel.findOne()
    res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    next(err);
  }
};