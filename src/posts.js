import React from "react"

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

export default function Boxposts(){
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