import { Outlet, Link } from 'react-router-dom';
import Styles from './NavBar.module.css'; 
import Container from '../Container/Container';

function Navbar (){

    return(
        <>
                <div className={Styles.teste}>
                    
                    <ul className={Styles.list}>
                        <p> <span>>.</span> | TecDev</p>
                        <li className={Styles.item}>
                            <Link to='/'>Home</Link>
                        </li>

                        <li className={Styles.item}>
                            <Link to='/Cadastro'>Cadastro</Link>
                        </li>

                        <li className={Styles.item}>
                            <Link to='/Lista'>Lista</Link>

                        </li>
                    </ul>    
                </div>

            <Outlet/>
            
        </>
    )
}

export default Navbar;