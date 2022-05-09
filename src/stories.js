function Storie(props){
    return (<div class="stories"><img class="fundo-stories"src="./image/stories_background.png" /><img class="imagem-stories"src={props.route}/><h3>{props.name}</h3></div>)
}


export default function Boxstories(){
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