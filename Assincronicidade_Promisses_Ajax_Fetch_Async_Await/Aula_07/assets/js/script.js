// async function rescue() {
//     try {
//         const resp = await fetch(`peapoles.json`);
//         if (resp.status !== 200) throw new Error(`Página de info não foi encontrada`);
//         const content = await resp.json()//podemos ja converter para json
//         displayPepaoles(content);
//     } catch (e) {
//         console.warn(e);
//     }
// }

axios(`peapoles.json`).then(resp=> displayPepaoles(resp.data));//sendo utilizado via cdn

function displayPepaoles(array) {
    const display = document.querySelector(`div.display`);
    array.forEach(element => {
        display.innerHTML += `Nome : ${element.nome} ${element.sobrenome}<br>
        Idade : ${element.idade}<br>
        Email: ${element.email}
        <br><br>`
    });
}


// rescue();
