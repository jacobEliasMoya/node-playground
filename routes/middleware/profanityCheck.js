import { Filter } from 'bad-words';
const filter = new Filter();

const profanityCheck = (req, res, next) => {

    const username = req.body.username;

    if (!username) {
        return res.status(400).json({ message: 'please include a username' })
    }

    if (filter.isProfane(username)) {
        return res.status(400).json({ message: 'no bad words please' })
    }

    next();

}

export default profanityCheck;