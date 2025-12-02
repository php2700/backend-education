import { Router } from "express";
import { addContact, getAbout, getAboutEla,getTerms, getAboutIsee, getMembers ,getBanner, getBlog, getChapter, getCompetition, getContactText, getCoreEla, getElaDetail, getFaq, getFooterBanner, getKangaroo, getKangarooDetail, getLanguage, getMathTest, getOffer, getPlan, getPricing, getRegistration, getScience, getScienceDetail, getStory, getTestImonial, getTrust, getTutoring, getWhyChoose } from "../Controller/userController.js";

const userRouter = Router();

/*------------------- banner-------- */
userRouter.get("/banner", getBanner)

/*------ why choose us--------*/
userRouter.get("/why-choose", getWhyChoose)

/*----------------------offers----------------------*/
userRouter.get("/offers", getOffer)

/*------------------------story ------------------*/
userRouter.get("/story", getStory)


/*------------------trust & credability ----------------------*/
userRouter.get("/trust", getTrust)


/*----------------------------pricing Or Plan --------------------------*/
userRouter.get("/plan", getPlan)


/*---------------------footer banner-----------------*/
userRouter.get("/footer-banner", getFooterBanner)


/*============================ pricing ===============================*/
userRouter.get("/pricing", getPricing)

/*============================math section============================*/


/*---------------------math test -----------------------*/
userRouter.get("/math-test", getMathTest)

/*---------------------tutoring  -----------------------*/
userRouter.get("/tutoring", getTutoring)

/*---------------------chapter  -----------------------*/
userRouter.get("/chapter", getChapter)


/*---------------------competition  -----------------------*/
userRouter.get("/competition", getCompetition)

/*---------------------math kangaroo test prep   -----------------------*/
userRouter.get("/kangaroo-test", getKangaroo)

/*---------------------math kangaroo test detail   -----------------------*/
userRouter.get("/detail-kangaroo", getKangarooDetail)

/*---------------------about common core science -----------------------*/
userRouter.get("/about-science", getScience)

/*---------------------about common core  detail   -----------------------*/
userRouter.get("/science-detail", getScienceDetail)

/*======================blog maa amc  ===========================*/
userRouter.get("/blog", getBlog)

/*=============english================*/
/*---------------------language and arts -----------------------*/
userRouter.get("/language", getLanguage)

/*---------------------about common core ela -----------------------*/
userRouter.get("/about-core-ela", getCoreEla)

/*---------------------about common core  detail   -----------------------*/
userRouter.get("/core-ela-detail", getElaDetail)

/*--------------------all you need to know about ela---------------*/
userRouter.get("/about-ela", getAboutEla)

/*--------------------all about isee test---------------*/
userRouter.get("/about-isee-test", getAboutIsee)

/*--------------------registration details---------------*/
userRouter.get("/registration", getRegistration)


/*--------contact-----*/
userRouter.get("/contact", getContactText)
userRouter.post("/contact", addContact)

userRouter.get("/about", getAbout);
userRouter.get("/faq", getFaq);
userRouter.get("/testImonial", getTestImonial)


userRouter.get('/terms', getTerms)


userRouter.get('/management', getMembers); 


export default userRouter;