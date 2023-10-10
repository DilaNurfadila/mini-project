// document.querySelector(".triangle-area").innerHTML = `<h1>test</h1>`;

let r_ca = document.querySelector(".r-ca");
let r_cp = document.querySelector(".r-cp");
let a_tp = document.querySelector(".a-tp");
let a_ta = document.querySelector(".a-ta");
let a_pa = document.querySelector(".a-pa");
let a_pp = document.querySelector(".a-pp");
let b_tp = document.querySelector(".b-tp");
let b_pp = document.querySelector(".b-pp");
let c_tp = document.querySelector(".c-tp");
let t_ta = document.querySelector(".t-ta");
let t_pa = document.querySelector(".t-pa");

const triangle = document.querySelector(".triangle");
const circle = document.querySelector(".circle");
const parallelogram = document.querySelector(".parallelogram");

// Area
// Triangle
document.querySelector(".btn-count-ta").addEventListener("click", () => {
  const luasSegitiga = (parseInt(a_ta.value) * parseInt(t_ta.value)) / 2;
  document.querySelector(".result-ta").setAttribute("value", luasSegitiga);
});

document.querySelector(".btn-reset-ta").addEventListener("click", () => {
  document.querySelector(".a-ta").value = "";
  // document.querySelector(".a-ta").setAttribute("value", "");
  // document.getElementById("alas").value = "";
  document.querySelector(".t-ta").value = "";
  document.querySelector(".result-ta").setAttribute("value", "");
});

// Circle
document.querySelector(".btn-count-ca").addEventListener("click", () => {
  const luasLingkaran = 3.14 * Math.pow(parseInt(r_ca.value), 2);
  const luasLingkaran7 = (Math.pow(parseInt(r_ca.value), 2) / 7) * 22;
  if (r_ca.value % 7 === 0) {
    document.querySelector(".result-ca").setAttribute("value", luasLingkaran7);
  } else {
    document.querySelector(".result-ca").setAttribute("value", luasLingkaran);
  }
});

document.querySelector(".btn-reset-ca").addEventListener("click", () => {
  document.querySelector(".r-ca").value = "";
  document.querySelector(".result-ca").setAttribute("value", "");
});

// Parallelogram
document.querySelector(".btn-count-pa").addEventListener("click", () => {
  const luasJajargenjang = parseInt(a_pa.value) * parseInt(t_pa.value);
  document.querySelector(".result-pa").setAttribute("value", luasJajargenjang);
});

document.querySelector(".btn-reset-pa").addEventListener("click", () => {
  document.querySelector(".a-pa").value = "";
  document.querySelector(".t-pa").value = "";
  document.querySelector(".result-pa").setAttribute("value", "");
});

// Perimeter
// Triangle
document.querySelector(".btn-count-tp").addEventListener("click", () => {
  const kelSegitiga =
    parseInt(a_tp.value) + parseInt(b_tp.value) + parseInt(c_tp.value);
  document.querySelector(".result-tp").setAttribute("value", kelSegitiga);
});

document.querySelector(".btn-reset-tp").addEventListener("click", () => {
  document.querySelector(".a-tp").value = "";
  document.querySelector(".b-tp").value = "";
  document.querySelector(".c-tp").value = "";
  document.querySelector(".result-tp").setAttribute("value", "");
});

// Circle
document.querySelector(".btn-count-cp").addEventListener("click", () => {
  const kelLingkaran = 2 * 3.14 * r_cp.value;
  const kelLingkaran7 = 2 * ((r_cp.value / 7) * 22);
  if (r_cp.value % 7 === 0) {
    document.querySelector(".result-cp").setAttribute("value", kelLingkaran7);
  } else {
    document.querySelector(".result-cp").setAttribute("value", kelLingkaran);
  }
});

document.querySelector(".btn-reset-cp").addEventListener("click", () => {
  document.querySelector(".r-cp").value = "";
  document.querySelector(".result-cp").setAttribute("value", "");
});

// Parallelogram
document.querySelector(".btn-count-pp").addEventListener("click", () => {
  const kelJajargenjang = 2 + (parseInt(a_pp.value) + parseInt(b_pp.value));
  document.querySelector(".result-pp").setAttribute("value", kelJajargenjang);
});

document.querySelector(".btn-reset-pp").addEventListener("click", () => {
  document.querySelector(".a-pp").value = "";
  document.querySelector(".b-pp").value = "";
  document.querySelector(".result-pp").setAttribute("value", "");
});

// ===========================================================

// add-remove classList
// Triangle
document.querySelector(".triangle").addEventListener("click", () => {
  triangle.classList.add("active");
  circle.classList.remove("active");
  parallelogram.classList.remove("active");

  // Area
  document.querySelector(".triangle-area").classList.add("box-active");
  document.querySelector(".circle-area").classList.remove("box-active");
  document.querySelector(".parallelogram-area").classList.remove("box-active");

  // Perimeter
  document.querySelector(".triangle-perimeter").classList.add("box-active");
  document.querySelector(".circle-perimeter").classList.remove("box-active");
  document
    .querySelector(".parallelogram-perimeter")
    .classList.remove("box-active");
});

// Circle
document.querySelector(".circle").addEventListener("click", () => {
  triangle.classList.remove("active");
  circle.classList.add("active");
  parallelogram.classList.remove("active");

  // Area
  document.querySelector(".triangle-area").classList.remove("box-active");
  document.querySelector(".circle-area").classList.add("box-active");
  document.querySelector(".parallelogram-area").classList.remove("box-active");

  // Perimeter
  document.querySelector(".triangle-perimeter").classList.remove("box-active");
  document.querySelector(".circle-perimeter").classList.add("box-active");
  document
    .querySelector(".parallelogram-perimeter")
    .classList.remove("box-active");
});

// Parallelogram
document.querySelector(".parallelogram").addEventListener("click", () => {
  triangle.classList.remove("active");
  circle.classList.remove("active");
  parallelogram.classList.add("active");

  // Area
  document.querySelector(".triangle-area").classList.remove("box-active");
  document.querySelector(".circle-area").classList.remove("box-active");
  document.querySelector(".parallelogram-area").classList.add("box-active");

  // Perimeter
  document.querySelector(".triangle-perimeter").classList.remove("box-active");
  document.querySelector(".circle-perimeter").classList.remove("box-active");
  document
    .querySelector(".parallelogram-perimeter")
    .classList.add("box-active");
});
