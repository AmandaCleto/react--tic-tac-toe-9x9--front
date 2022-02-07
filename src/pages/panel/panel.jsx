import React from "react";
import { useContext } from "react";
import {
    Button,
    Select,
    Input,
    Modal,
    Card,
    CustomText,
} from "../../components";

export default function Panel() {
    return (
        <div className="app">
            <Card name="Caio o Oliveira"></Card>

            <Modal>

                <CustomText
                    priority="2"
                    style={{
                        marginBottom: "30px",
                    }}
                >
                    Cadastro de jogadores
                </CustomText>
                <CustomText
                    priority="3"
                    style={{
                        marginBottom: "10px",
                        display: "flex",
                        alignSelf: "flex-start",
                    }}
                >
                    jogador #01
                </CustomText>

                <Card
                    name="Caio o Oliveira"
                    style={{
                        marginBottom: "40px",
                    }}
                ></Card>
                <Input label="Nome:" placeholder="Informe o nome do jogador" />
                <Button>Próximo jogador</Button>
            </Modal>
        </div>
    );
}
