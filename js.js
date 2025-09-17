const BotonMenu = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

BotonMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  BotonMenu.classList.toggle("active");
});

const select = document.getElementById("herramienta");
const calculadoras = document.querySelectorAll(".calculadora");

select.addEventListener("change", function () {
  calculadoras.forEach((calc) => (calc.style.display = "none"));
  if (this.value) {
    document.getElementById(this.value).style.display = "block";
  }
});
//calculadora retefuente//

document.getElementById("calcular").addEventListener("click", function () {
  let ingreso = Number(document.getElementById("ingreso").value);
  let deducciones = Number(document.getElementById("deducciones").value);
  let base = ingreso - deducciones;
  const valorUVT = 49799;
  let baseUVT = base / valorUVT;
  function calculo(base, baseUVT) {
    let retencion = 0;
    if (baseUVT < 95) {
      retencion = 0;
    } else if (baseUVT >= 95 && baseUVT < 150) {
      retencion = base * 0.19;
    } else if (baseUVT >= 150 && baseUVT < 360) {
      retencion = base * 0.28;
    } else {
      retencion = base * 0.33;
    }
    return retencion;
  }
  let retencion = calculo(base, baseUVT);
  let neto = ingreso - retencion;

  document.getElementById("resultado").innerHTML = `
    <p><strong>Base gravable:</strong> ${base.toLocaleString()}</p>
    <p><strong>Base en UVT:</strong> ${baseUVT.toFixed(2)}</p>
    <p><strong>Retención:</strong> ${retencion.toLocaleString()}</p>
    <p><strong>Ingreso neto:</strong> ${neto.toLocaleString()}</p>
  `;
});

//calculadora uvt
const valorEnPesos = document.getElementById("valor");
const resultadoUVT = document.getElementById("resultado-uvt");
const botonConvertir = document.getElementById("ConvertirUVT");

botonConvertir.addEventListener("click", function () {
  let valorIngresoUvt = Number(valorEnPesos.value);

  let valorUvt = 49799;
  let Res_Uvt = valorIngresoUvt / valorUvt;

  resultadoUVT.innerHTML = `
    <p><strong>Valor ingresado:</strong> ${valorIngresoUvt.toLocaleString()}</p>
    <p><strong>Equivalente en UVT:</strong> ${Res_Uvt.toFixed(2)}</p>
  `;
});

//calculadora prima
// Calculadora Prima
const botonPrima = document.getElementById("calculoPrima");
const salarioInput = document.getElementById("salario");
const diasInput = document.getElementById("dias");
const resultadoPrima = document.getElementById("resultado-prima");

botonPrima.addEventListener("click", function () {
  let salario = Number(salarioInput.value);
  let dias = Number(diasInput.value);

  if (!salario || !dias || salario <= 0 || dias <= 0) {
    resultadoPrima.innerHTML =
      "<p style='color:red'>⚠️ Ingrese valores válidos.</p>";
    return;
  }

  let prima = (salario * dias) / 360;

  resultadoPrima.innerHTML = `
   <p><strong>Salario ingresado:</strong> $${salario.toLocaleString()}</p>
   <p><strong>Días trabajados:</strong> ${dias}</p>
   <p><strong>Prima a recibir:</strong> $${prima.toLocaleString(undefined, {
     minimumFractionDigits: 2,
     maximumFractionDigits: 2,
   })}</p>
  `;
});
