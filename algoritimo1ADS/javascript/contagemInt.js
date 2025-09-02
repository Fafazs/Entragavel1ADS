//Questão 6
//Dado um conjunto de dados retorne os valores inteiros entre o primeiro elemento (inclusive) e o N-ésimo (inclusive)

function contarInt(dataset) {
    const inicio = dataset[0];
    const fim = dataset.length;

    let count = 0;
    for (let i = 0; i < dataset.length; i++) {
        if (Number.isInteger(dataset[i]) && dataset[i] >= inicio && dataset[i] <= fim) {
            count++;
        }
    }

    return count;
}

// Exemplo de uso:
const dados = [2, 3.5, 4, 5, 6, "texto", 7, 8.2, 9, 10];
console.log("Quantidade de valores inteiros é:", contarInt(dados));
