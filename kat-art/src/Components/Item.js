import React from "react";
import {
  Card,
  Grid,
  CardContent,
  Link,
  Typography,
  Button,
  useMediaQuery,
  createTheme,
} from "@mui/material";
import styled from "styled-components";

const Item = (props) => {
  const items = [
    {
      name: "קונסולה",
      price: "1999.00",
      src: "./Images/Candle.jpg",
      ref: "console",
    },
    {
      name: "ארונית איחסון",
      price: "999.00",
      src: "./Images/Candle.jpg",
      ref: "bookcase2",
    },
    {
      name: "פמוטים בעבודת יד",
      price: "199.00",
      src: "./Images/Candle.jpg",
      ref: "candle-holder",
    },
    {
      name: "אגרטל מעוצב",
      price: "199.00",
      src: "./Images/Candle.jpg",
      ref: "vase",
    },
    {
      name: "שולחן קפה",
      price: "499.00",
      src: "./Images/Candle.jpg",
      ref: "coffee-table",
    },
    {
      name: "כלי לעציץ",
      price: "99.00",
      src: "./Images/Candle.jpg",
      ref: "plant-pot",
    },
    {
      name: "שידת צד",
      price: "399.00",
      src: "./Images/Candle.jpg",
      ref: "side-drawer",
    },
    {
      name: "ארונית איחסון",
      price: "699.00",
      src: "./Images/Candle.jpg",
      ref: "bookcase1",
    },
  ];

  const theme = createTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const renderItems = () => {
    return items.slice(0, props.count).map((item, index) => (
      <Grid item key={index} xs={6} md={4} lg={3}>
        <CardStyled>
          <CardContentStyled>
            <Link href={item.ref} underline="hover">
              <ImageContainer>
                <ImageStyled src={item.src} alt={item.name} />
              </ImageContainer>
              <ItemDescription isSmallScreen={isSmallScreen}>
                {item.name}
              </ItemDescription>
              <Price isSmallScreen={isSmallScreen}>₪ {item.price}</Price>
              <ButtonStyled>רכשו כאן</ButtonStyled>
            </Link>
          </CardContentStyled>
        </CardStyled>
      </Grid>
    ));
  };

  return (
    <Grid
      container
      spacing={1}
      alignItems="center"
      justifyContent="center"
      padding={1}
    >
      {renderItems()}
    </Grid>
  );
};

const CardStyled = styled(Card)`
  && {
    background-color: rgba(255, 255, 255, 0);
    box-shadow: none;
  }
`;

const CardContentStyled = styled(CardContent)`
  text-align: center;
`;

const ImageContainer = styled.div`
  border-radius: 30px;
  overflow: hidden;
  height: 100%;
`;

const ImageStyled = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transform: scale(1.1);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

const ItemDescription = styled(Typography)`
  && {
    color: #303853;
    font-family: "Secular One";
    margin-top: ${(props) => (props ? 1 : 0.5)}rem;
    margin-bottom: ${(props) => (props ? 1 : 0.5)}rem;
    &.MuiTypography-root {
      text-decoration: inherit;
      text-decoration-color: #303853;
    }
  }
`;

const Price = styled(ItemDescription)`
  && {
    &.MuiTypography-root {
      text-decoration: inherit;
      text-decoration-color: #fcd1ca;
    }
  }
`;

const ButtonStyled = styled(Button)`
  && {
    width: 80%;
    background-color: #cf8170;
    font-family: "Secular One";
    color: #ffffff;

    &:hover {
      background-color: #b3614f;
    }
  }
`;

export default Item;
