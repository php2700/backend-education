import AboutCoreElaModel from "../Models/aboutCoreElaModel.js";
import AboutElaModel from "../Models/aboutElaModel.js";
import AboutIseeModel from "../Models/aboutIseeModel.js";
import AboutModel from "../Models/aboutModel.js";
import BannerModel from "../Models/bannerModel.js";
import BlogModel from "../Models/blogModel.js";
import ChapterModel from "../Models/chapterModel.js";
import CompetitionModel from "../Models/competitionModel.js";
import ContactModel from "../Models/contactModel.js";
import ContactTextModel from "../Models/contactTextModel.js";
import AboutElaDetailModel from "../Models/ElaDetailModel.js";
import FaqModel from "../Models/faqModel.js";
import FooterBannerModel from "../Models/footerBannerModel.js";
import KangarooDetailModel from "../Models/kangarooDetailModel.js";
import KangarooModel from "../Models/kangarooModel.js";
import LanguageModel from "../Models/languageModel.js";
import MathTestModel from "../Models/mathTestModel.js";
import OfferModel from "../Models/offerModel.js";
import PlanModel from "../Models/planModel.js";
import PricingModel from "../Models/pricingModel.js";
import RegistrationModel, { MeasureModel } from "../Models/registrationModel.js";
import ScienceDetailModel from "../Models/scienceDetailModel.js";
import ScienceModel from "../Models/scienceModel.js";
import StoryModel from "../Models/successStoryModel.js";
import TestImonialModel from "../Models/testimonialModel.js";
import TrustModel from "../Models/trustModel.js";
import TutoringModel from "../Models/tutoringModel.js";
import WhyChooseModel from "../Models/whyChooseModel.js";
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
import K12ServiceModel, { MethodologyModel } from "../Models/k-12Model.js";














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

export const getOfferDetail = async (req, res, next) => {
  try {
       const { id } = req.params; 

    const offerData = await OfferModel.findOne({ _id: id });
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

export const getBlogDetail = async (req, res, next) => {
  try {
    const { id } = req.params; 
    
    const blogData = await BlogModel.findOne({ _id: id });

    res.json({ data: blogData });
  } catch (error) {
    next(error);
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

export const getMeasureData = async (req, res, next) => {
  try {
    const registrationData = await MeasureModel.findOne()
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


export const getTestImonial = async (req, res, next) => {
  try {
    const data = await TestImonialModel.find().sort({ createdAt: -1 })
    res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    next(err);
  }
};
export const getK12 = async (req, res, next) => {
  try {
    const data = await K12ServiceModel.findOne()
    res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const getMethodology = async (req, res, next) => {
  try {
    const data = await MethodologyModel.find().sort({ createdAt: -1 })
    res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const getTerms = async (req, res) => {
  try {
    const terms = await TermsModel.find().sort({ createdAt: 1 });
    res.status(200).json({ success: true, data: terms });
  } catch (error) {
    console.error("Error in getTerms:", error); // Console log error for debugging
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getCotactList = async (req, res, next) => {
  try {
    const page = req?.query?.page || 1;
    const limit = req?.query?.limit || 10;
    const offset = (page - 1) * limit;
    const totalItem = await ContactModel.countDocuments();
    const data = await ContactModel.find().skip(offset).limit(limit).sort({ createdAt: -1 })
    res.status(200).json({
      success: true,
      data,
      pagination: {
        totalItem,
        page, limit,
        totalPages: Math.ceil(totalItem / limit)
      }
    });
  } catch (err) {
    next(err);
  }
}

export const getContactText = async (req, res, next) => {
  try {
    const data = await ContactTextModel.findOne();
    res.status(200).json({
      success: true,
      data
    });
  } catch (err) {
    next(err);
  }
}

export const addContact = async (req, res, next) => {
  try {
    const { name, email, mobile, message } = req?.body;
    if (!name || !email || !mobile || !message) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const data = await new ContactModel({
      name, email, mobile, message
    });
    await data.save();
    res.status(200).json({
      success: true,
      data
    });
  } catch (err) {
    next(err);
  }
}

export const getAbout = async (req, res, next) => {
  try {

    const data = await AboutModel.findOne();
    res.status(200).json({
      success: true,
      data
    });
  } catch (err) {
    next(err);
  }
}


export const getFaq = async (req, res, next) => {
  try {

    const data = await FaqModel.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data
    });
  } catch (err) {
    next(err);
  }
}
export const getMembers = async (req, res) => {
  try {
    const members = await ManagementModel.find().sort({ order: 1, createdAt: 1 });
    res.status(200).json({ success: true, data: members });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

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
export const getShsatData = async (req, res) => {
  try {
    const data = await ShsatTest.findOne();
    res.status(200).json({ success: true, data: data || null });
  } catch (error) {
    console.error("Error fetching SHSAT data:", error);
    res.status(500).json({ message: "Server Error", error });
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

export const getElaData = async (req, res) => {
  try {
    const data = await ElaTest.findOne();
    res.status(200).json({ success: true, data: data || null });
  } catch (error) {
    console.error("Error fetching ELA data:", error);
    res.status(500).json({ message: "Server Error", error });
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

export const getAmcData = async (req, res) => {
  try {
    const data = await AmcTest.findOne();
    res.status(200).json({ success: true, data: data || null });
  } catch (error) {
    console.error("Error fetching AMC data:", error);
    res.status(500).json({ message: "Server Error", error });
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

export const getActData = async (req, res) => {
  try {
    const data = await ActTest.findOne();
    res.status(200).json({ success: true, data: data || null });
  } catch (error) {
    console.error("Error fetching ACT data:", error);
    res.status(500).json({ message: "Server Error", error });
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
export const getSbacData = async (req, res) => {
  try {
    const data = await SbacTest.findOne();
    res.status(200).json({ success: true, data: data || null });
  } catch (error) {
    console.error("Error fetching SBAC data:", error);
    res.status(500).json({ message: "Server Error", error });
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
export const getStbData = async (req, res) => {
  try {
    const data = await StbTest.findOne();
    res.status(200).json({ success: true, data: data || null });
  } catch (error) {
    console.error("Error fetching STB data:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};