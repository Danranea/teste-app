export default function FormatarMoeda(id: string) {

    var elemento = document.getElementById(id) as HTMLInputElement;
    var valor = elemento.value;

    valor = valor + '';
    const valorInt = parseInt(valor.replace(/[\D]+/g, ''));
    valor = valorInt.toString();

    if (!isNaN(valorInt)) {
        /* valor = valor + ''; */
        valor = valor.replace(/([0-9]{2})$/g, ",$1");
    } else {
        valor = '';
    }

    elemento.value = valor;
}