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
            color:white;
        }

    }

   

`;


export const Feed = styled.div`
    margin: 80px auto;
    display:flex;
    width:100%;
    background-color:green;
`;



export const Moda = styled.div`
    display:flex;
    justify-content:center;
   width:25%;
`;



export const Roupa = styled.div`
    width:100%;
    background-color:red;
    margin: 0 auto;
    border: 10px solid #ccc;
`;




export const ImgRoupa = styled.div`
    width:100%;
    padding-top:100%;
    background-color:pink;


`;


export const Descricao = styled.div`
    justify-content:center;
    display:flex;
    text-align:center;


`;
