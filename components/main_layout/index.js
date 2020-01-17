import PropTypes from 'prop-types';
import { Grid, Paper, Typography, makeStyles } from '@material-ui/core';
import styles from './styles';
import localImg from '../../static/vikings-intro.jpg';

const MainLayout = ({ children }) => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.mainGrid}>
      <Grid container justify="center" className={classes.imageGrid}>
        <img src={localImg} alt="" width="570" height="320" />
      </Grid>
      <Grid item xs={11} className={classes.paperGrid}>
        <Paper elevation={24} className={classes.paper}>
          {children}
        </Paper>
      </Grid>
      <Grid item className={classes.copyRightContainer}>
        <Typography variant="caption" gutterBottom>
          © 2020 All rights reserved David Balivo Quiñones
        </Typography>
      </Grid>
      <style jsx global>
        {`
          body {
            background-color: #d9d9d9;
          }
        `}
      </style>
    </Grid>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};
MainLayout.defaultProps = {
  children: null,
};

export default MainLayout;
