import styled from "styled-components";

export const Content = styled.div`
	columns: 18rem;
	gap: 1rem;
	counter-reset: grid;

  .item + .item {
	  margin-top: 1rem;
  }

  .item {
    break-inside: avoid;
    aspect-ratio: 4 / 3;
    padding: 1rem;
    border-radius: 0.75rem;
  }

  .item:nth-child(3n) {
    aspect-ratio: 1;
  }

  .item:nth-child(3n - 1) {
    aspect-ratio: 6/7;
  }

  .item {
    background-color: #f8faff;
    padding:10px;
    border-radius:8px;
    text-align: center;
    cursor: pointer;

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

    div{
      display: flex;
      place-content: space-between;
      align-items: flex-end;
      font-size:14px;
      white-space: nowrap;
    }
  }
`;
