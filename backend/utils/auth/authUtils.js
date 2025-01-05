import jwt from "jsonwebtoken";


const generatedToken = (user) => {
    // return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
    //     expiresIn: '1d'
    // });

    const payload = {
        id: user._id,
        email: user.email
    }
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });
}

function verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
}

export default {generatedToken, verifyToken};