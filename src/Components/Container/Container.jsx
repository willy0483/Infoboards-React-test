import { ContainerStyle } from "./Container.Styled";

export const Container = ({ children, width,margin, bgcolor, display ,justify,direction,align }) => {
  return (
    <ContainerStyle width={width} margin={margin} $bgcolor={bgcolor} display={display} justify={justify} direction={direction} align={align}>
      {children}
    </ContainerStyle>
  );
};
