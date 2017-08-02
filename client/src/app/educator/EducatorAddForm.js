import React from 'react';

const TeacherAddForm = () =>
  //form from alex branch
  <form>
    <div className="form-group">
      <label for="firstName">First Name:</label>
      <input type="text" className="form-control" id="firstName" placeholder="First Name" autofocus required />
    </div>
    <div className="form-group">
      <label for="lastName">Last Name:</label>
      <input type="text" className="form-control" id="lastName" placeholder="Last Name" required />
    </div>
    <div className="form-group">
      <label for="email">Email address:</label>
      <input type="email" className="form-control" id="email" placeholder="Email Address" required />
    </div>
    <div className="form-group">
      <label for="school">School:</label>
      <input type="text" className="form-control" id="school" placeholder="School" required />
    </div>
    <div className="form-group">
      <label for="grade-level">Grade Level:</label>
      <input type="text" className="form-control" id="grade-level" placeholder="Grade Level" required />
    </div>
    <div className="form-group">
      <label for="username">Username:</label>
      <input type="text" className="form-control" id="username" placeholder="Username" />
    </div>
    <div className="form-group">
      <label for="password">Password:</label>
      <input type="password" className="form-control" id="password" placeholder="Password" />
    </div>
    <div className="checkbox">
      <label><input type="checkbox" />Remember me</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>

  </form>;

export default TeacherAddForm;
