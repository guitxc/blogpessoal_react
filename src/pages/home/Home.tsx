import ListaPostagens from "../../components/postagem/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem";

function Home() {
  return (
    <>
      {/* Container principal */}
      <div className="bg-indigo-900 flex justify-center">
        {/* Seção com duas colunas */}
        <div className="container grid grid-cols-1 text-white md:grid-cols-2">
          {/* Conteúdo de texto */}
          <div className="flex flex-col items-center justify-center gap-4 py-4">
            <h2 className="text-2xl font-bold md:text-5xl">
              Seja Bem Vinde!
            </h2>

            <p className="text-xl">
              Expresse aqui seus pensamentos
            </p>

            <div className="flex justify-around gap-4">
               <ModalPostagem />
            </div>
          </div>

          {/* Imagem da página Home */}
          <div className="flex justify-center">
            <img
              src="https://i.imgur.com/fyfri1v.png"
              alt="Imagem da página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>

      <ListaPostagens />
    </>
  );
}

export default Home;