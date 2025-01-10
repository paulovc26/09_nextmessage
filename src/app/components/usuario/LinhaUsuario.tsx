import { Usuario } from "@/core/model/Usuario";
import Image from "next/image";

export interface LinhaUsuarioProps {
    usuario: Usuario
}

function random() {
    return Math.floor(Math.random() * 100);
}

export default function LinhaUsuario(props: LinhaUsuarioProps) {
    return (
        <div className="flex bg-zinc-900 p-4 items-center gap-5 rounded-md">
            <Image
                src={"https://avatar.iran.liara.run/public/11"}
                width={80}
                height={80}
                className="rounded-full"
                alt="Avatar"
            />
            <div className="flex flex-col">
                <span className="text-xl font-black text-zinc-200">{props.usuario.nome}</span>
                <span className="text-sm text-zinc-400">{props.usuario.email}</span>
            </div>
        </div>
    );
};
