import ReactDOM from 'react-dom';
import Topbar from './header';
import Boxstories from './stories';
import Boxposts from './posts';
import Sidebar from './side';
import Footerbar from './footer';


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

ReactDOM.render(App(), document.querySelector(".root"));