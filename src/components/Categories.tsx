import { useContext, useState } from "react";
import { AppContext } from "../App";
import { Categorie } from "../models/Category";

export default function Categories(): JSX.Element {
  const {
    catAndProd,
    sCat,
    setSCat,
  }: { catAndProd: Categorie[]; sCat: string; setSCat: Function } =
    useContext(AppContext);
  const change = (event: any) => {
    setSCat(event.target.value);
  };
  const reinit = () => {
    setSCat(catAndProd[0]?.nom);
  };
  return (
    <div style={{ width: "100%" }}>
      <select onChange={change} value={sCat}>
        {catAndProd.map((category, key) => {
          return (
            <option key={key} value={category.nom}>
              {category.nom}
            </option>
          );
        })}
      </select>
      <button onClick={reinit}>Reinitialiser</button>
    </div>
  );
}
