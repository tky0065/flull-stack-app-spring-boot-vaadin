import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import {Button} from "@nextui-org/react";
import {Fonctionalite} from "Frontend/components/Fonctionalite";
import {Tech} from "Frontend/components/Tech";
import {Link} from "react-router-dom";
import {Icon} from "@vaadin/react-components";

export const config: ViewConfig = { menu: { order: 0, icon: 'line-awesome/svg/home-solid.svg' }, title: 'Home' };


function CameraIcon() {
    return <Icon icon="vaadin:arrow-circle-right"/> ;
}

export default function HomeView() {
  return (
    <div className="flex flex-col h-screen  items-center p-l text-center box-border">
        <div>
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400"> Bienvenus
                sur L'application de gestion des Produits</h1>
        </div>
        <Fonctionalite/>
        <Tech/>
       <div className="mt-l">
           <Button color="success" endContent={<CameraIcon/>}>
               <Link to="/products" >Commencez</Link>
           </Button>
       </div>
    </div>
  );
}
