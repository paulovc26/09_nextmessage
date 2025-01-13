import Pagina from "./components/template/Pagina";

export default function Home() {
  return (
    <>
      <Pagina>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold  py-5">Seja Bem vindo!</h1>
          <h4 className="text-xl py-5">Aqui eu farei varios CRUD's, testes e de tudo um pouco.</h4>
        </div>
      </Pagina>
    </>
  )
}
