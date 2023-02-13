import styled from "styled-components";

export const Content = styled.div`
  display: grid;
  flex-flow: wrap;
  justify-content: center;
  margin:0 10px;
  grid-template-columns: auto auto auto;
  gap: 18px;

  .item {
    background-color: #f8faff;
    padding:10px;
    border-radius:8px;
    text-align: center;
    width: 350px;
    cursor: pointer;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 1px 1px 5px rgb(0 0 0 / 16%);

    h3{
      font-size:18px;
      text-align: left;
      font-weight:600;
      color:#3D7487;
    }

    p{
      line-height: initial;
      font-size:16px;
      text-align:left;
      color:#156581 !important;
    }

    .footerCard{
      display: flex;
      place-content: space-between;
      align-items: flex-end;
      font-size:14px;
      white-space: nowrap;
    }
  }
`;
