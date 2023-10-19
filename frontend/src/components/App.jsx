import makeStyles from '@mui/styles/makeStyles';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import SvgIcon from "@mui/material/SvgIcon";
import Hidden from "@mui/material/Hidden";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ElementData from './ElementData'
import YoutubeBackground from 'react-youtube-background'
import img from '../files/img/lego-png-46633.png'
import list from '../files/list.json'

const useStyles = makeStyles((theme) => ({
      root: {
          //paddingTop: 2,
					height: '100vh !important',
					width: '100vw !important',
					//display: 'flex !important'
      },
			container: {
          paddingTop: 2,
					height: '100vh !important',
					width: '100vw !important',
					display: 'flex !important',
					zIndex: 5,
  				position: 'absolute',
					marginBottom: '5px'
      },
			idea: {

      },
			video: {
					height: '100vh !important',
					width: '100vw !important',
					position: 'initial',
					zIndex: -2,
      },
      background: {
					backgroundColor: 'black',
					opacity: 0.5,
          position: 'absolute',
          right: 0,
          left: 0,
					top: 0,
          //background: 'linear-gradient(90deg, #25ade4 0%, #6356fd 100%)',
          height: '109vh',
          //marginTop: '-74px !important',
          //zIndex: -1,
          marginLeft: '0 !important',
          marginRight: '0 !important',
          //mask: 'url(./bg-even.svg) no-repeat center bottom',
          //webkitMask: 'url(./bg-even.svg) no-repeat center bottom',
					//background: 'hsla(14, 93%, 53%, 1)',
					//background: 'linear-gradient(90deg, hsla(14, 93%, 53%, 1) 0%, hsla(30, 84%, 58%, 1) 100%)',
					//background: '-moz-linear-gradient(90deg, hsla(14, 93%, 53%, 1) 0%, hsla(30, 84%, 58%, 1) 100%)',
					//background: '-webkit-linear-gradient(90deg, hsla(14, 93%, 53%, 1) 0%, hsla(30, 84%, 58%, 1) 100%)',
					//filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr="#F64C18", endColorstr="#EE9539", GradientType=1 )'
      },
      ilustration: {
          width: '100%'
      },
      actions: {
          marginTop: 4
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
		<div className={classes.root}>
			<YoutubeBackground
				videoId="p0M4t9omgz0"                /* default -> null */
				className={classes.video}
				//aspectRatio={string}            /* default -> "16:9" */
				//overlay={string}                /* default -> null | e.g. "rgba(0,0,0,.4)" */
				//className={string}              /* default -> null */
				nocookie              /* default -> false | sets host to https:/*www.youtube-nocookie.com to avoid loading Google's cookies */
			>
				<div className={classes.background} id="welcome"/>
				<Container className={classes.container}>
          <Grid justify="center" alignItems="center" direction="row-reverse" spacing={2} container>
								<Grid item xs={12} md>
										<Typography variant="subtitle1" gutterBottom style={{color: 'white', maxWidth: '80%'}}>
												Este sitio ha sido desarrollado para exponer ideas creadas con Lego Digital Designer, esto con el fin de desarrollar la creatividad y encontrar posibles soluciones a problemas cotidianos usando la robotica.
										</Typography>
										<br/><br/>
										<div className={classes.actions}>
											<Button href="#lista" variant="contained" color="secondary">Ver ideas</Button>
										</div>
								</Grid>
								<Grid item xs={12} md>
										<img className={classes.ilustration} src={img} title="lego person"/>
								</Grid>
						</Grid>
				</Container>
			</YoutubeBackground>
			<br/><br/><br/><br/>
			<br/><br/><br/><br/>
			<Typography id="lista" variant="h2" gutterBottom>
				Lista de ideas:
			</Typography>
			<div>
				{list.ideas.map(idea => (
					<div key={idea.id} className={classes.idea}>
						<Grid justify="center" alignItems="center" direction={idea.id % 2 === 0 ? "row-reverse" : "normal"} spacing={2} container>
								<Grid item xs={12} md>
										<ElementData filename={idea.modelname}/>										
								</Grid>
								<Grid item xs={12} md>
										<Typography variant="h3" gutterBottom >
											{idea.nombre}
										</Typography>
										<Typography variant="body2" gutterBottom>
											{idea.info}
										</Typography>
										<Button href={require(`../files/legofiles/${idea.filename}`)}>Descargar</Button>
								</Grid>
						</Grid>
						<Divider />
				</div>
				))}
			</div>
			<br/><br/><br/><br/>
			<Typography variant="body2" align="center" gutterBottom>
				Nicolas Mahecha	10-03
			</Typography>
		</div>
	)
/*
  return (
    <div>
      <div className={classes.background} id="welcome"/>
      <Container className={classes.root}>
          <Grid justify="center" alignItems="center" direction="row-reverse" spacing={2} container>
              <Grid item xs={12} md>
                  <Typography variant="subtitle1" gutterBottom style={{color: 'white'}}>
                      Este sitio ha sido desarrollado para exponer ideas creadas con Lego Digital Designer, esto con el fin de desarrollar la creatividad y encontrar posibles soluciones a problemas cotidianos usando la robotica.
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
  );*/
}

export default App;
