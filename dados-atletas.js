class Atleta {

    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    };

    calculaCategoria() {
        let categoria = "";
        if (this.idade >= 9 && this.idade <= 11) {
            categoria = "Categoria: Infantil";
        }
        else if (this.idade >= 12 && this.idade <= 13) {
            categoria = "Categoria: Juvenil";
        }
        else if (this.idade >= 14 && this.idade <= 15) {
            categoria = "Categoria: Intermediário";
        }
        else if (this.idade >= 16 && this.idade <= 30) {
            categoria = "Categoria: Adulto";
        }
        else {
            categoria = "Categoria: Sem categoria";
        };
        return categoria;
    };

    calculaIMC() {
        let imc = `IMC: ${this.peso / (this.altura * this.altura)}`;
        return imc;
    };

    calculaMediaValida() {
        this.notas.sort(function(x, y) { return x - y});
        let notasDaMedia = this.notas.slice(1,4);
        let media = (notasDaMedia.reduce((x, y) => x + y)) / notasDaMedia.length;
        return media;
    };

    obtemNomeAtleta() {
        return this.nome;
    };

    obtemIdadeAtleta() {
        return this.idade;
    };

    obtemPesoAtleta() {
        return this.peso;
    };

    obtemAlturaAtleta() {
        return this.altura;
    };

    obtemNotasAtleta() {
        return this.notas;
    };

    obtemCategoria() {
        return this.calculaCategoria();
    };

    obtemIMC() {
        return this.calculaIMC();
    };

    obtemMediaValida() {
        return this.calculaMediaValida();
    };

};

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(atleta.obtemNomeAtleta());
console.log(atleta.obtemIdadeAtleta());
console.log(atleta.obtemPesoAtleta());
console.log(atleta.obtemAlturaAtleta());
console.log(atleta.obtemNotasAtleta());
console.log(atleta.obtemCategoria());
console.log(atleta.obtemIMC());
console.log(atleta.obtemMediaValida());