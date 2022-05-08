import React from 'react'

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


function Boxstories(){
    const stories=[
        {route: "./image/storiesakashi.jpg", name: "akashi_cruz"},
        {route: "./image/stories7mz.PNG", name: "7mzoficial"},
        {route: "./image/storiesdriven.PNG", name: "driven.edu..."},
        {route: "./image/storiesenygma.PNG", name: "dillenygma"},
        {route: "./image/storieszin.PNG", name: "instazin"},
        {route: "./image/storiesmistery.PNG", name: "mistery.off..."},
        {route: "./image/storiesspotted.PNG", name: "spotted.ufrj"},
        {route: "./image/storiesmh.PNG", name: "mhrapoficial"}
    ]

    return (
        <div class="box-stories">
            {stories.map(storie=><Storie route={storie.route} name={storie.name}/>)}
            <ion-icon class="vetor-stories"name="chevron-forward-circle-sharp"></ion-icon>
        </div>
    )
}

function Post(props){
    const [like, setLike]=React.useState(<ion-icon name="heart-outline" class="icones" onClick={()=>toggle()}></ion-icon>)
    let liked=false

    function toggle(){
        if(liked){
            setLike(<ion-icon name="heart-outline" class="icones" onClick={()=>toggle()}></ion-icon>)
            liked=false
        }
        else{
            setLike(<ion-icon name="heart" class="icones like" onClick={()=>toggle()}></ion-icon>)
            liked=true
        }
    }

    function turnOn(){
        setLike(<ion-icon name="heart" class="icones like" onClick={()=>toggle()}></ion-icon>)
        liked=true
    }

    return (
        <div class="post">
            <div class="topo-post">
                <div class="perfil-post">
                    <img src={props.profileimg}/>
                    <h1>{props.profilename}</h1>
                </div>
                <ion-icon name="ellipsis-horizontal" class="icones"></ion-icon>
            </div>
            <img src={props.postimg} onClick={()=>turnOn()}/>
            <div class="acoes-post">
                <div class="acoes-dir">
                    {like}
                    <ion-icon name="chatbubble-outline" class="icones"></ion-icon>
                    <ion-icon name="paper-plane-outline" class="icones"></ion-icon>
                </div>
                <ion-icon name="bookmark-outline" class="icones"></ion-icon>
            </div>
            <div class="reacoes-post">
                <img src={props.reactimg}/>
                <h5>Curtido por <strong>{props.reactname}</strong> e <strong>outras {props.numlike} pessoas</strong></h5>
            </div>
        </div>
    )
}

function Boxposts(){
    const posts=[
        {profileimg: "./image/img-perfil-post1.PNG", profilename: "lele_fariaas", postimg: "./image/img-post1.jpg", reactimg: "./image/img-perfil-post2.PNG", reactname: "laiissgomes", numlike: "75.849"},
        {profileimg: "./image/img-perfil-post2.PNG", profilename: "laiissgomes", postimg: "./image/img-post2.jpg", reactimg: "./image/img-perfil-post3.PNG", reactname: "mais_um_poeta_qualquer", numlike: "74.154"},
        {profileimg: "./image/img-perfil-post3.PNG", profilename: "mais_um_poeta_qualquer", postimg: "./image/img-post3.jfif", reactimg: "./image/img-perfil-post4.PNG", reactname: "turleme93", numlike: "6.443"},
        {profileimg: "./image/img-perfil-post4.PNG", profilename: "turtleme93", postimg: "./image/img-post4.jpg", reactimg: "./image/img-rios.PNG", reactname: "eu.riuus", numlike: "55.963"}
    ]

    return (
        <div class="posts">
            {posts.map(post=><Post profileimg={post.profileimg} profilename={post.profilename} postimg={post.postimg} reactimg={post.reactimg} reactname={post.reactname} numlike= {post.numlike} />)}
        </div>
    )
}

function Sugest(props){
    return(
        <div class="sugestao">
            <div class="perfil-sugestao">
                <img src={props.route}/>
                <div class="perfil-texto"> 
                    <h1>{props.profile}</h1> 
                    <h4>{props.name}</h4>
                </div>
            </div>
            <h4 class="seguir">Seguir</h4>
        </div>
    )
}

function Sidebar(){
    const sugestions=[
        {route: "./image/trybe.PNG", profile: "betrybe", name: "Trybe"},
        {route: "./image/ironhack.PNG", profile: "ironhack", name: "Ironhack - Tech School"},
        {route: "./image/rocketseat.PNG", profile: "rocketseat_oficial", name: "Rocketseat"},
        {route: "./image/onebit.PNG", profile: "onebitcode", name: "Leonardo Scorza | OneBitCode"},
        {route: "./image/kenZie.PNG", profile: "kenzieacademy", name: "Kenzie Academy"}
    ]

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
            {sugestions.map(sugestion=><Sugest route={sugestion.route} profile={sugestion.profile} name={sugestion.name}/>)}
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
                    <Boxstories />
                    <Boxposts />
                </div>
                <Sidebar />
            </div>
            <Footerbar />
        </div>
    )
}