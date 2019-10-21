import React from "react";

// Components

// import Form from './Form';

// material ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SvgIcon from "@material-ui/core/SvgIcon";
// import TextField from "@material-ui/core/TextField";

// images
// import headerImg from "../images/Cleaning.jpg";
// import headerImg2 from "../images/ScrubForceLogo.png";
// import headerBack from "../images/Header.svg";
import header from "../images/Header3.png";
import area from "../images/areas.png";
import logo from '../images/Scrub Force Shirt Graphic.png'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    width: "100%",
    // backgroundColor: '#205574',
    fontSize: "0"
  },
  imageContainer: {
    width: "100%"
  },
  imageContainer2: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#205574"
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
    // marginTop: "150px"
  },
  headerImg: {
    width: "100%",
    // marginTop: "20px",
    boxShadow: "0px -7px 20px #000"
  },
  headerImg2: {
    width: "20%",
    zIndex: 1
    // boxShadow: '0px -7px 20px #000'
  },
  services: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  title: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    // marginTop: "10px",
    borderBottom: "8px solid #205574",
    borderLeft: "8px solid #205574"
  },
  h2: {
    padding: "35px"
  },
  services2: {
    backgroundColor: "#205574",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
    // marginTop: '190px'
  },
  titleCard: {
    // padding: "25px",
    margin: "35px",
    // maxWidth: 275,
    display: "flex",
    justifyContent: "center"
  },
  title2: {
    fontSize: 35,
    width: "90%",
    textAlign: "center",
    paddingBottom: "25px",
    marginBottom: "25px",
    borderBottom: "3px solid grey"
  },
  title3: {
    fontSize: 25,
    width: "90%",
    textAlign: "center",
    marginBottom: "25px",
    marginTop: "45px",
    paddingTop: "45px",
    borderTop: "3px solid grey"
  },
  headerBack: {
    width: "100%",
    boxShadow: "0px -7px 20px #000",
    paddingTop: '25px'
    // zIndex: '-9',
    // marginBottom: '45px'
  },
  paper: {
    width: "65%",
    padding: "45px",
    marginTop: "45px",
    marginBottom: "45px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  type: {
    // margin: '15px',
    whiteSpace: "nowrap",
    textAlign: "center"
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  icon: {
    // padding: '50px'
  },
  area: {
    marginTop: "55px",
    width: "100%",
    backgroundImage: `url(${area})`,
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center"
  },
  areaImg: {
    width: "100%",
    // position: 'absolute',
    zIndex: "-2"
  },
  paper2: {
    // position: 'relative',
    width: "65%",
    padding: "75px",
    marginTop: "250px",
    marginBottom: "250px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title4: {
    display: "flex",
    justifyContent: "flex-start",
    fontSize: 35,
    width: "90%",
    textAlign: "center",
    marginTop: "25px",
    marginBottom: "45px",
    paddingBottom: "45px",
    borderBottom: "3px solid grey"
  },
  gridList: {
    display: "flex",
    alignItems: "center",
    width: "90%"
  },
  listIcon: {
    color: "#205574",
    marginRight: "15px"
  },
  footer: {
    color: "#fff",
    paddingTop: '55px',
    marginBottom: '55px',
    textAlign: 'center',
    display: "flex",
    justifyContent: 'center',
    alignItems:'center',
    width: '90%',

  },
  footerType: {
    paddingTop: '15px'
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  subType: {
    paddingTop: '75px',
    color: '#757575',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  subHeader: {
    paddingTop: '50px',
    textAlign: 'center'
  },
  logo: {
    width: '50%',
    height: '50%'
  },
  footerLogo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function BusinessIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
    </SvgIcon>
  );
}

function Window(props) {
  return (
    <SvgIcon {...props}>
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/>
    </SvgIcon>
  );
}

function Gutter(props) {
  return (
    <SvgIcon {...props}>
		<path d="M6.05,8.05c-2.73,2.73-2.73,7.15-0.02,9.88c1.47-3.4,4.09-6.24,7.36-7.93c-2.77,2.34-4.71,5.61-5.39,9.32c2.6,1.23,5.8,0.78,7.95-1.37C19.43,14.47,20,4,20,4S9.53,4.57,6.05,8.05z"/>
    </SvgIcon>
  );
}

function LocIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </SvgIcon>
  );
}

