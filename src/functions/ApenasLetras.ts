export default function ApenasLetras() {
    
    const elemento = document.getElementById('curso') as HTMLInputElement;
    
    let valor = elemento.value;
    
    let letras = valor.split('')

    letras.forEach((caracter, i) => {
        
        let charCode = caracter.charCodeAt(0)

        if (!((charCode > 64 && charCode < 91) ||
            (charCode > 96 && charCode < 123) ||
            (charCode > 191 && charCode <= 255))){ // letras com acentos)
            
            letras.splice(i, 1)
            
    
        }
    });

    
    elemento.value = letras.join('');    
    
    /* try {
        if (window.event) {
            var charCode = window.event.keyCode;
        } else if (e) {
            var charCode = e.which;
        } else {
            return true;
        }
        if (
            (charCode > 64 && charCode < 91) ||
            (charCode > 96 && charCode < 123) ||
            (charCode > 191 && charCode <= 255) // letras com acentos
        ) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        alert(err.Description);
    } */
}