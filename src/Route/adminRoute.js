import { Router } from "express";
import { addWhyChoose, deleteWhyChoose, editWhyChoose, Login } from "../Controller/adminController.js";
import { authentication } from "../Middleware/authentication.js";
import { authorization } from "../Middleware/authorization.js";
import upload from "../Middleware/upload.js";
import { getWhyChoose } from "../Controller/userController.js";


const adminRouter = Router();


adminRouter.post('/login', Login)


/*------ why choose us--------*/
adminRouter.post("/why-choose", authentication, authorization(['admin']), upload.single("image"), addWhyChoose)
adminRouter.patch("/why-choose", authentication, authorization(['admin']), upload.single("image"), editWhyChoose)
adminRouter.get("/why-choose", authentication, authorization(['admin']), getWhyChoose)
adminRouter.delete("/why-choose/:id", authentication, authorization(['admin']), deleteWhyChoose)


export default adminRouter