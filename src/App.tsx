import { Box, Container, styled } from '@mui/system'
import Header from './Components/Header/Header'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button, Divider, Rating, TextField } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});


function App() {
  return (
    <>
      <Header />
      <Container fixed>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={8} sx={{ marginTop: 3 }}>
              <img width={380} src="src\assets\pic1.jpg" alt="" />
            </Grid>
            <Grid xs={7}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'start'} sx={{ marginTop: -1, marginLeft: -48, fontSize: 25 }}>
              <Box>
                <h3>Frieren</h3>
                <Divider sx={{marginTop: -2 }}/>
                <Box sx={{marginTop: -3}}>
                  <h2>Character</h2>
                </Box>
                <Grid xs={13} sx={{ marginTop: -7, fontSize: 16 }}>
                  <p>「フリーレン Furīren?」 is the main protagonist of Frieren: Beyond Journey's End. She was the Mage of the Hero Party and traveled alongside Hero Himmel, Warrior Eisen, and Priest Heiter in a ten-year journey to defeat the Demon King.</p>
                </Grid>
              </Box>
            </Grid>
            <Grid xs={8}>
              <iframe width="460" height="250" src="https://www.youtube.com/embed/Nl_T07gopjY?si=LFIPOBATZXY3VQe2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </Grid>
            <Grid xs={6}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'start'} sx={{ marginTop: -5, marginLeft: -38, fontSize: 25 }}>
              <Box>
                <h4>Personality</h4>
                <Grid xs={14} sx={{ marginTop: -7, fontSize: 16 }}>
                  <p>Frieren has an easy-going personality; however, her aloof attitude makes her a mystery to her peers, with Heiter commenting that they as Humans cannot perceive an Elf's feelings. As an Elf that has lived for at least a millennium, she has a poor sense of time that manifests in a bad habit of being unable to get up in the morning, along with a deeper inability to comprehend how time passes for Humans. This is, in part, a reason for Frieren's aloof attitude, since she sees large lengths of time as too brief for her to form meaningful connections. For instance, she thought of a ten-year journey with her comrades as short and believed she knew nothing about the Hero Himmel even up until his passing. However, following Himmel's funeral, she made the decision to get to know Humans better.</p>
                </Grid>
              </Box>
            </Grid>
            <Grid xs={12} sx={{ marginTop: 0 }}>
              <Divider />
              <h3>Comment</h3>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue="What do you feel about this?"
                sx={{ width: 1150 }}
              />
              <Grid display={'flex'} flexDirection={'row'} justifyContent={'space-between'} sx={{ marginTop: 0 }}>
                <Box
                  sx={{ marginTop: 1,
                    '& > legend': { mt: 2 },
                  }}
                >
                  <StyledRating
                    name="customized-color"
                    defaultValue={0}
                    getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                    precision={1.0}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                  />
                </Box>
                <Button sx={{ marginTop: 1 }} variant="contained" size="medium">
                  Send
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default App
