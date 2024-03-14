import React, { useState } from "react";
import { encriptador, desencriptador } from "../funtions/funtions";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Alert, Button, Modal } from "flowbite-react";
//mport AutoModal from "./Modal";

export default function Home() {
  const [modo, setModo] = useState("Texto encriptado");
  const [texto, setTexto] = useState("");
  const [textoEncriptado, setTextoEncriptado] = useState(
    "No se ha detectado ningun texto"
  );
  const [copiado, setCopiado] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const encriptarTexto = () => {
    setModo("Texto encriptado");
    setTextoEncriptado(encriptador(texto));
    setTexto("");
  };
  const handleChange = (event) => {
    const newValue = event.target.value;
    if (/[^A-Za-zÁÉÍÓÚÜÑ\s]/.test(newValue)) {
    } else {
      setTexto(newValue);
    }
  };

  const desencriptarTexto = () => {
    setModo("Texto desencriptado");
    setTextoEncriptado(desencriptador(texto));
    setTexto("");
  };

  const copyToClipboard = () => {
    setCopiado(true);
    setTimeout(() => setCopiado(false), 3000);
    setTextoEncriptado("No se ha detectado ningun texto");
  };

  const showModal = () => {
    setOpenModal(true);
  };
  return (
    <div className="flex m-2">
      <div className="w-1/4 bg-gray-200 p-4 grid items-center justify-center">
        <h1 className="text-xl font-bold mb-4">¿Cómo funciona?</h1>
        <p className="text-lg leading-7 text-justify">
          Ingresas los datos que quieres encriptar, ya sea una palabra, una
          frase o una nota, el sistema lo tomará, y lo encriptará usando las
          llaves de encriptación y luego te lo mostrará ya encriptado.
        </p>
        <p className="text-lg leading-7 mt-4 text-justify mb-4">
          Si ya tienes una frase encriptada, puedes volver a introducirla en el
          encriptador y luego desencriptarla.
        </p>

        <button
          onClick={showModal}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none flex items-center justify-center"
        >
          Reglas de uso
        </button>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Reglas de uso</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Este es un encriptador sencillo con el fin de aprender sobre
                logica de programación y encriptación de texto
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Va a funcionar solo con letras minúsculas
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                No deben ser utilizados letras con acentos ni caracteres
                especiales
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setOpenModal(false)}>Aceptar</Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="w-3/4 bg-white p-4 flex">
        <div className="flex-1 mr-4">
          <div className="justify-items-stretch flex flex-col h-full">
            <div className="flex-1 p-4 flex flex-col justify-between rounded-lg mb-4">
              <div>
                <h1 className="text-lg font-bold">Ingresa tu texto aquí</h1>
                <input
                  type="text"
                  className="border-none focus:border-none outline-none p-2 w-full active:border-none"
                  placeholder="Encriptemos!"
                  value={texto}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-between">
                <button
                  onClick={encriptarTexto}
                  type="button"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                >
                  Encriptar
                </button>
                <button
                  onClick={desencriptarTexto}
                  type="button"
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
                >
                  Desencriptar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-lg font-bold mt-4">{modo}</h1>
            <p className="text-lg font-bold m-4">{textoEncriptado}</p>
            {copiado && (
              <Alert className="items-center text-center">
                <span className="font-medium">Copiado!</span>
              </Alert>
            )}
          </div>
          <CopyToClipboard text={textoEncriptado} onCopy={copyToClipboard}>
            <button
              onClick={copyToClipboard}
              className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none self-center mt-4"
            >
              Copiar al portapapeles
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
}

/**
 *
 * 
 *  <section className="grid grid-cols-2 gap-4 h-full">
      <div className="shadow bg-white p-2 m-2 flex flex-col rounded-lg">
        <h1 className="text-xl font-bold mb-4">¿Cómo funciona?</h1>
        <p className="text-lg leading-7">
          Ingresas los datos que quieres encriptar, ya sea una palabra, una
          frase o una nota, el sistema lo tomará, y lo encriptará usando las
          llaves de encriptación y luego te lo mostrará ya encriptado.
        </p>
        <p className="text-lg leading-7 mt-4">
          Si ya tienes una frase encriptada, puedes volver a introducirla en el
          encriptador y luego desencriptarla.
        </p>
      </div>
      <div className="col-span-1 shadow bg-white p-2 m-2 flex flex-col rounded-lg">
        <div className="flex-1 p-4 flex flex-col justify-between rounded-lg">
          <div>
            <h1 className="text-lg font-bold">Ingresa tu texto aquí</h1>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Encriptemos!"
              value={texto}
            />
          </div>
          <div className="flex flex-col justify-end mt-4">
            <button
              onClick={encriptarTexto}
              type="button"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Encriptar
            </button>
            <button
              onClick={desencriptarTexto}
              type="button"
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none mt-2"
            >
              Desencriptar
            </button>
          </div>
        </div>
        <div className="flex-1 p-4">
          <h1 className="text-lg font-bold mb-4">{modo}</h1>
          <textarea
            rows=""
            cols=""
            placeholder="No se ha encontrado ningún texto"
            value={textoEncriptado}
            className="border border-gray-300 rounded-md p-2 my-2 flex-grow"
          ></textarea>
          <button className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none">
            Copiar al portapapeles
          </button>
        </div>
      </div>
    </section>
 */
