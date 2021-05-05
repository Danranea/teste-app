export default function FormatarMoeda() {

    var elemento = document.getElementById('valor');
    var valor = elemento.value;

    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));

    if (!isNaN(valor)) {
        valor = valor + '';
        valor = valor.replace(/([0-9]{2})$/g, ",$1");


    } else {
        valor = '';
    }

    elemento.value = valor;
}