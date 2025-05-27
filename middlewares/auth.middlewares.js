import { getUser } from '../utils/auth.utils.js'

async function allowLoggedInUser(req, res, next) {
    const userUID = req.cookies.uuid;

    if (!userUID) {
        return res.redirect('/login');
    }
    const user = getUser(userUID);
    if(!user) {
        return res.redirect('/login');
    }

    req.user = user;
    next();
}

export { allowLoggedInUser };