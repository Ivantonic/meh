//---PRVI ZADATAK---
//pretvori sve 4 u nizu u 25 i napravi novi array s novim brojevima

var niz = [7, 4, 52, 10, 4, 5, 12, 1, 3, 6];

//napravi nov niz koji kopira vrednost starog niza ali ga ne menja
var noviNiz = niz.slice();

for (var i=0; i<=niz.length; i++){
// ako je vrednost u nizu 4, postaje 25
    if (niz[i] == 4) {
    	noviNiz[i] = 25;
    }
}

console.log('Stari niz sa cetvorkama je --- ' + niz);
console.log('Nov niz u kom cetvorke postaju dvadeset i pet je --- ' + noviNiz);

//---DRUGI ZADATAK---
//programcic koji proverava da li niz ima dva ista broja
//hint --- loop u loopu, nesting loops

var array = [5,4,9,7,4];

var output = sameValueCheck(array);
console.log(output);

function sameValueCheck(niz) {
for (var i = 0; i < niz.length; i++) {
	for(var  j = 0; j < niz.length; j++) {
		if((array[i] == array[j]) && i!=j) {
			return true;
		}
	}
}
return false;
}



//----TRECI ZADATAK----
//napravi program koji racuna sta mozes da poneses u zavisnosti od tvoje snage

// var prompt = check(prompt('Unesi tezinu prvog tega'),prompt('Unesi tezinu drugog tega'), prompt('Unesi tezinu koju mozes da podignes'))
var weights = check(4, 6, 5);

function check(weight1, weight2, maxWeight) {

//pretvaram stringove u brojeve
// weight1 = Number(weight1)
// weight2 = Number(weight2)
// maxWeight = Number(maxWeight)

//ako mozemo poneti oba
if (weight1 + weight2 <= maxWeight) {
	console.log('Mozes poneti oba tega.')
//ako ne mozemo poneti ni jedan
} else if (weight1 > maxWeight && weight2 > maxWeight) {
	console.log('Nemas snage da podignes ni jedan teg.');
//ako mozemo poneti samo prvu tezinu
} else if (maxWeight > weight2 && maxWeight < weight1) {
	console.log('Mozes podignuti samo prvi teg, ne drugi.');
//ako mozemo poneti samo drugu tezinu
} else if (maxWeight > weight1 && maxWeight < weight2) {
	console.log('Mozes podignuti samo drugi teg, ne prvi.')
//ako mozemo da ponesemo obe tezine posebno ali ne zajedno
} else if (weight1 <= maxWeight && weight2 <= maxWeight) {
	console.log('Mozes da biras koji teg ces da podignes, ali ne mozes oba.')
}

}