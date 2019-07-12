import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import AppStyle from  './AppStyle.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      userInfo:[],
      fName:undefined,
      lName:undefined,
      cntry:undefined
    };
    this.handleFirstName=this.handleFirstName.bind(this);
    this.handleLasttName=this.handleLasttName.bind(this);
    this.handleCountrySelection=this.handleCountrySelection.bind(this);
    this.handleSubmitbutton=this.handleSubmitbutton.bind(this);
    this.renderUnserInfoList=this.renderUnserInfoList.bind(this);
  }
  
 
  handleFirstName(event){
    if(event){ 
      this.setState({fName:  event.currentTarget.value});
      console.log(event.currentTarget.value);
      console.log(this.state.fName);
    }
  }
  handleLasttName(event){
    if(event){ 
      this.setState({lName:  event.currentTarget.value});
      console.log(event.currentTarget.value);
      console.log(this.state.lName);
    }
  }
  handleCountrySelection(event){
    if(event){ 
      this.setState({cntry:  event.currentTarget.value});
      console.log(event.currentTarget.value);
      console.log(this.state.cntry);
    }
  }
  handleSubmitbutton(event){
    const {fName,lName,cntry, userInfo}=this.state;
    if(event){
      event.preventDefault();
     // this.setState({userInfo:userInfo.push({fName,lName,cntry})});
     this.setState(prevState => ({
      userInfo: [...prevState.userInfo, {fName,lName,cntry}]
    }))
      console.log(userInfo);
    }

  }
  renderUnserInfoList(){
    const {userInfo}=this.state;
    console.log(userInfo.length);
    if(userInfo.length>0){

    }else{
      return "noDataPresent";
    }
    
  }
  
  render(){
    const { classes } = this.props;
    console.log("render called");
  return (
    <div className={classes.mainDiv}>
     <div className={classes.leftDiv}>
     <Card className={classes.cardHeight} >
     <form className={classes.formStyle}>
    <label for="fname">First Name</label>
    <input className={classes.inputText}  type="text"  placeholder="Your name.." onChange={this.handleFirstName} />

    <label for="lname">Last Name</label>
    <input className={classes.inputText}  type="text" placeholder="Your last name.." onChange={this.handleLasttName} />

    <label for="country">Country</label>
    <select className={classes.inputText}  onChange={this.handleCountrySelection}>
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>
  
    <button className={classes.inputSubmit}  type="button" onClick={this.handleSubmitbutton}>Submit</button>
  </form>
    </Card>
     </div >
     <div className={classes.rightDiv}>
     <Card className={classes.cardHeight}>
      {this.renderUnserInfoList()}
     </Card>
     </div>
    </div>
  );
}
}

export default withStyles(AppStyle)(App);
