export class Produto {
    id: number = 0;
    produto: string = "";
    descricao: string = "";
    foto: string = "";
    preco: string = "";
    constructor(id: number, produto: string, descricao: string, foto: string, preco:
        string) {
        this.id = id;
        this.produto = produto;
        this.descricao = descricao;
        this.foto = foto;
        this.preco = preco;
    }
}