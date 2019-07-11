import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import AppStyle from  './AppStyle.js';

class App extends React.Component{
  render(){
    const { classes } = this.props;
  return (
    <div className={classes.card} >
     Hello Sample with material ui
    </div>
  );
}
}

export default withStyles(AppStyle)(App);
