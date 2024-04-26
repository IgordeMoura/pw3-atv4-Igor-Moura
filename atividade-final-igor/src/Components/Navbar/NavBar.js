import { Outlet, Link } from 'react-router-dom';
import Styles from './NavBar.module.css'; 
import Container from '../Container/Container';

function Navbar (){

    return(
        <>
            <Container>

                <ul className={Styles.list}>

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

            </Container>  

            <Outlet/>
            
        </>
    )
}

export default Navbar;