import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React, { useState } from 'react';
import getNextProducto from "./HTTP/GetNextProducto";
import insertarProducto from "./HTTP/InsertarProducto";

function CrearProducto() {
  const [hookTxtNProducto, setHookTxtNProducto] = useState('');
  const [hookTxtDProducto, setHookTxtDProducto] = useState('');
  const [hookTxtSProducto, setHookTxtSProducto] = useState('');
  const handleChangeNProducto = event => {
      setHookTxtNProducto(event.target.value);
      console.log("valor user ");
      console.log(hookTxtNProducto);
    };
  const handleChangeDProducto = event => {
      setHookTxtDProducto(event.target.value);
      console.log("valor user ");
      console.log(hookTxtDProducto);
    };
  const handleChangeSProducto = event => {
      setHookTxtSProducto(event.target.value);
      console.log("valor user ");
      console.log(hookTxtSProducto);
    };

  const   CrearProducto =   async event => {
      // console.log("NOMBRE PRODUCTO: ");console.log(hookTxtNProducto); console.log("DETALLE PRODUCTO: ");console.log(hookTxtDProducto);console.log("STOCK PRODUCTO: ");console.log(hookTxtSProducto);
      let idNextProducto = await getNextProducto();
      // console.log("id next  p");console.log(idNextProducto)
      insertarProducto(idNextProducto,hookTxtNProducto,hookTxtDProducto,hookTxtSProducto);
      return 0;
    };

    return (
      <div>
       <h4>Crear Producto</h4>
       <Popup trigger=
          {<button> Crear Producto </button>}
          position="right center">  
          <div>Crear Producto</div>

          <p>Nombre</p>
          <input
              type="text"
              id="txtNProducto"
              name="hookTxtNProducto"
              onChange={handleChangeNProducto}
              value={hookTxtNProducto}
          />
          <h2>Message: {hookTxtNProducto}</h2>

          <p>Detalle</p>
          <input
              type="text"
              id="txtDProducto"
              name="hookTxtDProducto"
              onChange={handleChangeDProducto}
              value={hookTxtDProducto}
          />
          <h2>Message: {hookTxtDProducto}</h2>

          <p>Stock</p>
          <input
              type="text"
              id="txtSProducto"
              name="hookTxtSProducto"
              onChange={handleChangeSProducto}
              value={hookTxtSProducto}
          />
          <h2>Message: {hookTxtSProducto}</h2>
          <button onClick={CrearProducto}>Crear</button>
       </Popup>
      </div>
    );
  }
  export default CrearProducto;
  