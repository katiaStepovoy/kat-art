import { Box, Stack, Typography } from "@mui/material";
import Header from "../Components/Header";
import Item from "../Components/Item";
import Bottom from "../Components/Bottom";

function App() {
  const welcome = "ברוכים הבאים לסטודיו המקוון שלי";
  const imageUrl = process.env.PUBLIC_URL + "/images/back.jpg";

  return (
    <>
      {/* base */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ bgcolor: "#fcd1ca", minHeight: "100vh" }}
        overflow="hidden"
      >
        {/* header */}
        <Header home={1} />

        {/* first section */}

        <Stack
          direction="column"
          justifyContent="center"
          width="100vw"
          minHeight="120vh"
          sx={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Stack
            direction="column"
            position="relative"
            marginTop={{ xs: "-50vh", sm: "-40vh" }}
            gap={2}
            padding={4}
          >
            <Typography
              align="right"
              sx={{ fontSize: "2rem", fontWeight: "500", marginLeft: "auto" }}
              variant="body"
              color="#393336"
            >
              {welcome}
            </Typography>
            <Typography
              align="right"
              sx={{ fontSize: "1rem", fontWeight: "300", marginLeft: "auto" }}
              variant="body"
              color="#393336"
            >
              כאן מגשימים חלומות עיצוביים
            </Typography>
          </Stack>

          <Typography></Typography>
        </Stack>

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
            padding={3}
            sx={{ fontSize: "2rem", fontWeight: "500" }}
            variant="body"
            color="#b3614f"
          >
            מוצרים חדשים
          </Typography>
          <Item count={4} />
        </Box>
        {/* Bottom Section */}
        <Bottom />
      </Box>
    </>
  );
}

export default App;
