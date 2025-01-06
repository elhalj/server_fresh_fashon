// import { generateKey } from "crypto";
import { User } from "../models/Users.js";
import bcrypt from 'bcrypt';
import generatedToken from "../utils/auth/authUtils.js";



export async function signUser(req, res) {
    try {
        const { nom, prenom, email, telephone, password, address } = req.body;

        const hash = await bcrypt.hash(password, 10);

        if (!nom || !prenom || !email || !telephone || !password || !address) {
            return res.status(400).json({ erreur: "Tous les champs sont obligatoires" });
        }

        const response = new User({
            nom, prenom, email, telephone, password: hash, address
        });

        // const token = generatedToken(response) //pour les tokens
        const saverUser = await response.save();
        console.log("Enregistré avec succès");
        res.status(200).json({ message: "Enregistré avec succès", data: saverUser, /*token: token */ });

    } catch (error) {
        res.status(500).json({ erreur: error.message });
        console.log("Erreur d'enregistrement", error.message);
    }
}

export async function login(req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ erreur: "Tous les champs sont obligatoires" });
        }

        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ erreur: "Utilisateur non trouvé" });
        }

        // verification du mot de pass crypte
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(401).json({ erreur: "Mot de passe incorrect" });
        }

        // if (user.password !== password) {
        //     return res.status(401).json({ erreur: "Mot de passe incorrect" });
        // }

        const token = generatedToken(user) //pour les tokens
        res.status(200).json({ message: "Connexion réussie", user: user, token: token });
    }
    catch (error) {
        res.status(401).json({ erreur: error.message });
    }

}

export function protectRoute(req, res, next) {

    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ erreur: "Accès non autorisé" });
        }
        const verify = jwt.verify(token, 'secretKey');
        req.user = verify;
        next();
    } catch (error) {
        res.status(401).json({ erreur: "Accès non autorisé" });
    }
}

export async function getUser(req, res) {
    try {
        const response = await User.find();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ erreur: error.message });
    }
}