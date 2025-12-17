import { Router } from "express";
import { addBanner, addBlog, getDashboardCounts ,addContactText,deletePSatData,getPSatData, savePSatData,addFooterBanner,getCogatData,saveStbData, deleteStbData ,getStbData, deleteAccuplacerData ,getAccuplacerData ,saveAccuplacerData,getSbacData,saveSbacData ,deleteSbacData,saveCogatData,deleteCogatData, getAmcData,saveActData ,deleteActData, getActData,getMathKangarooData,saveMathKangarooData,deleteMathKangarooData, saveAmcData ,deleteAmcData , addOffer,getScatData , saveScatData , deleteScatData,getElaData ,saveElaData, deleteElaData,getIseeData ,saveIseeData ,deleteIseeData, getShsatData ,saveShsatData , deleteShsatData , getSatData,saveSatData,  deleteSatData ,getSsatData ,saveSsatData,deleteSsatData , addPlan ,getMembers,addMember,updateMember,deleteMember ,addPricing, addStory, addTrust, addWhyChoose, deleteBanner, deleteBlog, deleteCoreElaDetail, deleteFaqDetail, deleteKangaroo, deleteOffer, deletePlan, deletePricing, deleteScienceDetail, deleteStory, deleteTestImonialDetail, deleteTrust, deleteWhyChoose, editBanner, editBlog, editCoreEla, editFaq, editKangaroo, editOffer, editPlan, editPricing, editScience, editStory, editTestImonial, editTrust, editWhyChoose, Login, postCoreEla, postFaq, postKangaroo, postScience, postTestImonial, upsertAbout, upsertAboutEla, upsertAboutIsee, upsertChapter, upsertCompetition, upsertCoreEla, upsertKangaroo, upsertLanguage, upsertRegistration, upsertScience, upsertTutoring, upsetMathTest, getTerms,createTerm,updateTerm,deleteTerm, deleteMethodology, postMethodology, editMethodology, postK12, saveMeasure, } from "../Controller/adminController.js";
import { authentication } from "../Middleware/authentication.js";
import { authorization } from "../Middleware/authorization.js";
import upload from "../Middleware/upload.js";
import { getAbout, getAboutEla, getAboutIsee, getBanner, getBlog, getChapter, getCompetition, getContactText, getCoreEla, getCotactList, getElaDetail, getFaq, getFooterBanner, getK12, getKangaroo, getKangarooDetail, getLanguage, getMathTest, getMeasureData, getMethodology, getOffer, getPlan, getPricing, getRegistration, getScience, getScienceDetail, getStory, getTestImonial, getTrust, getTutoring, getWhyChoose } from "../Controller/userController.js";


const adminRouter = Router();


adminRouter.post('/login', Login)

adminRouter.post("/adminData/:id", authentication, authorization(['admin']),  addBanner)
adminRouter.get("/count",  authentication, authorization(['admin']), getDashboardCounts); 


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
adminRouter.post("/kangaroo-test", authentication, authorization(['admin']), upsertKangaroo)
adminRouter.get("/kangaroo-test", authentication, authorization(['admin']), getKangaroo)

/*---------------------math kangaroo test detail   -----------------------*/
adminRouter.post("/detail-kangaroo", authentication, authorization(['admin']), upload.single("image"), postKangaroo)
adminRouter.patch("/detail-kangaroo", authentication, authorization(['admin']), upload.single("image"), editKangaroo)
adminRouter.get("/detail-kangaroo", authentication, authorization(['admin']), getKangarooDetail)
adminRouter.delete("/detail-kangaroo/:id", authentication, authorization(['admin']), deleteKangaroo)

/*---------------------about common core science -----------------------*/
adminRouter.post("/about-science", authentication, authorization(['admin']), upsertScience)
adminRouter.get("/about-science", authentication, authorization(['admin']), getScience)

/*---------------------about common core  detail   -----------------------*/
adminRouter.post("/science-detail", authentication, authorization(['admin']), upload.single("image"), postScience)
adminRouter.patch("/science-detail", authentication, authorization(['admin']), upload.single("image"), editScience)
adminRouter.get("/science-detail", authentication, authorization(['admin']), getScienceDetail)
adminRouter.delete("/science-detail/:id", authentication, authorization(['admin']), deleteScienceDetail)

/*======================blog maa amc  ===========================*/
adminRouter.post("/blog", authentication, authorization(['admin']), upload.fields([{ name: "image", maxCount: 1 }, { name: "video", maxCount: 1 }]), addBlog)
adminRouter.patch("/blog", authentication, authorization(['admin']), upload.fields([{ name: "image", maxCount: 1 }, { name: "video", maxCount: 1 }]), editBlog)
adminRouter.get("/blog", authentication, authorization(['admin']), getBlog)
adminRouter.delete("/blog/:id", authentication, authorization(['admin']), deleteBlog)

