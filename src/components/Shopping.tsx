import { useContext } from "react";
import { AppContext } from "../App";
import { Panier } from "../models/Panier";
import { Produit } from "../models/Produit";
import PlantItem from "./PlantItem";
/* export const AppContext: Context<any> = createContext({
  catAndProd: null,
  paniers: null,
  produits: [],
  sCat: "",
}); */
export default function ShoppingList() {
  const {
    produits,
    paniers,
    setPaniers,
  }: { produits: Produit[]; paniers: Panier[]; setPaniers: any } =
    useContext(AppContext);

  return (
    <div>
      <h1>Ma liste de courses</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {produits?.map((produit, key) => {
          return (
            <AppContext.Provider
              key={key}
              value={{ produit, paniers, setPaniers }}
            >
              <PlantItem key={key} />
            </AppContext.Provider>
          );
        })}
      </div>
    </div>
  );
}
