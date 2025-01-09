import jwt from "jsonwebtoken";
import secretKey from '../jwt.js';


export default function generatedToken(user){
    // return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
    //     expiresIn: '1d'
    // });

    const payload = {
        id: user._id,
        email: user.email
    }
    const token = jwt.sign(payload, 'secretKey', {
        expiresIn: '1h'
    });
    return token;
}

export function generatedRefreshToken(user){
    // return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
    //     expiresIn: '1d'
    // });

    const payload = {
        id: user._id,
        email: user.email
    }
    const token = jwt.sign(payload, secretKey, {
        expiresIn: '7h'
    });
    return token;
}

export function verifyToken(token) {
    try {
        const verify = jwt.verify(token, 'secretKey');
        return verify;
    }catch (error) {
        return null;
    }
}
