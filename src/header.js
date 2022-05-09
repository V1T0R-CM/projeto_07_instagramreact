export default function Topbar(){
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