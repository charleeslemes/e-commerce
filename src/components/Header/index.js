import React, {} from 'react';
import {Container, Logo, Search, Login, Center} from './styled';
import {FaSearch, FaHeart, FaShoppingCart} from 'react-icons/fa';

export default function Header(){
    return(
      <Container>
            <Center>
                <Logo>
                    <h1>Logo</h1>
                </Logo>

                <Search>
                    <input type="search" name="buscar" placeholder="Digite aqui sua busca!"/>
                    <button> <FaSearch/> </button>
                </Search>

                <Login>
                    <FaHeart/>
                    <FaShoppingCart/>

                    <button>Entrar</button>
                </Login>
            </Center>
      </Container>
    )

}