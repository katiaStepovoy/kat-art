import React, { useState, useEffect } from "react";
import {
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  AppBar,
  Toolbar,
} from "@mui/material";
import styled from "styled-components";

function Header(props) {
  const categories = [
    { name: "inspiration", text: "השראה" },
    { name: "services", text: "שירותים" },
    { name: "shop", text: "חנות" },
    { name: "/", text: "בית" },
  ];

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const [isScrolled, setIsScrolled] = useState(props.home < 1);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(props.home < 1 || scrollPosition > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledAppBar elevation="0" isScrolled={isScrolled}>
      <Toolbar>
        <Stack direction="row" gap={2} sx={{ flexGrow: 1 }}>
          <StyledTypography isScrolled={isScrolled}>KAT</StyledTypography>
          {isSmallScreen && (
            <StyledTypography isScrolled={isScrolled}>Studio</StyledTypography>
          )}
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          gap={isSmallScreen ? "3rem" : "1.5rem"}
          justifyContent="center"
        >
          {categories.map((category) => (
            <MenuLink
              key={category.name}
              href={category.name}
              underline="none"
              isScrolled={isScrolled}
            >
              {category.text}
            </MenuLink>
          ))}
        </Stack>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;

const StyledTypography = styled(Typography).attrs({
  align: "left",
  variant: "header",
})`
  color: ${(props) => (props.isScrolled ? "#f5dcce" : "#b47f63")};
`;

const MenuLink = styled(Link).attrs({
  variant: "body",
  //paddingLeft: "5vw",
})`
  && {
    color: ${(props) => (props.isScrolled ? "#f5dcce" : "#d9baa9")};
  }
`;

const StyledAppBar = styled(AppBar)`
  && {
    position: fixed;
    background: ${(props) =>
      props.isScrolled ? "#cf8170" : "rgba(255, 255, 255, 0)"};
    transition: background-color 0.3s ease-out;
  }
`;
