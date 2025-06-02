// Headers based authentication and role based authorization
import { get } from "mongoose";
import { getUser } from "../utils/auth.utils.js";

function checkForAuth(req, res, next) {
  // const authHeaderValue = req.headers["authorization"];
  // if (!authHeaderValue || !authHeaderValue.startsWith("Bearer ")) {
  //   return next();
  // }
  // const token = authHeaderValue.split(" ")[1];
  // const user = getUser(token);


  const tokenCookie = req.cookies?.token;
   if (!tokenCookie) {
    return next();
  }

  const user = getUser(tokenCookie);
  req.user = user;
  next();
}

function restrictUser(roles = []) {
  return function (req, res, next) {
    if (!res.user) return res.redirect("/login");

    if (!roles.includes(req.user.role)) {
      return res.end("Unauthorized");
    }

    return next();
  };
}

export { checkForAuth, restrictUser };
