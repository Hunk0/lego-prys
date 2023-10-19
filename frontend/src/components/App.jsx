import makeStyles from '@mui/styles/makeStyles';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import SvgIcon from "@mui/material/SvgIcon";
import Hidden from "@mui/material/Hidden";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ElementData from './ElementData'

const useStyles = makeStyles((theme) => ({
      root: {
          paddingTop: 2
      },
      background: {
          position: 'absolute',
          right: 0,
          left: 0,
          background: 'linear-gradient(90deg, #25ade4 0%, #6356fd 100%)',
          height: '700vh',
          marginTop: '-74px !important',
          zIndex: -10,
          marginLeft: '0 !important',
          marginRight: '0 !important',
          mask: 'url(./bg-even.svg) no-repeat center bottom',
          webkitMask: 'url(./bg-even.svg) no-repeat center bottom',
      },
      ilustration: {
          width: '100%',
          maxHeight: 490,
      },
      actions: {
          display: 'flex',
          justifyContent: 'center',
          marginTop: 2
      },
      fab: {
          letterSpacing: '0',
          height: '40.1px' ,
          fontWeight: "300",
          marginLeft: 0.5,
          marginRight: 0.5
      }
  }));

function App() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.background} id="welcome"/>
      <Container className={classes.root}>
          <Grid justify="center" alignItems="center" direction="row-reverse" spacing={2} container>
              <Grid item xs={12} md>
                  <Typography variant="h2" align="center" style={{fontSize: '2.5rem', color: 'white'}}>
                      Organiza, gestiona y encuentra eventos facilmente.
                  </Typography>
                  <div className={classes.actions}>
                      <Fab className={classes.fab} to="/publicaciones" variant="extended" color="secondary">
                          
                          Ver ideas
                      </Fab>
                  </div>
              </Grid>
              <Grid item xs={12} md>
                  <img className={classes.ilustration} src="https://toppng.com/uploads/preview/enjoy-6-weeks-of-engineering-fun-with-legos-and-hands-on-emmet-lego-movie-minifigure-11563136702pdvwwkbbz4.png" title="lego person"/>
              </Grid>
          </Grid>
      </Container>
			<ElementData />
    </div>
  );
}

export default App;
