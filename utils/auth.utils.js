//const sessionIdToUserMap = new Map();
import e from "express";
import jwt from "jsonwebtoken";

function setUser(user) {
  // sessionIdToUserMap.set(id, user);

  // Payload should be object
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET
  );
}

function getUser(token) {
  //return sessionIdToUserMap.get(id);
  if (!token) return null;
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
}

export { setUser, getUser };
