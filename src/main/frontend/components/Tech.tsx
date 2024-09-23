import {Card, CardBody} from "@nextui-org/card";
import {Icon} from "@vaadin/react-components";

export  function Tech() {
    return <div className="mt-l">
        <span className="text-2xl text-gray-50">Les Technologies de Developpement </span>

        <div className="flex flex-row items-center gap-xl mt-xl">

            <div className=" flex flex-col gap-5 ">
                <Card>
                    <CardBody>

                        <div className=" flex flex-row gap-5  justify-between">
                            <p>JAVA- Spring Boot</p>
                            <Icon icon="vaadin:coffee"/>
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <div className=" flex flex-row gap-5 justify-between ">
                            <p>Vaadin - hilla </p>
                            <Icon icon="vaadin:file-code"/>
                        </div>
                    </CardBody>
                </Card>
            </div>

            <div className=" flex flex-col gap-5 ">

                <Card>
                    <CardBody>

                        <div className="flex flex-row gap-5 justify-between ">
                            <p>NextUI</p>
                            <Icon icon="vaadin:code"/>
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <div className="flex flex-row gap-5 justify-between ">
                            <p>PostgresSQL</p>
                            <Icon icon="vaadin:database"/>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className=" flex flex-col gap-5 ">

                <Card>
                    <CardBody>

                        <div className="flex flex-row gap-5 justify-between">
                            <p>Docker</p>
                            <Icon icon="vaadin:cluster"/>
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