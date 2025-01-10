'use client'
import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import FormUsuario from "@/app/components/usuario/FormUsuario";
import ListaUsuario from "@/app/components/usuario/ListaUsuario";
import usuarios from "@/app/data/constants/usuarios";
import { Usuario } from "@/core/model/Usuario";
import { IconUser } from "@tabler/icons-react";
import { useState } from "react";

function onSave() {
    console.log('Salvar')
}

export default function Page() {
    const [usuario, setUsuario] = useState<Usuario>(usuarios[0]);
    return (

        < Pagina className="flex flex-col gap-10" >
            <Titulo icone={IconUser} principal="Usuarios" secundario="Lista Usuários" />
            {/* <ListaUsuario /> */}
            <FormUsuario
                usuario={usuario}
                onChange={setUsuario}
                onSave={onSave}
                onCancel={() => { }}
            />
        </Pagina >
    )
};
