import { Router } from "express";
import { addBanner, addFooterBanner, addOffer, addPlan, addPricing, addStory, addTrust, addTutoring, addWhyChoose, deleteBanner, deleteOffer, deletePlan, deletePricing, deleteStory, deleteTrust, deleteTutoring, deleteWhyChoose, editBanner, editOffer, editPlan, editPricing, editStory, editTrust, editTutoring, editWhyChoose, Login, upsetMathTest } from "../Controller/adminController.js";
import { authentication } from "../Middleware/authentication.js";
import { authorization } from "../Middleware/authorization.js";
import upload from "../Middleware/upload.js";
import { getBanner, getFooterBanner, getMathTest, getOffer, getPlan, getPricing, getStory, getTrust, getTutoring, getWhyChoose } from "../Controller/userController.js";


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
adminRouter.post("/tutoring", authentication, authorization(['admin']), upload.single("bgImage"), addTutoring)
adminRouter.patch("/tutoring", authentication, authorization(['admin']), upload.single("bgImage"), editTutoring)
adminRouter.get("/tutoring", authentication, authorization(['admin']), getTutoring)
adminRouter.delete("/tutoring/:id", authentication, authorization(['admin']), deleteTutoring)

export default adminRouter