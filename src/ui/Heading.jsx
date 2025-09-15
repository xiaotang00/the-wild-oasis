import styled, { css } from "styled-components";
//定义长段css时使用这个形式
// const test = css`
//   text-align: center;
//   ${10 > 5 && "background-color: yellow"}
// `;
// const Heading = styled.h1`
//   font-size: 20px;
//   font-weight: 600;
//   ${test}
// `;

const Heading = styled.h1`
  ${(props) =>
    props.type === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.type === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
  ${(props) =>
    props.type === "h3" &&
    css`
      font-size: 20px;
      font-weight: 500;
    `}
    ${(props) =>
    props.type === "h4" &&
    css`
      font-size: 2rem;
      font-weight: 600;
      text-align: center;
    `}
`;
export default Heading;
