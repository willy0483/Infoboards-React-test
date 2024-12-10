import { TitleStyledContainer } from "./Title.Styled";

export const Title = ({children, theme, font, size, color }) => {
  return (
    <TitleStyledContainer>
        <div
          style={{
            backgroundColor: theme,
            fontFamily: font,
            fontSize: size + "rem",
            color: color,
          }}>{children}</div>
    </TitleStyledContainer>
  );
};

