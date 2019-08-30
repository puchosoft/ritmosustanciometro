import React from "react";
import styled from "styled-components"; // Importamos `Styled Components`

import {carga, aparecerDeAbajo} from "./animaciones" // Importamos las animaciones

// Creamos un container de `styled.div` con unos estilos básicos, ancho, alto, margen, borde y alineamos el contenido al centro
const Container = styled.div`
width: 100%;
height: 36px;
margin: 6px 0;
display: flex;
align-items: center;
justify-content: center;
position: relative;
border: 1px solid gainsboro;

.barra {
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  background-color: hsl(${props => props.ritmosustancia}, 100%, 50%);
  width: ${props => props.ritmosustancia}%;
  animation: ${(props) => carga(props.ritmosustancia)} 1s ease-in-out;
  animation-fill-mode: forwards;
}

.cantidad {
  z-index: 1;
}
`
{/* Le pasamos el valor de `ritmosustancia` a nuestro container para poder usarlo en nuestros estilos */}
const Ritmosustanciometro = ({nombre, ritmosustancia}) => (
  <Container ritmosustancia={ritmosustancia}>
    {/* Creamos un `div` para mostrar el `nombre` y el valor de `ritmosustancia` y otro para mostrar la barra de nivel de `ritmosustancia`, les asignamos las clases que definimos mas arriba */}
    <div className="cantidad">{nombre}: {ritmosustancia}</div>
    <div className="barra" />
  </Container>
);

export default Ritmosustanciometro;
