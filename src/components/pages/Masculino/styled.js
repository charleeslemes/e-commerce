import styled from 'styled-components';


export const Title = styled.div`
    text-align: center;
    max-width:300px;
    margin: 50px auto;
    
    h1{
        border-radius: 8px;
        padding: 4px 0;
        background-color: #003862;
        color:white;
        font-size:27px;
    }

`;


export const Container = styled.div`
    width:100%;
    display:flex;

`;


export const SideBar = styled.div`
    width: 20%;
    text-align:center;
    background-color: rgb(230,230,230);

    li{

    list-style:none;
    margin-top: 20px;
       

        a{
            color: rgb(110,110,110);
            cursor: pointer;
            
        }

    }


`;


export const Form = styled.form`
    margin: 15px 0;


    input{
        margin: 15px 0;

    }

    span{
        margin-right: 10px;
    }

`;


export const Feed = styled.div`
    background-color:blue;
    width: 80%;
    display:flex;
    flex-wrap:wrap;
    

`;


export const Moda = styled.div`
    display:flex;
    justify-content:center;
    width: 25%
    
`;



export const Roupa = styled.div`
    flex-direction:column;
    display:flex;
    
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