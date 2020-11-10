const calcularfibonacci = () => {
    const numero = document.getElementById('numFib').value;

    const resultado = fibonacci(numero);

    const mostrar = document.getElementById('result');
    mostrar.innerHTML = `O valor da sequencia de fibonacci para o valor 
                        informado(${numero}) é: <strong>${resultado}</strong>`
}

const fibonacci = (fi) => {
    if (fi == 1) return 1;
    if (fi == 2) 
        return 2;
    return fibonacci(fi - 1) + fibonacci(fi - 2);
}