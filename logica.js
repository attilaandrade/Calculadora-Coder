// Dados dos investimentos
const investimentos = {
    "Bradesco": [
        { nome: "CDI/Selic - Simples Renda Fixa - 11,06%", juros: 11.06 },
        { nome: "Prefixado - Plus Renda Fixa - 10,42%", juros: 10.42 },
        { nome: "Multimercado - Macro Multimercado - 9,34%", juros: 9.34 }
    ],
    "Itaú": [
        { nome: "Diferenciado Crédito Privado Renda Fixa - 14,24%", juros: 14.24 },
        { nome: "Itaú Global Dinamico Renda Fixa Longo Prazo - 10,72%", juros: 10.72 },
        { nome: "Itaú IPCA Action Renda Fixa - 8,43%", juros: 8.43 }
    ],
    "Banco do Brasil": [
        { nome: "Renda Fixa Simples - 10,97%", juros: 10.97 },
        { nome: "Multimercado - Macro Multimercado Absolute Vertex - 15,77%", juros: 15.77 },
        { nome: "Renda Fixa LP Prefixado - 13,11%", juros: 13.11 }
    ]
};

/* Função para formatar o valor
function formatarNumero(input) {
    let valor = input.value.replace(/\D/g, '');
    valor = (valor / 100).toFixed(2) + '';
    valor = valor.replace('.', ',');
    valor = valor.replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
    input.value = valor;
}*/

// Função para calcular o valor final do investimento (Calculadora 1)
function calcularInvestimento1(valorInvestido, jurosAnuais, periodoMeses) {
    const jurosAoMes = jurosAnuais / 100 / 12;
    return valorInvestido * Math.pow(1 + jurosAoMes, periodoMeses);
}

// Função para calcular o valor final do investimento (Calculadora 2)
function calcularInvestimento2(valoresMensais, jurosAnuais, periodoMeses) {
    const jurosAoMes = jurosAnuais / 100 / 12;
    let totalInvestido = valoresMensais.reduce((acc, valor) => acc + valor, 0);
    return totalInvestido * Math.pow(1 + jurosAoMes, periodoMeses);
}
