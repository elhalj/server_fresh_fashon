import express from 'express';
import { addArticle, deletById, getArticle, updateById } from '../controllers/articleControllers.js';
import { getUser, login, protectRoute, signUser } from '../controllers/userController.js';

export const routes = express.Router();


routes.post('/api/articles', addArticle); // Ajouter un article
routes.get('/api/recupererArcticle', getArticle); // Récupérer les articles
routes.delete('/api/delete/:id', deletById); // Supprimer un article
routes.put('/api/update/:id', updateById); // Modifier un article

routes.post('/api/inscription', signUser); // Inscription d'un utilisateur
routes.post('/api/connexion', login); // Connexion d'un utilisateur
routes.use('/api/protected', protectRoute, (req, res) => {
    res.send({ message: 'Vous êtes connecté et avez accès à cette route' });// Route protégée
  });
routes.get('/api/recupererUtilisateur', getUser); // Récupérer les utilisateurs