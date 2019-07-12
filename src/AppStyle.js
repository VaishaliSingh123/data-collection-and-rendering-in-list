const AppStyle = theme => ({
  mainDiv:{
   display:"flex",
   width:"90%",
   height:"90%",
   margin:"10px",
   justifyContent:"space-between"
  },
  leftDiv:{
    width:"60%",
    height:"90%",
    margin:"10px"
  },
  rightDiv:{
    width:"40%",
    height:"90%",
    margin:"10px"
  },
  inputText:{
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    display: "inline-block",
    border: "1px solid #ccc",
    borderR:"4px",
    boxSizing: "border-box"
  },
  inputSubmit: {
    width: "100%",
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "14px 20px",
    margin: "8px 0",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  },
  formStyle:{
    height:"80%",
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    padding: "20px"
  }
});
export default AppStyle;