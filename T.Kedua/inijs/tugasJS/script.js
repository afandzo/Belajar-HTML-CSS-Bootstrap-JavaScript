function luasPersegi() {
  let Sisi = parseInt(document.getElementById('sisi').value);
  let hasil = document.getElementById('luasPersegi');
  let luas = Sisi * Sisi;
  hasil.innerHTML= luas;
}


function luasPP() {
  let panjang = parseInt(document.getElementById('panjang').value);
  let lebar = parseInt(document.getElementById('lebar').value);
  let hasil = document.getElementById('luasPersegiPanjang');
  let luas = panjang * lebar;
  hasil.innerHTML= luas;
}


function luasLingkaran() {
  let jari = parseInt(document.getElementById('jari').value);
  let hasil = document.getElementById('luasLingkaran');
  let luas = Math.PI * Math.pow(jari,2);
  hasil.innerHTML= luas;
}

function luasSegitiga() {
  let alas = parseInt(document.getElementById('alas').value);
  let tinggi = parseInt(document.getElementById('tinggi').value);
  let hasil = document.getElementById('luasSegitiga');
  let luas = alas * tinggi / 2;
  hasil.innerHTML= luas;
}

// function bg() {
//   var pilih = document.getElementById('bg');
//   var body = document.getElementById('body');
//   if (pilih === true) {
//     body.style = 'background-color : black;';
//   }else if (pilih === false) {
//     body.style = 'background-color : white;';
//   }
// }

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}