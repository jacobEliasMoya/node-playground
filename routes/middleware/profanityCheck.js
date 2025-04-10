import { Filter } from 'bad-words';
const filter = new Filter();

const profanityCheck = (req, res, next) => {

    const title = req.body.title;

    if (!title) {
        return res.status(400).json({ message: 'please include a title' })
    }

    if (filter.isProfane(title)) {
        return res.status(400).json({ message: 'no bad words please' })
    }

    console.log('dink')

    next();

}

export default profanityCheck;