export default function Landing() {
  const classes = useStyles();
  // const [values, setValues] = React.useState({
  //   name: ""});

  // const handleChange = name => event => {
  //   setValues({ ...values, [name]: event.target.value });
  // };

  return (
    <div className={classes.root}>
      {/* ________________________________Header 1________________________________ */}
      {/* <div className={classes.imageContainer}>
          <img className={classes.headerImg} src={headerImg} alt="header-img" />
      </div>

      <div className={classes.services}>
        <div className={classes.title}>
          <Typography className={classes.h2} variant='h2'>Services</Typography>
        </div>
      </div> */}
      {/* ________________________________Header 2________________________________ */}
      <div className={classes.imageContainer2} />
      <div className={classes.container}>
        <img className={classes.headerBack} src={header} alt="header" />
        <div className={classes.services2}>
          {/* <Card className={classes.titleCard}>
              <CardContent>
                <Typography
                  className={classes.title2}
                  color="textSecondary"
                  variant="h6"
                  gutterBottom
                >
                  Services
                </Typography>
              </CardContent>
            </Card> */}

          <Paper className={classes.paper}>
            <Typography
              className={classes.title2}
              color="textSecondary"
              variant="h6"
              gutterBottom
            >
              Services
            </Typography>
            <Grid
              container
              spacing={10}
              justify="space-around"
              alignItems="center"
            >
              <Grid className={classes.grid} item xs={12} sm={12} lg={3}>
                <HomeIcon
                  className={classes.icon}
                  style={{ fontSize: 175 }}
                  color="disabled"
                />
                <Typography
                  className={classes.type}
                  variant="h5"
                  component="h3"
                >
                  Residential Cleaning
                </Typography>
              </Grid>

              <Grid className={classes.grid} item xs={12} sm={12} lg={3}>
                <BusinessIcon
                  className={classes.icon}
                  style={{ fontSize: 175 }}
                  color="disabled"
                />
                <Typography
                  className={classes.type}
                  variant="h5"
                  component="h3"
                >
                  Commercial Cleaning
                </Typography>
              </Grid>

              <Grid className={classes.grid} item xs={12} sm={12} lg={3}>
                <Window
                  className={classes.icon}
                  style={{ fontSize: 175 }}
                  color="disabled"
                />
                <Typography
                  className={classes.type}
                  variant="h5"
                  component="h3"
                >
                  Window Washing
                </Typography>
              </Grid>
              <Grid className={classes.grid} item xs={12} sm={12} lg={3}>
                <Gutter
                  className={classes.icon}
                  style={{ fontSize: 175 }}
                  color="disabled"
                />
                <Typography
                  className={classes.type}
                  variant="h5"
                  component="h3"
                >
                  Gutter Cleaning
                </Typography>
              </Grid>
            </Grid>
            <Typography
              className={classes.title3}
              color="textSecondary"
              variant="h5"
              gutterBottom
            >
              Our promise is to use 100% natural products (whenever possible) to keep your
              environment safe for your family, children, and pets.
            </Typography>
          </Paper>

          <div className={classes.area}>
            {/* <img className={classes.areaImg} src={area} alt="area" /> */}
            <Paper className={classes.paper2}>
              <Typography
                className={classes.title4}
                color="textSecondary"
                variant="h6"
                gutterBottom
              >
                Area's We Currently Service:
              </Typography>
              <Grid
                container
                spacing={2}
                // justify="center"
                alignItems="center"
              >
                <Grid
                  className={classes.gridList}
                  item
                  xs={12}
                  sm={8}
                  md={6}
                  lg={3}
                >
                  <LocIcon
                    className={classes.listIcon}
                    style={{ fontSize: 25 }}
                  />
                  <Typography
                    className={classes.type}
                    variant="h5"
                    component="h3"
                  >
                    Nashville
                  </Typography>
                </Grid>

                <Grid
                  className={classes.gridList}
                  item
                  xs={12}
                  sm={8}
                  md={6}
                  lg={3}
                >
                  <LocIcon
                    className={classes.listIcon}
                    style={{ fontSize: 25 }}
                  />
                  <Typography
                    className={classes.type}
                    variant="h5"
                    component="h3"
                  >
                    Brentwood
                  </Typography>
                </Grid>

                <Grid
                  className={classes.gridList}
                  item
                  xs={12}
                  sm={8}
                  md={6}
                  lg={3}
                >
                  <LocIcon
                    className={classes.listIcon}
                    style={{ fontSize: 25 }}
                  />
                  <Typography
                    className={classes.type}
                    variant="h5"
                    component="h3"
                  >
                    Franklin
                  </Typography>
                </Grid>

                <Grid
                  className={classes.gridList}
                  item
                  xs={12}
                  sm={8}
                  md={6}
                  lg={3}
                >
                  <LocIcon
                    className={classes.listIcon}
                    style={{ fontSize: 25 }}
                  />
                  <Typography
                    className={classes.null}
                    variant="h5"
                    component="h3"
                  >
                    Thompson's Station
                  </Typography>
                </Grid>

                <Grid
                  className={classes.gridList}
                  item
                  xs={12}
                  sm={8}
                  md={6}
                  lg={3}
                >
                  <LocIcon
                    className={classes.listIcon}
                    style={{ fontSize: 25 }}
                  />
                  <Typography
                    className={classes.type}
                    variant="h5"
                    component="h3"
                  >
                    Spring Hill
                  </Typography>
                </Grid>

                <Grid
                  className={classes.gridList}
                  item
                  xs={12}
                  sm={8}
                  md={6}
                  lg={3}
                >
                  <LocIcon
                    className={classes.listIcon}
                    style={{ fontSize: 25 }}
                  />
                  <Typography
                    className={classes.type}
                    variant="h5"
                    component="h3"
                  >
                    Columbia
                  </Typography>

                </Grid>
              </Grid>
                <div className={classes.subType}>
                  <Typography
                    className={classes.subHeader}
                    variant="h5"
                    component="h3"
                  >
                    Weekly, bi-weekly, monthly, and one time cleaning service available.
                  </Typography>
                  <Typography
                    className={classes.subHeader}
                    variant="h5"
                    component="h3"
                  >
                    Give us a call at (615)497-2352 for a free estimate!
                  </Typography>
                </div>
            </Paper>
          </div>
          <div className={classes.footer}>
          <Grid
            container
            spacing={0}
            justify="space-around"
          > 
            <Grid
              className={classes.gridList}
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
            >
              <div className={classes.contactInfo}>
                <Typography className={classes.footerType} variant='h5'>
                    (615)497-2352
                </Typography>
                <Typography className={classes.footerType} variant='h5'>
                    Contact@ScrubForce.net
                </Typography>
                <Typography className={classes.footerType} variant='h5'>
                    Licensed and Insured
                </Typography>
              </div>
            </Grid>
            <Grid
              className={classes.gridList}
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
            >
              <div className={classes.footerLogo}>
                 <img className={classes.logo} src={logo} alt="logo" />
              </div>
            </Grid>
          </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
