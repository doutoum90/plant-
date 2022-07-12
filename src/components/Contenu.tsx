import { useContext } from "react";
import { AppContext } from "../App";
import Categories from "./Categories";
import ShoppingList from "./Shopping";

export default function Contenu() {
  const { catAndProd, paniers, setPaniers, produits, sCat, setSCat } =
    useContext(AppContext);
  return (
    <div style={{ width: "70%", overflow: "auto" }}>
      <AppContext.Provider
        value={{ catAndProd, paniers, setPaniers, produits, sCat, setSCat }}
      >
        <Categories />
        <ShoppingList />
      </AppContext.Provider>
    </div>
  );
}
