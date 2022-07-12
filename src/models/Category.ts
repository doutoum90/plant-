import { Produit } from "./Produit";

export interface Categorie {
  id: number;
  nom: string;
  produits: Produit[];
}
