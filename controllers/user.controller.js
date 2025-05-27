import User from "../models/user.model.js";
import { v4 as uuidv4 } from 'uuid';
import { setUser } from '../utils/auth.utils.js'

async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;
  await User.create({ name, email, password });
  return res.redirect('/');
}
async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if( !user ){
    return res.render('login', {error: 'Invalid username or id'});
  }

  // Using UUID as sessionID
  // const sessionID = uuidv4();
  // setUser(sessionID, user);
  // res.cookie('uuid', sessionID);

  // Using jwt token
  const token = setUser(user);

  res.cookie('uuid', token);    
  return res.redirect('/');
}

export { handleUserSignup, handleUserLogin };