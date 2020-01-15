import PropTypes from 'prop-types';
import { Grid, Paper, Typography } from '@material-ui/core';
import styles from './styles';

import localImg from '../../static/vikings-intro.jpg';

const MainLayout = ({ children }) => (
  <Grid container justify="center">
    <Grid container style={styles.imageGrid} justify="center">
      <img src={localImg} alt="" width="570" height="320" />
    </Grid>
    <Grid item style={styles.paperContainer} xs={10}>
      <Paper elevation={24} style={styles.paper}>
        {children}
      </Paper>
    </Grid>
    <Grid item>
      <Typography variant="caption" gutterBottom>
        © 2020 All rights reserved David Balivo Quiñones
      </Typography>
    </Grid>
    <style jsx global>
      {`
        body {
          margin: 0px;
          background-color: #d9d9d9;
        }
      `}
    </style>
  </Grid>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};
MainLayout.defaultProps = {
  children: null,
};

export default MainLayout;
