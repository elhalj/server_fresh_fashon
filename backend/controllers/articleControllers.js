import ArticleModel from "../models/articleModel.js";


// fonction ajouter un article
export async function addArticle(req, res) {
    try {
        const { name, image, price, category, description, stock } = req.body;

        // Vérifiez que les données sont présentes
        if (!name || !image || !price || !category|| !description || !stock) {
            return res.status(400).json({ erreur: "Tous les champs sont obligatoires" });
        }

        const response = await ArticleModel.create({
            name, image, price, category, description, stock
        });
        
        console.log("Enregistré avec succès");
        res.status(200).json({ message: "Enregistré avec succès", data: response });
    } catch (error) {
        res.status(500).json({ erreur: error.message });
        console.log("Erreur d'enregistrement", error);
    }
}

// fonction recuperer les donnée
export async function getArticle(req,res) {
    try {
        const afficher = await ArticleModel.find({});

        res.status(200).json({message:"recuperé avec succes", data: afficher})

    } catch (error) {
        res.status(500).json({message: error.message})
        
        console.log("erreur lors de la recuperation des donnée", error)
    }
}

// finction supprimer par id 
export async function deletById(req,res) {
    try {
        const id = req.params.id;
        const response = await ArticleModel.findByIdAndDelete({ _id: id });

        if(!response) {
            return res.status(404).json({ message: "Aucun article trouvé" });
        }
        res.status(200).json({ message: "Supprimé avec succès", data: response });
    } catch (error) {
        res.status(500).json({ erreur: error.message });
    }
}

// fonction modifier par id
export async function updateById(req,res) {
    try {
        const id = req.params.id;
        const { name, image, price, category, description, stock } = req.body;

        if (!name|| !image || !price || !category || !description || !stock) {
            return res.status(400).json({ erreur: "Tous les champs sont obligatoires" });
        }

        const response = await ArticleModel.findByIdAndUpdate({ _id: id }, { nom, type, price, price, image }, { new: true });

        if(!response) {
            return res.status(404).json({ message: "Aucun article trouvé" });
        }
        
        res.status(200).json({ message: "Modifié avec succès", data: response });
    } catch (error) {
        res.status(500).json({ erreur: error.message });
    }
}