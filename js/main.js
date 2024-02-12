const botaoTema = document.getElementById('botaoTema'); //Botao de alterar o tema

botaoTema.addEventListener('click', alterarTema); //Adiciona ação ao botao de alterar o tema


// FUNÇÃO PARA ALTERAR O TEMA
function alterarTema(){
    const temaBody = document.getElementById('body');
    const linhaLateral = document.getElementById('linhaLateral');
    const colunaMenu = document.getElementById('colunaMenu');
    const nome = document.getElementById('nome');
    const linkProjetos = document.getElementById('linkProjetos');
    const linkContato = document.getElementById('linkContato');
    const linkSobre = document.getElementById('linkSobre');
    const colunaConteudo = document.getElementById('colunaConteudo');
    const botaoTema = document.getElementById('botaoTema');

    if(temaBody.classList.contains('fundo-dark')){
        //Body
        temaBody.classList.remove('fundo-dark');
        temaBody.classList.add('fundo-light');
        //Linha lateral
        linhaLateral.classList.remove('fundo-light');
        linhaLateral.classList.add('fundo-dark');
        //Coluna menu
        colunaMenu.classList.remove('fundo-dark');
        colunaMenu.classList.add('fundo-light');
        //Nome
        nome.classList.remove('fonte-dark');
        nome.classList.add('fonte-light');
        //Link Projeto
        linkProjetos.classList.remove('fonte-dark');
        linkProjetos.classList.add('fonte-light');
        //Link Contato
        linkContato.classList.remove('fonte-dark');
        linkContato.classList.add('fonte-light');
        //Link Sobre
        linkSobre.classList.remove('fonte-dark');
        linkSobre.classList.add('fonte-light');
        //Coluna conteudo
        colunaConteudo.classList.remove('fundo-dark');
        colunaConteudo.classList.add('fundo-light');
        //Botao tema
        botaoTema.classList.remove('btn-dark');
        botaoTema.classList.add('btn-light');
    }else if(temaBody.classList.contains('fundo-light')){
        //Body
        temaBody.classList.remove('fundo-light');
        temaBody.classList.add('fundo-dark');
        //Linha lateral
        linhaLateral.classList.remove('fundo-dark');
        linhaLateral.classList.add('fundo-light');
        //Coluna menu
        colunaMenu.classList.remove('fundo-light');
        colunaMenu.classList.add('fundo-dark');
        //Nome
        nome.classList.remove('fonte-light');
        nome.classList.add('fonte-dark');
        //Link Projeto
        linkProjetos.classList.remove('fonte-light');
        linkProjetos.classList.add('fonte-dark');
        //Link Contato
        linkContato.classList.remove('fonte-light');
        linkContato.classList.add('fonte-dark');
        //Link Sobre
        linkSobre.classList.remove('fonte-light');
        linkSobre.classList.add('fonte-dark');
        //Coluna conteudo
        colunaConteudo.classList.remove('fundo-light');
        colunaConteudo.classList.add('fundo-dark');

        //Botao tema
        botaoTema.classList.remove('btn-light');
        botaoTema.classList.add('btn-dark');
    }else{
        window.alert('Erro ao alterar o tema! Favor, entrar em contato com o desenvolvedor!')
    }
}