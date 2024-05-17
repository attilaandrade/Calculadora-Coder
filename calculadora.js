document.getElementById("select-banco1").addEventListener("change", atualizarOpcoesInvestimento1);
document.getElementById("select-banco2").addEventListener("change", () => {
    const periodoTotalMeses = parseInt(document.getElementById('periodo2').value);
    atualizarOpcoesInvestimento2();
    ajustarCamposDeEntrada(periodoTotalMeses);
});
document.getElementById("periodo2").addEventListener("input", () => {
    const periodoTotalMeses = parseInt(document.getElementById('periodo2').value);
    ajustarCamposDeEntrada(periodoTotalMeses);
});
document.getElementById("periodo1").addEventListener("keydown", validarNumeros);
document.getElementById("periodo2").addEventListener("keydown", validarNumeros);

function atualizarOpcoesInvestimento1() {
    const selectBanco1 = document.getElementById("select-banco1");
    const opcoesInvestimentoDiv1 = document.getElementById("opcoes-investimento1");
    const bancoSelecionado1 = selectBanco1.value;

    if (bancoSelecionado1) {
        opcoesInvestimentoDiv1.innerHTML = "";
        investimentos[bancoSelecionado1].forEach(investimento => {
            opcoesInvestimentoDiv1.innerHTML += `<input type="radio" name="opcao-investimento1" value="${investimento.juros}" style="margin-bottom: 10px;"> ${investimento.nome}<br>`;
        });
    } else {
        opcoesInvestimentoDiv1.innerHTML = "";
    }
}

function atualizarOpcoesInvestimento2() {
    const selectBanco2 = document.getElementById("select-banco2");
    const opcoesInvestimentoDiv2 = document.getElementById("opcoes-investimento2");
    const bancoSelecionado2 = selectBanco2.value;

    if (bancoSelecionado2) {
        opcoesInvestimentoDiv2.innerHTML = "";
        investimentos[bancoSelecionado2].forEach(investimento => {
            opcoesInvestimentoDiv2.innerHTML += `<input type="radio" name="opcao-investimento2" value="${investimento.juros}" style="margin-bottom: 10px;"> ${investimento.nome}<br>`;
        });
    } else {
        opcoesInvestimentoDiv2.innerHTML = "";
    }
}

function ajustarCamposDeEntrada(periodoMeses) {
    const valoresInvestimentoMensalDiv = document.getElementById("valores-investimento-mensal");
    valoresInvestimentoMensalDiv.innerHTML = "";

    for (let i = 1; i <= periodoMeses; i++) {
        valoresInvestimentoMensalDiv.innerHTML += `<div class="input-section">
            <label for="investimento-mes-${i}">Investimento no mês ${i}:</label>
            <input type="number" id="investimento-mes-${i}" placeholder="Valor do investimento no mês ${i}">
        </div>`;
    }
}

function validarNumeros(event) {
    if (!((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 37 || event.keyCode == 39)) {
        event.preventDefault();
    }
}

function simularInvestimento1() {
    const periodoMeses1 = parseInt(document.getElementById('periodo1').value);
    const valorInvestido1Input = document.getElementById('valor1');
    const valorInvestido1 = parseFloat(valorInvestido1Input.value.replace(/\./g, '').replace(',', '.'));
    const opcaoInvestimentoSelecionada1 = document.querySelector('input[name="opcao-investimento1"]:checked');

    if (!opcaoInvestimentoSelecionada1) {
        alert("Por favor, selecione um tipo de investimento.");
        return;
    }

    const jurosAnuais1 = parseFloat(opcaoInvestimentoSelecionada1.value);
    const valorFinal1 = calcularInvestimento1(valorInvestido1, jurosAnuais1, periodoMeses1);

    const valorFinalFormatado = valorFinal1.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    document.getElementById('resultado1').innerHTML = `O valor final do investimento será: <strong>${valorFinalFormatado}</strong>`;
    document.getElementById('resultado1').style.display = 'block';
}

function simularInvestimento2() {
    const periodoMeses2 = parseInt(document.getElementById('periodo2').value);
    const bancoSelecionado2 = document.getElementById("select-banco2").value;
    const opcaoInvestimentoSelecionada2 = document.querySelector('input[name="opcao-investimento2"]:checked');

    if (!opcaoInvestimentoSelecionada2) {
        alert("Por favor, selecione um tipo de investimento.");
        return;
    }

    const jurosAnuais2 = parseFloat(opcaoInvestimentoSelecionada2.value);
    let valoresMensais = [];

    for (let i = 1; i <= periodoMeses2; i++) {
        const valorInvestidoMes = parseFloat(document.getElementById(`investimento-mes-${i}`).value);
        if (isNaN(valorInvestidoMes)) {
            alert(`Por favor, insira um valor válido para o mês ${i}.`);
            return;
        }
        valoresMensais.push(valorInvestidoMes);
    }

    const valorFinal2 = calcularInvestimento2(valoresMensais, jurosAnuais2, periodoMeses2);

    const valorFinalFormatado2 = valorFinal2.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    document.getElementById('resultado2').innerHTML = `O valor final do investimento será: <strong>${valorFinalFormatado2}</strong>`;
    document.getElementById('resultado2').style.display = 'block';
}
