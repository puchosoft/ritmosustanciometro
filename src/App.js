import React, { useState } from 'react';
import axios from 'axios';  // Importamos Axios
import styled from "styled-components" // Importamos `Styled Components`

import Ritmosustanciometro from './Ritmosustanciometro';

// Creamos un container de `styled.div` con unos estilos básicos
const Container = styled.div`
  width: 100%;
  max-width: 640px;
`

function App() {
  const [nombre, setNombre] = useState('');
  const [individuos, setIndividuos] = useState([
    {
    nombre: 'goncy',
    ritmosustancia: 100
    }
  ]);

  // Creamos una función `actualizarNombre`
  function actualizarNombre(event) {
    // Guardamos en `nombre` lo que escribimos en el campo, lo obtenemos de `event.target.value`
    setNombre(event.target.value)
  }

  // Creamos una función `async` `obtenerRitmosustancia`
  async function obtenerRitmosustancia(event) {
    event.preventDefault(); // Evitamos que la aplicación se recargue por el `submit` del `form`

    // Hacemos un fetch a nuestro `endpoint` para obtener un valor de `ritmosustancia`
    const ritmosustancia = await axios("https://wt-3581e5a0e6c19bb4a0552203b2738a9d-0.run.webtask.io/obtener-ritmosustancia").then(res => res.data)

    // Usando `concat` agregamos un nuevo individuo al `array` de `individuos` que ya tenemos en nuestro `state`, pasando el `nombre` de nuestro `state` y el valor de `ritmosustancia` que nos devolvió el servidor
    setIndividuos(
      individuos.concat({
        nombre,
        ritmosustancia
      })
    )
    setNombre(''); // Reiniciamos el valor de nombre
  }

  return (
    <div>
      <h1>Ritmosustanciometro</h1>
      {/* Usamos `map` para iterar sobre cada individuo de nuestra lista de individuos y creamos un `Ritmosustanciometro por cada individuo, pasando el `nombre` y el valor de `ritmosustancia` por `props` */}
      {individuos.map((individuo) =>
        <Ritmosustanciometro
          nombre={individuo.nombre}
          ritmosustancia={individuo.ritmosustancia}
        />
      )}
      {/* Agregamos nuestro formulario con un campo de texto y un botón */}
      <form onSubmit={obtenerRitmosustancia}>
        {/* con `onChange` le decimos a `React` que ejecute una función cada vez que haya un cambio de valor en el campo. Con `value` le decimos que queremos que el valor del campo siempre sea el valor que le pasemos, por lo tanto, al actualizar el campo, se va a reemplazar nuestro estado, y ese estado va a ser el nuevo valor de nuestro campo */}
        <input type="text" onChange={actualizarNombre} value={nombre} />
        <button type="submit">Obtener ritmosustancia</button>
      </form>
    </div>
  );
}

export default App;
