var saida = document.getElementById("saida");
var meses = [
"Janeiro",
"Fevereiro",
"Março",
"Abril",
"Maio",
"junho",
"julho",
"agosto",
"setembro",
"outubro",
"novembro",
"Dezembro",
];

for (var i = 0; i < meses.length; i += 1) {
    saida.innerHTML += meses [i] + "<br>"; 
}