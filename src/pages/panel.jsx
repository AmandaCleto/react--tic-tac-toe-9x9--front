import React from 'react';
import { Button, Select, Input, Modal, Card } from '../components';

export default function Panel() {
    return (
        <div className="app">
            <Card name="Caio o Oliveira"></Card>
            <Modal>
                <p>oi</p>

                <Card name="Caio o Oliveira"></Card>
                <Button>Botão de teste</Button>
                <Select />
                <Input label="Nome:" placeholder="Informe o seu nome" />
            </Modal>
        </div>
    );
}