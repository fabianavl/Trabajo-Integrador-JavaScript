const resumen = document.getElementById('btn-resumen');

resumen.addEventListener('click', () => {
    const valorTicket = 200;
    const cantidadTicket = document.getElementById('cantidadTicket');
    const categoria = document.getElementById('categoria');
    const totalPago = document.getElementById('totalPago');

    if (categoria.value == "estudiante") {
        totalPago.innerHTML = "Total a Pagar: $ " + (cantidadTicket.value * valorTicket * 0.2);
    } else if (categoria.value == "trainee") {
        totalPago.innerHTML = "Total a Pagar: $ " + (cantidadTicket.value * valorTicket * 0.5);
    } else if (categoria.value == "junior") {
        totalPago.innerHTML = "Total a Pagar: $ " + (cantidadTicket.value * valorTicket * 0.85);
    };
});


const borrar = document.getElementById('btn-borrar');

borrar.addEventListener('click', () => {
    const cantidadTicket = document.getElementById('cantidadTicket');
    const totalPago = document.getElementById('totalPago');
    
    cantidadTicket.value = "";
    totalPago.innerHTML = "Total a Pagar: $ "; 
}) 


