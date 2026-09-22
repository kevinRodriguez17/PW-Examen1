function cotizar() {
    let resultado = 0;
    const precio = document.getElementById('precio').value;
    const cantidad = document.getElementById('cantidad').value;
    const envio = document.getElementById('envio').value;

    if(precio <= 0 || cantidad <= 0){
        console.log("El precio y la cantidad deben ser mayores a 0")
    }

    resultado = parseFloat(precio) * parseFloat(cantidad);
    resultado = resultado + parseFloat(envio);

    document.getElementById('resultado').innerHTML = resultado;
}