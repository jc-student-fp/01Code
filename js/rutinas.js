function fijarHora() {
    const fecha = new Date();    
    let cadena = fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds();
        
    document.getElementById('hora').innerText = cadena;        
}

window.addEventListener(
    'load',
    setInterval(() => fijarHora(), 10),
    false);