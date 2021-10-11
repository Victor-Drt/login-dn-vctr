import React from 'react'
import { Link } from 'react-router-dom'
import Main from '../template/Main'

export default props =>
    <Main icon='home' title='Início' subtitle='Apresentação do projeto'>
        <div className="display-4">
            Bem vindo!
        </div>
        <p>Clique <Link onClick={atualizaPag}>aqui</Link> para encerrar sessao.</p>
        <hr />
        <p className="mb-0">
            Cadastro de usuário para sistema DashBoard
        </p>
    </Main>

function atualizaPag() {
    window.open('http://localhost:3000/', '_top')
}