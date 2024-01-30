import {
  Stack,
  Typography,
  Link,
  IconButton,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import styled from "styled-components";

const Bottom = () => {
  const termsMenu = [
    { ref: "/about-me", name: "קצת עליי" },
    { ref: "/terms", name: "תקנון" },
    { ref: "/returns", name: "מדיניות החזרות" },
    { ref: "/delivery", name: "מדיניות אספקה ומשלוחים" },
  ];

  const renderTerms = () => {
    return termsMenu.map((item, index) => (
      <Link href={item.ref} underline="none">
        <SmallFont>{item.name}</SmallFont>
      </Link>
    ));
  };

  return (
    <Grid
      container
      padding="2rem"
      paddingLeft="6rem"
      paddingRight="6rem"
      width="100vw"
      justifyContent="space-between"
      sx={{
        backgroundColor: "#cf8170",
      }}
    >
      <Grid
        xs={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <BottomFont>KAT</BottomFont>
      </Grid>
      <Grid
        xs={5}
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
      >
        <BottomFont style={{ fontSize: "1.5rem", fontFamily: "Secular One" }}>
          תנאים ומדיניות
        </BottomFont>
        {renderTerms()}
      </Grid>
      <Grid
        xs={5}
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
      >
        <BottomFont style={{ fontSize: "1.5rem", fontFamily: "Secular One" }}>
          צרו קשר
        </BottomFont>
        <Link
          href="mailto:studio.kat.arts@gmail.com"
          underline="none"
          paddingBottom={2}
        >
          <BottomFont style={{ fontSize: "1rem" }}>
            katias3010@gmail.com
          </BottomFont>
        </Link>
        <Stack direction="row">
          <IconButton
            onClick={() => {
              window.open(
                "https://www.instagram.com/kat.art.studio/",
                "_blank"
              );
            }}
          >
            <InstagramIcon style={{ color: "#f5dcce" }} />
          </IconButton>
          <IconButton
            onClick={() => {
              window.open("https://www.facebook.com/", "_blank");
            }}
          >
            <FacebookIcon style={{ color: "#f5dcce" }} />
          </IconButton>
          <IconButton
            onClick={() => {
              window.open(
                "https://api.whatsapp.com/send?phone=972507565995",
                "_blank"
              );
            }}
          >
            <WhatsAppIcon style={{ color: "#f5dcce" }} />
          </IconButton>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Bottom;

const BottomFont = styled(Typography).attrs({
  color: "#f5dcce",
  variant: "header",
  align: "center",
  paddingBottom: "2vh",
})`
  font-size: 7rem;
`;

const SmallFont = styled(Typography).attrs({
  color: "#f5dcce",
  variant: "body",
})`
  && {
    font-size: 1rem;
  }
`;
