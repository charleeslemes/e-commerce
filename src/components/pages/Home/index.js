  import {Container, Box1, Box2, Feed, Moda, Roupa, ImgRoupa, Descricao} from './styled';
  import { FaHeart, FaShoppingCart} from 'react-icons/fa';
  
  export default function Home(){
    return(
      <section>
        <Container>
          <Box1>
              <h2>Outlet</h2>
          </Box1>

          <Box2>
            <div>
            <h2>Masculino</h2>
            </div>

            <div>
            <h2>Feminino</h2>
            </div>

          </Box2>

        </Container>

        <Feed>
            
            <Moda>
                <Roupa>

                  <ImgRoupa></ImgRoupa>

                  <Descricao>
                      <FaHeart/>
                      <div>
                      <h3>Nome da peça</h3>
                      <p>29,90R$</p>
                      </div>
                      <FaShoppingCart/>

                  </Descricao>

                </Roupa>
            </Moda>


            <Moda>
                <Roupa>

                  <ImgRoupa></ImgRoupa>

                  <Descricao>
                      <FaHeart/>
                      <div>
                      <h3>Nome da peça</h3>
                      <p>29,90R$</p>
                      </div>
                      <FaShoppingCart/>

                  </Descricao>

                </Roupa>
            </Moda>



            <Moda>
                <Roupa>

                  <ImgRoupa></ImgRoupa>

                  <Descricao>
                      <FaHeart/>
                      <div>
                      <h3>Nome da peça</h3>
                      <p>29,90R$</p>
                      </div>
                      <FaShoppingCart/>

                  </Descricao>

                </Roupa>
            </Moda>


            <Moda>
                <Roupa>

                  <ImgRoupa></ImgRoupa>

                  <Descricao>
                      <FaHeart/>
                      <div>
                      <h3>Nome da peça</h3>
                      <p>29,90R$</p>
                      </div>
                      <FaShoppingCart/>

                  </Descricao>

                </Roupa>
            </Moda>


            


        </Feed>

        </section>


    )

  }