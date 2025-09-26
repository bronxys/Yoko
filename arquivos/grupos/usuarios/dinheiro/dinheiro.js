const fs = require("fs-extra")
const saldo = JSON.parse(fs.readFileSync("./arquivos/grupos/usuarios/dinheiro/dinheiro.json"));

const AdicionarNovoUsuario = (sender) => {
const obj = {id: sender, saldo : 500}
saldo.push(obj)
fs.writeFileSync('./arquivos/grupos/usuarios/dinheiro/dinheiro.json', JSON.stringify(saldo))
}
// Adicione esta função ao seu código
const RemoverSaldo = (sender, amount) => {
  let position = false;
  Object.keys(saldo).forEach((i) => {
    if (saldo[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    saldo[position].saldo -= amount;
    fs.writeFileSync('./arquivos/grupos/usuarios/dinheiro/dinheiro.json', JSON.stringify(saldo));
  }
};


const AdicionarSaldo = (sender, amount) => {
let position = false
Object.keys(saldo).forEach((i) => {
if (saldo[i].id === sender) {
position = i
}
})
if (position !== false) {
saldo[position].saldo += amount
fs.writeFileSync('./arquivos/grupos/usuarios/dinheiro/dinheiro.json', JSON.stringify(saldo))
}
}

const VerSaldo = (sender) => {
let position = false
Object.keys(saldo).forEach((i) => {
if (saldo[i].id === sender) {
position = i
}
})
if (position !== false) {
return saldo[position].saldo
}
} 

const ConfirmarPagamento = (sender, amount) => {
let position = false
Object.keys(saldo).forEach((i) => {
if (saldo[i].id === sender) {
position = i
}
})
if (position !== false) {
saldo[position].saldo -= amount
fs.writeFileSync('./arquivos/grupos/usuarios/dinheiro/dinheiro.json', JSON.stringify(saldo))
}
}

// Em dinheiro.js
module.exports = { AdicionarSaldo, RemoverSaldo, AdicionarNovoUsuario, VerSaldo, ConfirmarPagamento };
