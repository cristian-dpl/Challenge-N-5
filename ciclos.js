// ** Ejercicio # 1 ** 


const cantidadDeGatos = 10;

for (let i = 1; i <= cantidadDeGatos; i++) {
    const modulo = i % 3
    let gato = (`Gato # ${i}`);

    if (modulo === 1) {
        gato = `${gato} 😺`;
    }else if(modulo === 2) {
        gato = `${gato} 😸`;
    }else{
        gato = `${gato} 😹`;
    }
    console.log(gato);
}



// ** Ejercicio # 2 ** 


// const numeroDegatos = 8;
// const numeroDepasos = 10;

// for (let i = 1; i <= numeroDegatos; i++) {
//     const gatos = "Gatos #";
//     const cat = `${gatos} ${i} 🐈`;
//     let catSteps = cat
    
//     for (let a = 1; a < numeroDepasos; a++) {
//         catSteps = `${catSteps} 🐾`;
        
//     }
//     console.log(catSteps)
// }



// ** Ejercicio # 3 ** 


// const numeroDegatos = 3;
// const numeroDepasos = 7;

// for (let i = 1; i <= numeroDegatos; i++) {
//     const gatos = "Gatos #";
//     const cat = `${gatos} ${i} `;
//     let catSteps = cat

//     if (i % 2) {
//         catSteps = `${cat} "🐈"`
//     }else{
//         catSteps = `${cat} "🐈‍⬛"`
//     }
    
//     for (let a = 0; a < numeroDepasos; a++) {
//         catSteps = `${catSteps} 🐾`;
        
//     }
//     console.log(catSteps)
// }
