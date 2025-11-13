import { Router } from "express";
import { addBanner, addBlog, addFooterBanner, addOffer, addPlan, addPricing, addStory, addTrust, addWhyChoose, deleteBanner, deleteBlog, deleteOffer, deletePlan, deletePricing, deleteStory, deleteTrust, deleteWhyChoose, editBanner, editBlog, editOffer, editPlan, editPricing, editStory, editTrust, editWhyChoose, Login, upsertAboutEla, upsertAboutIsee, upsertChapter, upsertCommonCore, upsertCommonLanguageArt, upsertCompetition, upsertKangaroo, upsertRegistration, upsertTutoring, upsetMathTest } from "../Controller/adminController.js";
import { authentication } from "../Middleware/authentication.js";
import { authorization } from "../Middleware/authorization.js";
import upload from "../Middleware/upload.js";
import { getAboutEla, getAboutIsee, getBanner, getBlog, getChapter, getCommonCore, getCommonLanguageArt, getCompetition, getFooterBanner, getKangaroo, getMathTest, getOffer, getPlan, getPricing, getRegistration, getStory, getTrust, getTutoring, getWhyChoose } from "../Controller/userController.js";


const adminRouter = Router();


adminRouter.post('/login', Login)

/*------------------- banner-------- */
adminRouter.post("/banner", authentication, authorization(['admin']), upload.single("image"), addBanner)
adminRouter.patch("/banner", authentication, authorization(['admin']), upload.single("image"), editBanner)
adminRouter.get("/banner", authentication, authorization(['admin']), getBanner)
adminRouter.delete("/banner/:id", authentication, authorization(['admin']), deleteBanner)

/*------ why choose us--------*/
adminRouter.post("/why-choose", authentication, authorization(['admin']), upload.single("image"), addWhyChoose)
adminRouter.patch("/why-choose", authentication, authorization(['admin']), upload.single("image"), editWhyChoose)
adminRouter.get("/why-choose", authentication, authorization(['admin']), getWhyChoose)
adminRouter.delete("/why-choose/:id", authentication, authorization(['admin']), deleteWhyChoose)

/*----------------------offers----------------------*/
adminRouter.post("/offers", authentication, authorization(['admin']), addOffer)
adminRouter.patch("/offers", authentication, authorization(['admin']), editOffer)
adminRouter.get("/offers", authentication, authorization(['admin']), getOffer)
adminRouter.delete("/offers/:id", authentication, authorization(['admin']), deleteOffer)

/*------------------------story ------------------*/
adminRouter.post("/story", authentication, authorization(['admin']), upload.single("image"), addStory)
adminRouter.patch("/story", authentication, authorization(['admin']), upload.single("image"), editStory)
adminRouter.get("/story", authentication, authorization(['admin']), getStory)
adminRouter.delete("/story/:id", authentication, authorization(['admin']), deleteStory)


/*------------------trust & credability ----------------------*/
adminRouter.post("/trust", authentication, authorization(['admin']), upload.single("image"), addTrust)
adminRouter.patch("/trust", authentication, authorization(['admin']), upload.single("image"), editTrust)
adminRouter.get("/trust", authentication, authorization(['admin']), getTrust)
adminRouter.delete("/trust/:id", authentication, authorization(['admin']), deleteTrust)


/*----------------------------pricing Or Plan --------------------------*/
adminRouter.post("/plan", authentication, authorization(['admin']), addPlan)
adminRouter.patch("/plan", authentication, authorization(['admin']), editPlan)
adminRouter.get("/plan", authentication, authorization(['admin']), getPlan)
adminRouter.delete("/plan/:id", authentication, authorization(['admin']), deletePlan)


/*---------------------footer banner-----------------*/
adminRouter.post("/footer-banner", authentication, authorization(['admin']), upload.single("image"), addFooterBanner)
adminRouter.get("/footer-banner", authentication, authorization(['admin']), getFooterBanner)


/*============================ pricing ===============================*/
adminRouter.post("/pricing", authentication, authorization(['admin']), upload.single("image"), addPricing)
adminRouter.patch("/pricing", authentication, authorization(['admin']), upload.single("image"), editPricing)
adminRouter.get("/pricing", authentication, authorization(['admin']), getPricing)
adminRouter.delete("/pricing/:id", authentication, authorization(['admin']), deletePricing)

/*============================math section============================*/


/*---------------------math test -----------------------*/
adminRouter.post("/math-test", authentication, authorization(['admin']), upsetMathTest)
adminRouter.get("/math-test", authentication, authorization(['admin']), getMathTest)

/*---------------------tutoring  -----------------------*/
adminRouter.post("/tutoring", authentication, authorization(['admin']), upsertTutoring)
adminRouter.get("/tutoring", authentication, authorization(['admin']), getTutoring)

/*---------------------chapter  -----------------------*/
adminRouter.post("/chapter", authentication, authorization(['admin']), upsertChapter)
adminRouter.get("/chapter", authentication, authorization(['admin']), getChapter)


/*---------------------competition  -----------------------*/
adminRouter.post("/competition", authentication, authorization(['admin']), upsertCompetition)
adminRouter.get("/competition", authentication, authorization(['admin']), getCompetition)

/*---------------------math kangaroo test prep   -----------------------*/
adminRouter.post("/kangaroo-test", authentication, authorization(['admin']),upload.any("image"), upsertKangaroo )
adminRouter.get("/kangaroo-test", authentication, authorization(['admin']), getKangaroo )


/*======================blog maa amc  ===========================*/
adminRouter.post("/blog", authentication, authorization(['admin']), upload.single("image"), addBlog)
adminRouter.patch("/blog", authentication, authorization(['admin']), upload.single("image"), editBlog)
adminRouter.get("/blog", authentication, authorization(['admin']), getBlog)
adminRouter.delete("/blog/:id", authentication, authorization(['admin']), deleteBlog)

/*=============english================*/
/*--------------------registration details---------------*/
adminRouter.post("/registration", authentication, authorization(['admin']), upsertRegistration)
adminRouter.get("/registration", authentication, authorization(['admin']), getRegistration)


/*--------------------all about isee test---------------*/
adminRouter.post("/about-isee", authentication, authorization(['admin']), upsertAboutIsee)
adminRouter.get("/about-isee", authentication, authorization(['admin']), getAboutIsee)

/*--------------------all you need to know about ela---------------*/
adminRouter.post("/about-ela", authentication, authorization(['admin']), upsertAboutEla)
adminRouter.get("/about-ela", authentication, authorization(['admin']), getAboutEla)

/*--------------------abount common core  ela---------------*/
adminRouter.post("/about-core-ela", authentication, authorization(['admin']), upsertCommonCore)
adminRouter.get("/about-core-ela", authentication, authorization(['admin']), getCommonCore)

/*--------------------common core english language and arts---------------*/
adminRouter.post("/common-language-art", authentication, authorization(['admin']), upsertCommonLanguageArt)
adminRouter.get("/common-language-art", authentication, authorization(['admin']), getCommonLanguageArt)


export default adminRouter