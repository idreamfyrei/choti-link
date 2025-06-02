import express from "express";
import URL from "../models/url.model";
import { restrictUser } from "../middlewares/auth.middlewares.js";

const router = express.Router();

router.get("/admin/url", restrictUser(['admin']), async (req, res) => {
  const allUrls = await URL.find({});
  return res.render("home", {
    urls: allUrls,
  });
});

router.get("/", restrictUser(['user', 'admin']), async (req, res) => {
  const allUrls = await URL.find({createdBy: req.user._id});
  return res.render("home", {
    urls: allUrls,
  });
});

router.get('/signup', (req,res) => {
  return res.render('signup')
});

router.get('/login', (req,res) => {
  return res.render('login')
});

export default router;
