import React from 'react';
import { Route } from 'react-router-dom';
import TeacherAddForm from './teacher/TeacherAddForm';
const App = () =>
  <div className="container-fluid">
    <TeacherAddForm />
    <Route path="/teach/add" component={TeacherAddForm} />
  </div>;

export default App;
