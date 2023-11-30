//funções recursivas
function recursiva(max) {
    if (max > 200) return;
    console.log(max);
    max++
    recursiva(max);
}

recursiva(0);
