import { Box, Typography } from "@mui/material";
import Header from "../Components/Header";
import Item from "../Components/Item";
import Bottom from "../Components/Bottom";

export default function Shop() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ bgcolor: "#fcd1ca", minHeight: "100vh" }}
      overflow="hidden"
    >
      <Header home={0} />

      {/* Second Section */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100vw"
        paddingTop={{ xs: 5, sm: 10 }}
        paddingBottom={{ xs: 5, sm: 10 }}
      >
        <Typography
          align="right"
          padding={2}
          sx={{ fontSize: "2rem", fontWeight: "500" }}
          variant="body"
          color="#b3614f"
        >
          ברוכים הבאים לחנות הסטודיו
        </Typography>
        <Typography
          align="right"
          padding={1}
          sx={{ fontSize: "1rem", fontWeight: "500" }}
          variant="body"
          color="#b3614f"
        >
          אם ברצונכם להזמין רהיט קיים בעיצוב שונה, ניתן לפנות אלינו ישירות
        </Typography>
        <Item />
      </Box>
      <Bottom />
    </Box>
  );
}
