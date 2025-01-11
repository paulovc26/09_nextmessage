"use client"
import { Usuario } from "@/core/model/Usuario";
import Image from "next/image";

export interface LinhaUsuarioProps {
    usuario: Usuario
    onClick?: (usuario: Usuario) => void;
}


export default function LinhaUsuario(props: LinhaUsuarioProps) {
    return (
        <div className="flex bg-zinc-200 p-4 items-center gap-5 rounded-md cursor-pointer"
            onClick={() => props.onClick?.(props.usuario)}>

            <Image
                src={"https://avatar.iran.liara.run/public/11"}
                width={80}
                height={80}
                className="rounded-full"
                alt="Avatar"
            />
            <div className="flex flex-col">
                <span className="text-xl font-black text-zinc-600">{props.usuario.nome}</span>
                <span className="text-sm text-zinc-400">{props.usuario.email}</span>
            </div>
        </div>
    );
};
