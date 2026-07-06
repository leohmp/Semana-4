class Tarefa {
    titulo: string;
    descricao: string;
    dataCriacao: Date;

    constructor(titulo: string, descricao: string) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.dataCriacao = new Date(); 
    }

    renderizar(): HTMLDivElement {
        const card = document.createElement('div');
        card.classList.add('tarefa-card');

       
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const conteudo = document.createElement('div');
        const dataFormatada = this.dataCriacao.toLocaleString('pt-BR');
        
        conteudo.innerHTML = `
            <strong>${this.titulo}</strong> - ${this.descricao} <br>
            <small>Criado em: ${dataFormatada}</small>
        `;

        
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                conteudo.classList.add('concluida');
            } else {
                conteudo.classList.remove('concluida');
            }
        });

        card.appendChild(checkbox);
        card.appendChild(conteudo);

        return card;
    }
}


const btnAdicionar = document.getElementById('btn-adicionar') as HTMLButtonElement;
const inputTitulo = document.getElementById('input-titulo') as HTMLInputElement;
const inputDescricao = document.getElementById('input-descricao') as HTMLInputElement;
const listaTarefas = document.getElementById('lista-tarefas') as HTMLElement;


btnAdicionar.addEventListener('click', () => {
    const titulo = inputTitulo.value;
    const descricao = inputDescricao.value;

    if (titulo.trim() !== '') {
        const novaTarefa = new Tarefa(titulo, descricao);
        
        listaTarefas.appendChild(novaTarefa.renderizar());

        inputTitulo.value = '';
        inputDescricao.value = '';
    } else {
        alert("O título é obrigatório!");
    }
});