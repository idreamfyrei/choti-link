import e from "express";
import URL from "../models/url.model.js";
import { nanoid } from "nanoid";

async function handleGetUrlShortener(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortID = nanoid(8);
  
  const existingURL = await URL.findOne({ redirectURL: body.url });
  if(existingURL) return res.render('home', ({ id: existingURL.shortID }));

  await URL.create({
    shortID: shortID,
    redirectURL: body.url,
    visitHistory: [],
    createdBy: req.user._id,
  });

  return res.render('home', { id: shortID } )
  // return res.json({ id: shortID });
}

async function handleRedirectURL(req, res) {
  const shortID = req.params.shortID; 
  console.log(shortID);
  //* const entry = await URL.findOneAndUpdate({ shortID }, { $push: {visitHistory: {timestamp: Date.now()}}});
  const entry = await URL.findOne({ shortID });
  console.log(entry);
  entry.visitHistory.push({timestamp: Date.now()});
  await entry.save();
  return res.redirect(entry.redirectURL);
}

async function handleAnalytics(req, res) {
    const shortID = req.params.shortID;
    const entry = await URL.findOne({ shortID });
    return res.json({totalClicks: entry.visitHistory.length, analytics: entry.visitHistory})
}

export { handleGetUrlShortener, handleRedirectURL, handleAnalytics };
