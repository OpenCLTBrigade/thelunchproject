import React,{Component} from 'react';

class EducatorAddForm extends Component {
  constructor(){
    super();
    this.state={firstName:"",lastName:""};
  }
  submit=()=>{
  
    console.log("clicked the button",this.state)
  }
  inputChange=(e)=>{
    console.log(e.target.value)
    this.setState({[e.target.id]:e.target.value})
  }

  render(){
    return(
      <form>
    <div className="form-group">
      <label for="firstName">First Name:</label>
      <input type="text" className="form-control" id="firstName" placeholder="First Name" autofocus required onChange={this.inputChange}/>
    </div>
    <div className="form-group">
      <label for="lastName">Last Name:</label>
      <input type="text" className="form-control" id="lastName" placeholder="Last Name" required onChange={this.inputChange}/>
    </div>
    <div className="form-group">
      <label for="email">Email address:</label>
      <input type="email" className="form-control" id="email" placeholder="Email Address" required onChange={this.inputChange} />
    </div>
    <div className="form-group">
      <label for="school">School:</label>
      <input type="text" className="form-control" id="school" placeholder="School" required onChange={this.inputChange} />
    </div>
    <div className="form-group">
      <label for="grade-level">Grade Level:</label>
      <input type="text" className="form-control" id="grade-level" placeholder="Grade Level" required onChange={this.inputChange} />
    </div>
    <div className="form-group">
      <label for="username">Username:</label>
      <input type="text" className="form-control" id="username" placeholder="Username" onChange={this.inputChange} />
    </div>
    <div className="form-group">
      <label for="password">Password:</label>
      <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.inputChange} />
    </div>
    
    <button type="button" className="btn btn-primary" onClick={this.submit}>Submit</button>

  </form>


    )
  }
}

  //form from alex branch
  
export default EducatorAddForm;
