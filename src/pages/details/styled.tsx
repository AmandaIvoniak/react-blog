import styled from "styled-components";
interface CommentProps {
  item: boolean;
}

export const Content = styled.div`
  padding: 18px;
  background-color: #f2f6fa;
  border-radius: 12px;
  box-shadow: 1px 1px 5px rgb(0 0 0 / 16%);
  .comments{
    border-radius: 8px;
    margin-bottom: 10px;
  }

  .author{
    padding: 30px 0px 0px;
    display: flex;
    justify-content: space-between;
    b{
      color:#3D7487;
    }
  }

  h3{
    margin-top: 0px;
    color:#156581 !important;
  }
  .commentButton{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 11px 16px;
    gap: 8px;
    border:none;
    cursor:pointer;
    background: #568EAF;
    border-radius: 4px;
    color:#FFFFFF;
    width:300px;
    height:57px;
    margin: 0px 0px 0px auto;
  }

`;

export const Comment = styled.div<CommentProps>`
  align-items: center;
  border-radius: 8px;
  border: 1px solid #CAD0D5;
  margin:25px 10px;
  padding:18px;
  background-color: #fff;

  .itemComment{
    display: flex;
    place-content: space-between;
    ${props => props.item === true ? 
    `border-bottom:1px solid #CAD0D5;` 
  : ``}
    padding-bottom:10px;
  }

  h4{
    margin-right:10px;
    margin-top: 5px;

    margin-bottom:0px;
  }
  p{
    margin-top: 5px;
  }

  .buttons{
    text-align: center;
    svg{
      width:20px;
    }
    span{
      cursor: pointer;
      color: #F44E4E;
      text-decoration: underline;
      font-size: 14px;
      font-weight: bold;
    }

    button{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 3px 9px;
      gap: 8px;
      margin:0px 5px;
      margin-bottom:10px;
      height:42px;
      border:none;
      cursor:pointer;
      background: #568EAF;
      border-radius: 4px;
      color:#FFFFFF;
      
    }
  }

  .answer{
    margin: 14px 20px 20px;
    font-style: italic;
    h4{
      color: #787878;
      margin-right: 10px;
      margin-bottom: 2px;
      font-size: 14px;
      
    }
    p{
      margin: 0;
      font-size: 18px;
    }
  }
`;