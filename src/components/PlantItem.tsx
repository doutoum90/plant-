import { useContext } from "react";
import { AppContext } from "../App";
import { Panier } from "../models/Panier";
import { Produit } from "../models/Produit";

export default function PlantItem() {
  const {
    produit,
    paniers,
    setPaniers,
  }: { produit: Produit; paniers: Panier[]; setPaniers: any } =
    useContext(AppContext);

  const addToPanier = () => {
    const panierIndex = paniers
      ? paniers.findIndex((panier) => panier.nom === produit.nom)
      : -1;
    if (panierIndex === -1) {
      setPaniers([...paniers, { nombres: 1, ...produit }]);
    } else {
      const newPaniers = [...paniers];
      newPaniers[panierIndex].nombres++;
      setPaniers(newPaniers);
    }
  };
  return (
    <div
      style={{
        float: "left",

        border: "1px solid rgba(0, 0, 0, 0.05)",
      }}
    >
      <h3>{produit.nom}</h3>
      <h3>{produit.prix} $</h3>
      <button onClick={addToPanier}>Ajouter au panier</button>
    </div>
  );
}
