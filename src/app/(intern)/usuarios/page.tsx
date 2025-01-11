'use client'
import { IconPlus, IconUser } from '@tabler/icons-react'
import FormUsuario from '@/app/components/usuario/FormUsuario'
import ListaUsuario from '@/app/components/usuario/ListaUsuario'
import Pagina from '@/app/components/template/Pagina'
import Titulo from '@/app/components/template/Titulo'
import useUsuarios from '@/app/data/hooks/useUsuarios'

export default function Page() {
    const { usuario, usuarios, onSave, excluir, alterarUsuario } = useUsuarios()

    return (
        <Pagina className="flex flex-col gap-10">
            <Titulo icone={IconUser} principal="Usuários" secundario="Cadastro de usuários" />

            {usuario ? (
                <FormUsuario
                    usuario={usuario}
                    onChange={alterarUsuario}
                    onSave={onSave}
                    onCancel={() => alterarUsuario(null)}
                    excluir={excluir}
                />
            ) : (
                <>
                    <div className="flex justify-end">
                        <button
                            className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md"
                            onClick={() => alterarUsuario({})}
                        >
                            <IconPlus />
                            <span>Novo Usuário</span>
                        </button>
                    </div>
                    <ListaUsuario usuarios={usuarios} onClick={alterarUsuario} />
                </>
            )}
        </Pagina>
    )
}