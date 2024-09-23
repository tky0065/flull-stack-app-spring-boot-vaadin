import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import {Chip, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip, user} from "@nextui-org/react";
import {effect, signal, useSignal} from "@vaadin/hilla-react-signals";
import CategorieDto from "Frontend/generated/com/enokdev/store/categorie/CategorieDto";
import {CategorieService} from "Frontend/generated/endpoints";
import {DeleteIcon} from "Frontend/components/DeleteIcon";
import {EditIcon} from "Frontend/components/EditIcon";
import {EyeIcon} from "Frontend/components/Eyelcon";
import React, {useEffect, useState} from "react";
import CategorieDtoModel from "Frontend/generated/com/enokdev/store/categorie/CategorieDtoModel";
import Categorie from "Frontend/generated/com/enokdev/store/categorie/Categorie";
import categorie from "Frontend/generated/com/enokdev/store/categorie/Categorie";

export const config: ViewConfig = {
  menu: { order: 2, icon: 'line-awesome/svg/align-justify-solid.svg' },
  title: 'Categorie',
  rolesAllowed: ['USER'],
};

export default function CategorieView() {

    const [categories, setCategories] = useState<CategorieDto[]>([]);
    const [loading, setLoading] = useState(true);

    async function fetchCategories() {
        const result = await CategorieService.getAllCategories();
        setCategories(result);
        setLoading(false); // Indiquer que les données ont été chargées
    }
    // Chargement des catégories une fois que le composant est monté
    useEffect(() => {

        fetchCategories();
        console.log(categories)
    }, []);





  return (
      <div className="flex flex-col h-full items-center  p-l text-center box-border">
          <div>
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400"> Bienvenus
                  Gestion des Categorie</h1>
          </div>
          {categories.map((categorie)=> (
              <h1>{categorie.nom}</h1>
          ))}

      </div>
  );
}
