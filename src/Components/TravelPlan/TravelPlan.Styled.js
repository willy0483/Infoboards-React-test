import styled from "styled-components";

import image from "../../Assets/london-underground-escalators-4809358_1920.jpg";

export const TravelPlanStyled = styled.div`
  background-image: url(${image});
  background-size: cover;
  height: 100vh;

  .busContainer {
    margin: 2rem 0;
  }

  .bus {
    font-family: "Roboto", sans-serif;
    margin: 0.2rem 0;
    display: flex;
    justify-content: center;
    background-color: #00000080;
    border-radius: 20px;
    p {
      font-size: 2.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 75px;
    }
    p:nth-child(1) {
      width: 75px;
      border-radius: 10px;
      padding: 1rem;
      font-weight: 500;
    }
    p:nth-child(2) {
      color: white;
      width: 300px;
      font-weight: 200;
    }
    p:nth-child(3) {
      width: 100px;
      color: white;
      font-weight: 500;
    }
  }

  svg {
    margin: 3rem 0 1rem 0;
  }

  .green {
    background-color: green;
  }
  .yellow {
    background-color: yellow;
  }
  .red {
    background-color: #dc3a3a;
  }
  .defaultClass {
    background-color: transparent;
  }
`;