/*=============english================*/

/*---------------------about common core ela -----------------------*/
adminRouter.post("/about-core-ela", authentication, authorization(['admin']), upsertCoreEla)
adminRouter.get("/about-core-ela", authentication, authorization(['admin']), getCoreEla)


/*---------------------about common core ela -----------------------*/


/*---------------------about common core  detail   -----------------------*/
adminRouter.post("/core-ela-detail", authentication, authorization(['admin']), upload.single("image"), postCoreEla)
adminRouter.patch("/core-ela-detail", authentication, authorization(['admin']), upload.single("image"), editCoreEla)
adminRouter.get("/core-ela-detail", authentication, authorization(['admin']), getElaDetail)
adminRouter.delete("/core-ela-detail/:id", authentication, authorization(['admin']), deleteCoreElaDetail)

/*---------------------language and arts -----------------------*/
adminRouter.post("/language", authentication, authorization(['admin']), upload.single("image"), upsertLanguage)
adminRouter.get("/language", authentication, authorization(['admin']), getLanguage)


adminRouter.post("/measure", authentication, authorization(['admin']), saveMeasure)
adminRouter.get("/measure", authentication, authorization(['admin']), getMeasureData)
/*--------------------registration details---------------*/
adminRouter.post("/registration", authentication, authorization(['admin']), upsertRegistration)
adminRouter.get("/registration", authentication, authorization(['admin']), getRegistration)


/*--------------------all about isee test---------------*/
adminRouter.post("/about-isee", authentication, authorization(['admin']), upsertAboutIsee)
adminRouter.get("/about-isee", authentication, authorization(['admin']), getAboutIsee)

/*--------------------all you need to know about ela---------------*/
adminRouter.post("/about-ela", authentication, authorization(['admin']), upsertAboutEla)
adminRouter.get("/about-ela", authentication, authorization(['admin']), getAboutEla)


/*=============testImonial================*/
adminRouter.post("/testImonial", authentication, authorization(['admin']), upload.single("image"), postTestImonial)
adminRouter.patch("/testImonial", authentication, authorization(['admin']), upload.single("image"), editTestImonial)
adminRouter.get("/testImonial", authentication, authorization(['admin']), getTestImonial)
adminRouter.delete("/testImonial/:id", authentication, authorization(['admin']), deleteTestImonialDetail)

/*=============contact list================*/
adminRouter.get("/contact", authentication, authorization(['admin']), getContactText)
adminRouter.post("/contact", authentication, authorization(['admin']), addContactText)
adminRouter.get("/contact-list", authentication, authorization(['admin']), getCotactList)

/*=============about us================*/
adminRouter.post("/about", authentication, authorization(['admin']), upload.single("image"), upsertAbout)
adminRouter.get("/about", authentication, authorization(['admin']), getAbout);

/*=============faq================*/
adminRouter.post("/faq", authentication, authorization(['admin']), postFaq)
adminRouter.get("/faq", authentication, authorization(['admin']), getFaq);
adminRouter.patch("/faq", authentication, authorization(['admin']), editFaq)
adminRouter.delete("/faq/:id", authentication, authorization(['admin']), deleteFaqDetail)






adminRouter.get('/terms',authentication, authorization(['admin']), getTerms);
adminRouter.post('/terms', authentication, authorization(['admin']),createTerm); 
adminRouter.patch('/terms',authentication, authorization(['admin']), updateTerm); 
adminRouter.delete('/terms/:id',authentication, authorization(['admin']), deleteTerm);


adminRouter.get('/management',authentication, authorization(['admin']), getMembers); 

// POST: upload.single('image') handles the file
adminRouter.post('/management',authentication, authorization(['admin']), upload.single('image'), addMember); 

// PATCH: upload.single('image') handles file if user updates it
adminRouter.patch('/management/:id',authentication, authorization(['admin']), upload.single('image'), updateMember); 

adminRouter.delete('/management/:id',authentication, authorization(['admin']), deleteMember);


adminRouter.get("/sat-test", authentication, authorization(['admin']),  getSatData);

adminRouter.post("/sat-test", authentication, authorization(['admin']),  saveSatData);

adminRouter.delete("/sat-test", authentication, authorization(['admin']),  deleteSatData); 



adminRouter.get("/psat-test", authentication, authorization(['admin']),  getPSatData);

