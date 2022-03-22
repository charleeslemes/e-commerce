
import {Container, Box1, Box2} from './styled';
import {Link} from 'react-router-dom';

export default function Menu(props){
    return(
        <Container>
        <Box1>
            <h2>Outlet</h2>
        </Box1>

        <Box2>
            <div>
            <h2><Link to={props.link}>{props.pagina}</Link></h2>
            </div>

            <div>
            <h2>Feminino</h2>
            </div>

        </Box2>

        </Container>
    )
}