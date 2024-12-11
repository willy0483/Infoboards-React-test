import styled from "styled-components";

export const WeatherStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 1rem 0;

  div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    position: absolute;
    bottom: -2rem;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    font-size: 2rem;
    color: orange;
  }

  svg {
    margin: 0;
    color: orange;
  }
`;
