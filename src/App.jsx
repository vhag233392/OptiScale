import jsPDF from "jspdf";
import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [valorIzq, setValorIzq] = useState(0);
  const [info, setInfo] = useState();
  const [cVi, setcVi] = useState(0);
  const [cNi, setcNi] = useState(0);
  const [eVi, seteVi] = useState(0);
  const [eNi, seteNi] = useState(0);
  const [valorDer, setValorDer] = useState(0);
  const [cVDer, setcVDer] = useState(0);
  const [cNDer, setcNDer] = useState(0);
  const [eVDer, seteVDer] = useState(0);
  const [eNDer, seteNDer] = useState(0);
  const [nombre, setNombre] = useState("");
  const fechaHoy = new Date();
  const dia = fechaHoy.getDay() - 1;
  const mes = fechaHoy.getMonth() + 1;
  const anio = fechaHoy.getFullYear();

  const calenidario = `${dia}/${mes}/${anio}`;
  const fecha = calenidario;

  const calcularAumento = (cilindroV, esferaV, cilindroN, esferaN) => {
    cilindroV = parseFloat(cilindroV);
    esferaV = parseFloat(esferaV);
    cilindroN = parseFloat(cilindroN);
    esferaN = parseFloat(esferaN);

    var pViejo = esferaV + cilindroV / 2;
    var pNuevio = esferaN + cilindroN / 2;

    console.log(pViejo);
    console.log(pNuevio);

    var pTotal = ((pNuevio - pViejo) / pViejo) * 100;

    return pTotal
  };

  const llamarFuncion = () => {
    console.log(calcularAumento(cVi, eVi, cNi, eNi).toFixed(2));
    console.log(calcularAumento(cVDer, eVDer, cNDer, eNDer).toFixed(2));

    setValorIzq(calcularAumento(cVi, eVi, cNi, eNi).toFixed(1));
    setValorDer(calcularAumento(cVDer, eVDer, cNDer, eNDer).toFixed(1));
  };

  const generarPDF = () => {
    const doc = new jsPDF();

    // Establece una variable para la posición inicial en Y
    let posY = 10; // Inicia en 10

    // Agrega texto a PDF
    doc.text(`Nombre: ${nombre}`, 10, posY);
    posY += 10;

    doc.text(`Fecha: ${fecha}`, 10, posY);
    posY += 10;

    doc.text(`Miopia/Hipermetropia Antes (Ojo Izquierdo): ${eVi}`, 10, posY);
    posY += 10;


    doc.text(`Astigmatismo Antes (Ojo Izquierdo): ${cVi}`, 10, posY);
    posY += 10;

    doc.text(`Miopia/Hipermetropia Ahora (Ojo Izquierdo): ${eNi}`, 10, posY);
    posY += 10;

    doc.text(`Astigmatismo Ahora (Ojo Izquierdo): ${cNi}`, 10, posY);
    posY += 10;

    doc.text(`Miopia/Hipermetropia Antes (Ojo Derecho): ${eVDer}`, 10, posY);
    posY += 10;

    doc.text(`Astigmatismo Antes (Ojo Derecho): ${cVDer}`, 10, posY);
    posY += 10;

    doc.text(`Miopia/Hipermetropia Ahora (Ojo Derecho): ${eNDer}`, 10, posY);
    posY += 10;

    doc.text(`Astigmatismo Ahora (Ojo Derecho): ${cNDer}`, 10, posY);
    posY += 10;


    doc.text(`Su ojo derecho cambio un ${valorDer}%`, 10, posY);
    posY += 10;
    doc.text(`Su ojo izquierdo cambio un ${valorIzq}%`, 10, posY);
    posY += 10;

    const lineasInfo = doc.splitTextToSize(info, 190);
    doc.text(lineasInfo, 10, posY);
    posY += lineasInfo.length * 10;

    doc.save(`datos_${nombre.toLowerCase()}.pdf`);
  };

  return (
    <div className="container">
      <p>Hoy es: {fecha}</p>

      <input
        className="inputNombre"
        type="text"
        placeholder="Nombre Completo"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      {/* - - - - - - - - - - - - --  */}

      <div class="flex-container">
  <div class="der">
    OD
    <div class="row">
      <br />
      <div>
      Miopia/Hipermetropia Antes
        <input className='input' type="number" placeholder='Miopia/Hipermetropia' value={eVDer} onChange={(e) => seteVDer(e.target.value)}/>
      </div>
      <div>
      Astigmatismo Antes
        <input className='input' type="number" placeholder='Astigmatismo' value={cVDer} onChange={(a) => setcVDer(a.target.value)}/>
      </div>
    </div>
    OI
    <div class="row">
      <div>
      Miopia/Hipermetropia Antes
        <input className='input' type="number" placeholder='Miopia/Hipermetropia' value={eVi} onChange={(b) => seteVi(b.target.value)}/>
      </div>
      <div>
      Astigmatismo Antes
        <input className='input' type="number" placeholder='Astigmatismo' value={cVi} onChange={(c) => setcVi(c.target.value)}/>
      </div>
    </div>
  </div>
  <div class="izq">
    OD
    <div class="row">
      <div>
      Miopia/Hipermetropia Ahora
        <input className='input' type="number" placeholder='Miopia/Hipermetropia' value={eNDer} onChange={(e) => seteNDer(e.target.value)}/>
      </div>
      <div>
      Astigmatismo Ahora
        <input className='input' type="number" placeholder='Astigmatismo' value={cNDer} onChange={(a) => setcNDer(a.target.value)}/>
      </div>
    </div>
    OI
    <div class="row">
      <div>
      Miopia/Hipermetropia Ahora
        <input className='input' type="number" placeholder='Miopia/Hipermetropia' value={eNi} onChange={(b) => seteNi(b.target.value)}/>
      </div>
      <div>
      Astigmatismo Ahora
        <input className='input' type="number" placeholder='Astigmatismo' value={cNi} onChange={(c) => setcNi(c.target.value)}/>
      </div>
    </div>
  </div>
</div>


{/* - - -  - - - - - - - - - - - - - - - - - - - -  */}
      <button className="rojo" onClick={llamarFuncion}>
        OBTENER RESULTADOS
      </button>

      <h1>OD Cambio <h1>{valorDer}%</h1></h1>
      <h1>OI Cambio <h1>{valorIzq}%</h1></h1>
      <p>{nombre}</p>
      <div className="pdf-container">
        <button className="buttonDownload" onClick={generarPDF}>
          GENERAR PDF
        </button>
        <textarea
          className="informacion"
          placeholder="Informacion"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
        />
      </div>

      <p>derecha = ojo derecho</p>
      <p>izquierdo = ojo izquierdo</p>
      <p>esfera = miopia/hipermetropia</p>
      <p>cilindro = astigmatismo</p>
    </div>
  );
}

export default App;
