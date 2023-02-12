import styled from "styled-components";

export const Form = styled.form`
    .inputs{
      display:flex;
      width:100%;
      margin-bottom:10px;
      justify-content: space-between;
      div{
        width:99%;
      }
      .error{
        color:red;
        font-size:12px;
        margin-left:10px;
      }
    }

    button{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 11px 16px;
      gap: 8px;
      /* margin:auto 0 auto auto; */
      border:none;
      cursor:pointer;
      background: #568EAF;
      border-radius: 4px;
      color:#FFFFFF;
      width:100px;
      height:37px;
    }

    .buttons{
      display:flex;
      justify-content: space-between;
    }

    .nice{
      border: 1px solid #CAD0D5;
      border-radius: 8px;
      padding: 18px;
      margin-bottom: 10px;
    }
`;