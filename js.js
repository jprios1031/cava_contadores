const BotonMenu = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

BotonMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  BotonMenu.classList.toggle("active");
});

document.getElementById("calcular").addEventListener("click", function () {
  let ingreso = Number(document.getElementById("ingreso").value);
  let deducciones = Number(document.getElementById("deducciones").value);
  let base = ingreso - deducciones;
  let valorUVT = 48000;
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
