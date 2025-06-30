export interface Promocao {
    id: number;
    destino: string;
    imagem: string;
    preco: number;
}

export interface UnidadeFederativa {
    id: number;
    nome: string;
    sigla: string;
}

export interface User {
    id: number;
    nome: string;
    email: string;
    senha: string;
    dataNascimento: Date;
    telefone: string;
    cpf: string;
    endereco: {
        cidade: string;
        estado: string;
    };
    genero: 'Masculino' | 'Feminino' | 'Outro';
}