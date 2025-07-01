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
    nome: string;
    email: string;
    senha: string;
    dataNascimento: Date | null;
    telefone: string;
    cpf: string;
    cidade: string;
    endereco: UnidadeFederativa;
    genero: 'Masculino' | 'Feminino' | 'Outro';
}