import styled from 'styled-components';


export const Center = styled.div`
    margin: 0 auto;
    max-width:1300px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    height: 80px;
    width:100%;

`;

export const Container = styled.header`
    background-color: #3d6888;
    padding: 0 2%;
    width:100%;
`;


export const Logo = styled.div`
   h1{
       color:white;
   }

`;

export const Search = styled.div`
  input{
      width: 300px;
      height: 30px;
  }


  button{
      width: 50px;
      height:30px;
      background-color: #003862;
      border:0;
      margin-left:5px;

      svg{
          color:white;
          font-size:14px;
      }
      
      &:hover{
          width:55px;
          height:35px;
      }

  }


 
`;

export const Login = styled.div`

    display:flex;
    align-items:center;

        svg{
            margin:0 15px;
            color:white;
            font-size: 25px;
            cursor:pointer;
        }


        button{
            margin: 30px;
            padding: 6px 23px;
            border:0;
            background-color: #003862;
            color:white;
            border-radius:8px;
            font-size:14px;
            box-shadow: 0 1px 3px black;

        }

`;