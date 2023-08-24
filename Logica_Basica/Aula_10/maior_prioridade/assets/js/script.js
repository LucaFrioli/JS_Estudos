const setDate = document.querySelector(`h1.titulo`);
const date = new Date();
setDate.innerHTML = date.toLocaleString(`pt-BR`, {dateStyle: "full",timeStyle: "medium"});