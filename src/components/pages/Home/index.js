  import {Container, Box1, Box2, Feed, Moda, Roupa, ImgRoupa, Descricao} from './styled';
  import { FaHeart, FaShoppingCart} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Menu from '../../Menu';
  
  export default function Home(){
    return(
      <section>
        <Menu pagina="Masculino" link="/masculino"/>

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


            




        </Feed>

        </section>


    )

  }