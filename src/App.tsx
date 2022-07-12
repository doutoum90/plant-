import React, { Context, createContext, useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Contenu from "./components/Contenu";
import Footer from "./components/Footer";
import { Categorie } from "./models/Category";
import { Panier } from "./models/Panier";
import { Produit } from "./models/Produit";
export const AppContext: Context<any> = createContext({
  catAndProd: null,
  paniers: null,
  produits: [],
  sCat: "",
});

async function getCats() {
  return await fetch("./api/categories.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
}

function App() {
  const [sCat, setSCat] = useState("");
  const [catAndProd, setCatAndProd] = useState<Categorie[]>([]);
  const [paniers, setPaniers] = useState<Panier[]>([]);
  const [produits, setProduits] = useState<Produit[]>([]);

  useEffect(() => {
    getCats()
      .then((response) => response.json())
      .then((listCats: Categorie[]) => {
        setCatAndProd(listCats);
        setSCat(listCats[0].nom);
        setProduits(listCats[0].produits);
      });
  }, []);

  useEffect(() => {
    const currentCat = catAndProd.find((cat) => cat.nom === sCat);
    setProduits(currentCat ? currentCat.produits : []);
  }, [sCat]);
  return (
    <div className="App">
      <Banner />
      <AppContext.Provider
        value={{ catAndProd, paniers, setPaniers, produits, sCat, setSCat }}
      >
        <Cards />
        <Contenu />
      </AppContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
