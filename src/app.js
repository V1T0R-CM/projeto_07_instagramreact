function Topbar(){
    return (
        <div class="topo">
            <div class="caixa-topo">
                <div class="caixa-logo">
                    <ion-icon name="logo-instagram" class="icones"></ion-icon>
                    <div class="barra-vertical"></div>
                    <img class="logo" src="./image/logo.png" />
                </div>
                <div class="caixa-pesquisa">
                    <h4>Pesquisar</h4>
                </div>
                <div class="caixa-menu">
                    <ion-icon name="paper-plane-outline" class="icones"></ion-icon>
                    <ion-icon name="compass-outline" class="icones"></ion-icon>
                    <ion-icon name="heart-outline" class="icones"></ion-icon>
                    <ion-icon name="person-outline" class="icones"></ion-icon>
                </div>
            </div>
            <div class="caixa-topo-mobile">
                <ion-icon name="logo-instagram" class="icones"></ion-icon>
                <img class="logo" src="./image/logo.png" />
                <ion-icon name="paper-plane-outline" class="icones"></ion-icon>
            </div>
        </div>
    )
}

function Storie(props){
    return (<div class="stories"><img class="fundo-stories"src="./image/stories_background.png" /><img class="imagem-stories"src={props.route}/><h3>{props.name}</h3></div>)
}


function Stories(){
    return (
        <div class="box-stories">
            <Storie route="./image/storiesakashi.jpg" name="akashi_cruz" />
            <Storie route="./image/stories7mz.PNG" name="7mzoficial" />
            <Storie route="./image/storiesdriven.PNG" name="driven.edu..." />
            <Storie route="./image/storiesenygma.PNG" name="dillenygma" />
            <Storie route="./image/storieszin.PNG" name="instazin" />
            <Storie route="./image/storiesmistery.PNG" name="mistery.off..." />
            <Storie route="./image/storiesspotted.PNG" name="spotted.ufrj" />
            <Storie route="./image/storiesmh.PNG" name="mhrapoficial" />
            <ion-icon class="vetor-stories"name="chevron-forward-circle-sharp"></ion-icon>
        </div>
    )
}

function Post(props){
    return (
        <div class="post">
            <div class="topo-post">
                <div class="perfil-post">
                    <img src={props.perfilimg}/>
                    <h1>{props.perfilname}</h1>
                </div>
                <ion-icon name="ellipsis-horizontal" class="icones"></ion-icon>
            </div>
            <img src={props.postimg}/>
            <div class="acoes-post">
                <div class="acoes-dir">
                    <ion-icon name="heart-outline" class="icones"></ion-icon>
                    <ion-icon name="chatbubble-outline" class="icones"></ion-icon>
                    <ion-icon name="paper-plane-outline" class="icones"></ion-icon>
                </div>
                <ion-icon name="bookmark-outline" class="icones"></ion-icon>
            </div>
            <div class="reacoes-post">
                <img src={props.reacoesimg}/>
                <h5>Curtido por <strong>{props.reactname}</strong> e <strong>outras {props.numlike} pessoas</strong></h5>
            </div>
        </div>
    )
}

function Posts(){
    return (
        <div class="posts">
            <Post perfilimg="./image/img-perfil-post1.PNG" perfilname="lele_fariaas" postimg="./image/img-post1.jpg" reacoesimg="./image/img-perfil-post2.PNG" reactname="laiissgomes" numlike="75.849" />
            <Post perfilimg="./image/img-perfil-post2.PNG" perfilname="laiissgomes" postimg="./image/img-post2.jpg" reacoesimg="./image/img-perfil-post3.PNG" reactname="mais_um_poeta_qualquer" numlike="74.154" />
            <Post perfilimg="./image/img-perfil-post3.PNG" perfilname="mais_um_poeta_qualquer" postimg="./image/img-post3.jfif" reacoesimg="./image/img-perfil-post4.PNG" reactname="turleme93" numlike="6.443" />
            <Post perfilimg="./image/img-perfil-post4.PNG" perfilname="turtleme93" postimg="./image/img-post4.jpg" reacoesimg="./image/img-rios.PNG" reactname="eu.riuus" numlike="55.963" />
        </div>
    )
}

function Sugest(props){
    return(
        <div class="sugestao">
            <div class="perfil-sugestao">
                <img src={props.route}/>
                <div class="perfil-texto"> 
                    <h1>{props.perfil}</h1> 
                    <h4>{props.name}</h4>
                </div>
            </div>
            <h4 class="seguir">Seguir</h4>
        </div>
    )
}

function Sidebar(){
    return (
        <div class="coluna-dir">
            <div class="caixa-dir">
            <div class="perfil">
                <img src="./image/img-perfil.png"/>
                <div class="perfil-texto">
                    <h1>
                        v1t0r_cm
                    </h1>
                    <h4>
                        Vitor Carvalho Matos
                    </h4>
                </div>
            </div>
            <div class="titulo-sugestao">
                <h4>Sugestões para você</h4>
                <h3>Ver tudo</h3>
            </div>
            <div class="sugestao">
                <div class="perfil-sugestao">
                    <img src="./image/trybe.PNG"/>
                    <div class="perfil-texto"> 
                        <h1>betrybe</h1> 
                        <h4>Trybe</h4>
                    </div>
                </div>
                <h4 class="seguir">Seguir</h4>
            </div>
            <Sugest route="./image/trybe.PNG" perfil="betrybe" name="Trybe" />
            <Sugest route="./image/ironhack.PNG" perfil="ironhack" name="Ironhack - Tech School" />
            <Sugest route="./image/rocketseat.PNG" perfil="rocketseat_oficial" name="Rocketseat" />
            <Sugest route="./image/onebit.PNG" perfil="onebitcode" name="Leonardo Scorza | OneBitCode" />
            <Sugest route="./image/kenZie.PNG" perfil="kenzieacademy" name="Kenzie Academy" />
            <h6>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</h6>
            <h6>© 2021 INSTAGRAM DO FACEBOOK</h6>
            </div>
        </div>
    )
}

function Footerbar(){
    return (
        <div class="baixo">
            <div class="caixa-baixo-mobile">
                <ion-icon name="home" class="icones"></ion-icon>
                <ion-icon name="search-outline" class="icones"></ion-icon>
                <ion-icon name="add-circle-outline" class="icones"></ion-icon>
                <ion-icon name="heart-outline" class="icones"></ion-icon>
                <ion-icon name="person-outline" class="icones"></ion-icon>
            </div>
        </div>
    )
}

export default function App(){
    return (
        <div>
            <Topbar />
            <div class="conteiner">
                <div class="caixa-esq">
                    <Stories />
                    <Posts />
                </div>
                <Sidebar />
            </div>
            <Footerbar />
        </div>
    )
}