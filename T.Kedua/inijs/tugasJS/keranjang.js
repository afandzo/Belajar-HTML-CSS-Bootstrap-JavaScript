function jeruk() {
  let jmlhJeruk = parseInt(document.getElementById('jumlahJeruk').value);
  let total= jmlhJeruk * 2000;
  return total;
}

function mangga() {
  let jmlhMangga = parseInt(document.getElementById('jumlahMangga').value);
  let total= jmlhMangga * 5000;
  return total;
}

function durian() {
  let jmlhDurian = parseInt(document.getElementById('jumlahDurian').value);
  let total= jmlhDurian * 30000;
  return total;
}

function pepaya() {
  let jmlhPepaya = parseInt(document.getElementById('jumlahPepaya').value);
  let total= jmlhPepaya * 2000;
  return total;
}

function diskon() {
  let jmlhDiskon = document.getElementById('jumlahDiskon').value;
  let total= jmlhDiskon / 100;
  return total;
}

function jumlah() {
  let total = document.getElementById('totaljumlah');
  let totalharga = jeruk() + mangga() + durian() + pepaya();
  let diskonawal = totalharga * diskon();
  let totalsemua = totalharga - diskonawal;
  total.innerHTML= totalsemua;
}

//black and light background
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}