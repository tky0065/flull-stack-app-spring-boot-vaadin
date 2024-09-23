import {Card, CardBody} from "@nextui-org/card";
import {Icon} from "@vaadin/react-components";

export  function Fonctionalite() {
    return <div className="mt-l">
        <span className="text-xl text-gray-50"> Les Fonctionalites de Application </span>

        <div className="flex flex-row items-center gap-xl mt-xl">

            <div className=" flex flex-col gap-5 ">
                <Card>
                    <CardBody>

                        <div className=" flex flex-row gap-5  justify-between">
                            <p>Gestion des Utilisateur</p>
                            <Icon icon="vaadin:user-check"/>
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <div className=" flex flex-row gap-5 justify-between ">
                            <p>Gestion des Roles</p>
                            <Icon icon="vaadin:external-browser"/>
                        </div>
                    </CardBody>
                </Card>
            </div>

            <div className=" flex flex-col gap-5 ">

                <Card>
                    <CardBody>

                        <div className="flex flex-row gap-5 justify-between ">
                            <p>Gestion des Products</p>
                            <Icon icon="vaadin:cube"/>
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <div className="flex flex-row gap-5 justify-between ">
                            <p>Gestion des Categories</p>
                            <Icon icon="vaadin:grid-big"/>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className=" flex flex-col gap-5 ">

                <Card>
                    <CardBody>

                        <div className="flex flex-row gap-5 justify-between">
                            <p>Gestion des Clients</p>
                            <Icon icon="vaadin:user-card"/>
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <div className="flex flex-row gap-5 justify-between ">
                            <p>Gestion des Fourniseurs</p>
                            <Icon icon="vaadin:wallet"/>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>


    </div>;
}