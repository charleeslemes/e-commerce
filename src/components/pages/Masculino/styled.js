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
`;


