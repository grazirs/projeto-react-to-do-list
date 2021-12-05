
import { Link } from 'react-router-dom'
import '../Menu/menu.styles.css'
const Menu = ()=> {
    return(
        <ul className='menu'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/lista">Lista de Tarefas</Link>
            </li>
        </ul>

    )

}

export default Menu