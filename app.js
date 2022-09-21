'use strict'

const numeros = [2,5,7,45,23,120,30,80,0];
const nomes = ['Ana', 'Hugo', 'Pedro'];
const frutas = ['Uva', 'Morango', 'Melancia', 'Banana'];
const animais = ['Humanos', 'Águas-vivas', 'Esponjas', 'Minhocas', 'Golfinhos', 'Corais', 'Tênias', 'Esquistossomos', 'Lombriga', 'Oxiúro', 'Sanguessugas', 'Lulas', 'Ostras', 'Estrelas do mar', 'Ouriços do mar', 'Sardinas', 'Tubarões', 'Sapos', 'Pererecas', 'Rãs', 'Lagartos', 'Crocodilos', 'Cobras', 'Ema', 'Bems-te-vi', 'Pavão', 'Macacos', 'Baleias'];

//Problema: exibir os elementos do array no console.lgo
//Solução imperativa(while)

//const ultimoIndice = numeros.length - 1;
//let contador = 0;
//while(contador <= ultimoIndice){
//console.log(numeros[contador]);
//contador++;
//}

//Solução imperativa (for)

//const ultimoIndice = numeros.length -1;
//for(let contador = 0; contador <= ultimoIndice; contador++){
//    console.log(numeros[contador]);
//}

//Solução declarativa (forEach)
// const mostrarElementos = (numero) => console.log(numero)
// numeros.forEach(mostrarElementos)

// //Problema: Exibr os elementos no layout 

// const criarItems = (items) => {
//     const ul = document.querySelector('ul');
//     const div = document.createElement('div');
//     div.classList.add('items');
//     div.textContent = items
//     ul.appendChild(div)

// }
// numeros.forEach(criarItems);

const criarContainer = (titulo, array) => {
    const main = document.querySelector('main');
    const div = document.createElement('div');
    
    div.classList.add('array-container');
    div.innerHTML = `
        <h2>${titulo}</h2>
        <ul>
            <li class='items'>
                ${array.join("</li><li class='items'>")}
            </li>
        </ul>
    `
    main.appendChild(div);
}

criarContainer('Saúde!', numeros);
criarContainer('Saúde!', nomes);
criarContainer('Saúde!', frutas);
criarContainer('Saúde!', animais);