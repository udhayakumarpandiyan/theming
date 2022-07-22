import React from 'react';
import './Login.scss';
import {CssBaseline, Card ,Grid, Paper} from '@material-ui/core';
import { ThemeProvider , createTheme, StylesProvider, styled } from '@material-ui/core/styles';
import light from '../../utils/themes/light';
import dark from '../../utils/themes/dark';

const l = light;
const d = dark;
const theme = createTheme({ ...l });
const Item = styled(Paper)(({ them }) => ({
    padding: them.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Login = (props) => {
    return (
        <>
       <StylesProvider injectFirst>
                                        <CssBaseline />
                                        <ThemeProvider theme={theme}>
                                        <div className="login-container" aria-label="login page">
                    <div className="overlay" />
                    <Card
                        className="content"
                        data-role="presentation"
                        aria-label="user login"
                    >
                        <img
                            className="ttec-logo"
                            src="assets/images/ttec_hn_logo.svg"
                            alt="ttec logo"
                        />
                        <h3 className="header">Humanify</h3>
                        <Grid container spacing={2}>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid>
                        {/* <div>
                        <Accordion>
        <AccordionSummary
         
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div> */}
                        <a
                            href="https://help.ttec.com"
                            target="_blank"
                            rel="noreferrer"
                            className="help-link"
                            aria-label=""
                        >
                          Help
                        </a>
                    </Card>
                </div>
                                        </ThemeProvider>
                                    </StylesProvider>

              
        </>
    );
};

export default Login;
