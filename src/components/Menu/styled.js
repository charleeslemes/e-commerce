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


    &:hover{
        box-shadow: 0 0 10px black;
    }

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

        &:hover{
            box-shadow: 0 0 10px black;
        }

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