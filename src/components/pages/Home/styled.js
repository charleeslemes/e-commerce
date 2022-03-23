import styled from 'styled-components';


export const Container = styled.div`
    display:flex;
    max-width:1300px;
    margin: 0 auto;
    justify-content:center;
    align-items:center;
    margin-top:50px;
`;


export const Box1 = styled.div`

    width: 300px;
    height: 180px;
    background-color: #003862;
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    font-size:30px;
    cursor:pointer;

`;


export const Box2 = styled.div`

    display:flex;
    flex-direction:column;
    margin-left: 30px;
    align-items:center;
    cursor:pointer;

    div{
        
        width:300px;
        height: 80px;
        background-color:#003862;
        display:flex;
        align-items:center;
        justify-content:center;

        & + div{
            margin-top:10px;
        }


        h2{
            a{
                color:white;
                text-decoration:none;
            }
        }

    }

   

`;


export const Feed = styled.div`
    margin: 80px auto;
    display:flex;
    width:100%;
    background-color:white;
    flex-wrap:wrap;

`;



export const Moda = styled.div`
    display:flex;
    justify-content:center;
    width:25%;
    
`;



export const Roupa = styled.div`
    width:100%;
    background-color:white;
    margin: 5px 10px;

    &:hover{
        box-shadow: 0 0 10px black;
    }
`;




export const ImgRoupa = styled.div`
    width:100%;
    padding-top:100%;
    background-color: blueviolet;
    cursor:pointer;
    

`;


export const Descricao = styled.div`
    margin: 10px 0;
    text-align: center;
    display:flex;
    justify-content: space-between;

    .btnFavorito{
        border 0;
        background-color:transparent;
        margin-left: 25px;
        

        svg{
            font-size: 25px;
            color: #003862;
        }
    }

    .btnCompra{
        border:0;
        background-color: transparent;
        margin-right:25px;

        svg{
            font-size:25px;
            color: green;
        }
    }




`;
