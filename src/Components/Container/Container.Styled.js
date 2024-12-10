import styled from "styled-components";

export const ContainerStyle = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${(props) => props.width};
  background-color: ${(props) =>
    props.$bgcolor ? props.$bgcolor : "transparent"};
  display: ${(props) => (props.display ? props.display : "block")};
  justify-content: ${(props) => props.justify};
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  margin: ${(props) => props.margin};
`;