adminRouter.post("/psat-test", authentication, authorization(['admin']),  savePSatData);

adminRouter.delete("/psat-test", authentication, authorization(['admin']),  deletePSatData); 

/*=============SSAT================*/

adminRouter.get("/ssat-test",authentication, authorization(['admin']), getSsatData);
adminRouter.post("/ssat-test",authentication, authorization(['admin']), saveSsatData); // Save aur Update dono yahi karega
adminRouter.delete("/ssat-test",authentication, authorization(['admin']), deleteSsatData);

/*=============SHSAT================*/ 

adminRouter.get("/shsat-test",authentication, authorization(['admin']),  getShsatData);
adminRouter.post("/shsat-test", authentication, authorization(['admin']), saveShsatData);
adminRouter.delete("/shsat-test", authentication, authorization(['admin']), deleteShsatData);

/*=============ISEE================*/ 
adminRouter.get("/isee-test",  authentication, authorization(['admin']), getIseeData);
adminRouter.post("/isee-test",authentication, authorization(['admin']), saveIseeData);
adminRouter.delete("/isee-test",authentication, authorization(['admin']), deleteIseeData);

/*=============ELA================*/ 

adminRouter.get("/ela-test",authentication, authorization(['admin']), getElaData );
adminRouter.post("/ela-test", authentication, authorization(['admin']), saveElaData);
adminRouter.delete("/ela-test", authentication, authorization(['admin']), deleteElaData);

/*=============ELA================*/  

adminRouter.get("/scat-test",authentication, authorization(['admin']), getScatData);
adminRouter.post("/scat-test", authentication, authorization(['admin']),saveScatData);
adminRouter.delete("/scat-test",authentication, authorization(['admin']), deleteScatData);


adminRouter.get("/amc-test",authentication, authorization(['admin']), getAmcData);
adminRouter.post("/amc-test",authentication, authorization(['admin']), saveAmcData);
adminRouter.delete("/amc-test",authentication, authorization(['admin']), deleteAmcData);

adminRouter.get("/math-kangaroo-test",authentication, authorization(['admin']), getMathKangarooData);
adminRouter.post("/math-kangaroo-test",authentication, authorization(['admin']), saveMathKangarooData);
adminRouter.delete("/math-kangaroo-test",authentication, authorization(['admin']), deleteMathKangarooData);

/*=============ACT================*/  

adminRouter.get("/act-test",authentication, authorization(['admin']), getActData);
adminRouter.post("/act-test", authentication, authorization(['admin']),saveActData);
adminRouter.delete("/act-test",authentication, authorization(['admin']), deleteActData);

/*=============Cogat================*/  

adminRouter.get("/cogat-test",authentication, authorization(['admin']), getCogatData);
adminRouter.post("/cogat-test",authentication, authorization(['admin']), saveCogatData);
adminRouter.delete("/cogat-test",authentication, authorization(['admin']), deleteCogatData);

adminRouter.get("/sbac-test",authentication, authorization(['admin']), getSbacData);
adminRouter.post("/sbac-test",authentication, authorization(['admin']), saveSbacData);
adminRouter.delete("/sbac-test",authentication, authorization(['admin']), deleteSbacData);

adminRouter.get("/accuplacer-test",authentication, authorization(['admin']), getAccuplacerData);
adminRouter.post("/accuplacer-test", authentication, authorization(['admin']),saveAccuplacerData);
adminRouter.delete("/accuplacer-test",authentication, authorization(['admin']), deleteAccuplacerData);

adminRouter.get("/stb-test",authentication, authorization(['admin']), getStbData);
adminRouter.post("/stb-test",authentication, authorization(['admin']), saveStbData);
adminRouter.delete("/stb-test",authentication, authorization(['admin']), deleteStbData);



/*-------------------------k-12-***methodology------------------------*/
adminRouter.post("/methodology", authentication, authorization(['admin']), upload.single("image"), postMethodology)
adminRouter.patch("/methodology", authentication, authorization(['admin']), upload.single("image"), editMethodology)
adminRouter.get("/methodology", authentication, authorization(['admin']), getMethodology)
adminRouter.delete("/methodology/:id", authentication, authorization(['admin']), deleteMethodology)


/*-------------------------k-12-***service------------------------*/
adminRouter.post("/k-12service", authentication, authorization(['admin']), upload.fields([{name:'image',maxCount:1},{name:'image1',maxCount:1},
    {name:'image2',maxCount:1},{name:'image3',maxCount:1}
]), postK12)
adminRouter.get("/k-12service", authentication, authorization(['admin']), getK12)


export default adminRouter