"use strict";
class Tarefa {
    titulo;
    descricao;
    dataCriacao;
    constructor(titulo, descricao) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.dataCriacao = new Date();
    }
    renderizar() {
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
            }
            else {
                conteudo.classList.remove('concluida');
            }
        });
        card.appendChild(checkbox);
        card.appendChild(conteudo);
        return card;
    }
}
const btnAdicionar = document.getElementById('btn-adicionar');
const inputTitulo = document.getElementById('input-titulo');
const inputDescricao = document.getElementById('input-descricao');
const listaTarefas = document.getElementById('lista-tarefas');
btnAdicionar.addEventListener('click', () => {
    const titulo = inputTitulo.value;
    const descricao = inputDescricao.value;
    if (titulo.trim() !== '') {
        const novaTarefa = new Tarefa(titulo, descricao);
        listaTarefas.appendChild(novaTarefa.renderizar());
        inputTitulo.value = '';
        inputDescricao.value = '';
    }
    else {
        alert("O título é obrigatório!");
    }
});
