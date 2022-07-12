import { useContext, useEffect } from "react";
import { AppContext } from "../App";
import { Panier } from "../models/Panier";

export default function Cards() {
  const { paniers, setPaniers }: { paniers: Panier[]; setPaniers: any } =
    useContext(AppContext);
  const vidage = () => {
    setPaniers([]);
  };

  const validation = () => {
    console.log("Procession au paiement");
  };
  return (
    <div style={{ width: "30%", float: "left" }}>
      <button>Fermer</button>
      <p>Panier </p>

      <ul>
        {paniers.map((arr, key) => {
          return (
            <li key={key}>
              {arr.nombres} {arr.nom} {arr.prix} $
            </li>
          );
        })}
      </ul>

      <h3>
        Total:{" "}
        {paniers.reduce((panierAcc, currentPanier) => {
          return panierAcc + currentPanier.prix * currentPanier.nombres;
        }, 0)}{" "}
        $
      </h3>

      <button onClick={validation}>Valider le panier</button>
      <button onClick={vidage}>Vider le panier</button>
    </div>
  );
}
