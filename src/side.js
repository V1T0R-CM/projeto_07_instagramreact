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

export default function Sidebar(){
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