
import Menu from '../../Menu';
import {Title, SideBar, Feed, Container, Form, Moda, Roupa, ImgRoupa, Descricao,  } from './styled';
import { FaHeart, FaShoppingCart} from 'react-icons/fa';

export default function Masculino(){
    return(
        <>
            <Menu pagina="Home" link="/"/>

            <Title>
                <h1>Área masculina</h1>
            </Title>

            <Container>
                <SideBar>
                    <h3>Categorias</h3>
                    <ul>
                        <li><a>Camisetas</a></li>
                        <li><a>Bermudas</a></li>
                        <li><a>Calças</a></li>
                        <li><a>blusas</a></li>
                    </ul>

                    <Form>

                            <h3>Tamanho</h3>

                        <input type="radio" name='tamanhoRoupas' value="pp"/> <span>PP</span>
                        <input type="radio" name='tamanhoRoupas' value="p"/> <span>P</span>
                        <input type="radio" name="tamanhoRoupas" value="m"/> <span>M</span>
                        <input type="radio" name='tamanhoRoupas' value="g"/> <span>G</span>
                        <input type="radio" name='tamanhoRoupas' value="gg"/> <span>GG</span>
                    </Form>

                </SideBar>

                <Feed>
            
            <Moda>
                <Roupa>

                  <ImgRoupa></ImgRoupa>

                  <Descricao>
                  <button className='btnFavorito'><FaHeart/></button>
                      <div>
                      <h3>Nome da peça</h3>
                      <p>29,90R$</p>
                      </div>
                      <button className='btnCompra'><FaShoppingCart/></button>
                      

                  </Descricao>

                </Roupa>
            </Moda>

            <Moda>
                <Roupa>

                  <ImgRoupa></ImgRoupa>

                  <Descricao>
                  <button className='btnFavorito'><FaHeart/></button>
                      
                      <div>
                      <h3>Nome da peça</h3>
                      <p>29,90R$</p>
                      </div>

                      <button className='btnCompra'><FaShoppingCart/></button>
                      

                  </Descricao>

                </Roupa>
            </Moda>


            <Moda>
                <Roupa>

                  <ImgRoupa></ImgRoupa>

                  <Descricao>
                    <button className='btnFavorito'><FaHeart/></button>
                      
                      <div>
                      <h3>Nome da peça</h3>
                      <p>29,90R$</p>
                      </div>

                      <button className='btnCompra'><FaShoppingCart/></button>
                      

                  </Descricao>

                </Roupa>
            </Moda>


            <Moda>
                <Roupa>

                  <ImgRoupa></ImgRoupa>

                  <Descricao>
                  <button className='btnFavorito'><FaHeart/></button>
                      
                      <div>
                      <h3>Nome da peça</h3>
                      <p>29,90R$</p>
                      </div>

                      <button className='btnCompra'><FaShoppingCart/></button>
                      

                  </Descricao>

                </Roupa>
            </Moda>

            <Moda>
                <Roupa>

                  <ImgRoupa></ImgRoupa>

                  <Descricao>
                  <button className='btnFavorito'><FaHeart/></button>
                      
                      <div>
                      <h3>Nome da peça</h3>
                      <p>29,90R$</p>
                      </div>

                      <button className='btnCompra'><FaShoppingCart/></button>
                      

                  </Descricao>

                </Roupa>
            </Moda>

            <Moda>
                <Roupa>

                  <ImgRoupa></ImgRoupa>

                  <Descricao>
                  <button className='btnFavorito'><FaHeart/></button>
                      
                      <div>
                      <h3>Nome da peça</h3>
                      <p>29,90R$</p>
                      </div>

                      <button className='btnCompra'><FaShoppingCart/></button>
                      

                  </Descricao>

                </Roupa>
            </Moda>


            <Moda>
                <Roupa>

                  <ImgRoupa></ImgRoupa>

                  <Descricao>
                  <button className='btnFavorito'><FaHeart/></button>
                      
                      <div>
                      <h3>Nome da peça</h3>
                      <p>29,90R$</p>
                      </div>

                      <button className='btnCompra'><FaShoppingCart/></button>
                      

                  </Descricao>

                </Roupa>
            </Moda>


            <Moda>
                <Roupa>

                  <ImgRoupa></ImgRoupa>

                  <Descricao>
                  <button className='btnFavorito'><FaHeart/></button>
                      
                      <div>
                      <h3>Nome da peça</h3>
                      <p>29,90R$</p>
                      </div>

                      <button className='btnCompra'><FaShoppingCart/></button>
                      

                  </Descricao>

                </Roupa>
            </Moda>


            <Moda>
                <Roupa>

                  <ImgRoupa></ImgRoupa>

                  <Descricao>
                  <button className='btnFavorito'><FaHeart/></button>
                      
                      <div>
                      <h3>Nome da peça</h3>
                      <p>29,90R$</p>
                      </div>

                      <button className='btnCompra'><FaShoppingCart/></button>
                      

                  </Descricao>

                </Roupa>
            </Moda>






        </Feed>

            </Container>


            
        </>
    )
}