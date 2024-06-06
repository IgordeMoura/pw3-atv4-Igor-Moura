import style from './Home.module.css'
import Input from '../../Components/form/input/Input';
import Select from '../../Components/form/select/Selec';

import Imagem from '../../img/Developer activity-pana.png'

function Cadastro() {

    return(
        <div className={style.containerHome}>
            <div className={style.conteudo}>
                <h1>Olá, Seja Bem Vindo</h1>
                <p> Aproveite para Navegar Por Nossas Paginas</p>
                <button>Navegue</button>
            </div>

            <div className={style.conteudo}>
                <img src={Imagem}/>
            </div>

        </div>
    )
}


export default Cadastro; 