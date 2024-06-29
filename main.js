// Função para calcular o saldo
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Função para determinar o nível baseado nas vitórias
function determinarNivel(vitorias) {
    if (vitorias < 10) {
        return 'Ferro';
    } else if (vitorias >= 11 && vitorias <= 20) {
        return 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
        return 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
        return 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
        return 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
        return 'Lendário';
    } else {
        return 'Imortal';
    }
}

// Função para obter dados do usuário
function obterDadosUsuario() {
    const vitorias = parseInt(prompt('Informe a quantidade de vitórias:'));
    const derrotas = parseInt(prompt('Informe a quantidade de derrotas:'));
    return { vitorias, derrotas };
}

// Função principal que executa o programa
function executarPrograma() {
    const { vitorias, derrotas } = obterDadosUsuario();
    if (isNaN(vitorias) || isNaN(derrotas) || vitorias < 0 || derrotas < 0) {
        console.log('Dados inválidos. Por favor, insira valores numéricos válidos.');
        return;
    }

    const saldoVitorias = calcularSaldo(vitorias, derrotas);
    const nivel = determinarNivel(vitorias);

    console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}

// Executar o programa
executarPrograma();
