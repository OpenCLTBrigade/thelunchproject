import React from 'react';
import { Route } from 'react-router-dom';
import EducatorAddForm from './educator/EducatorAddForm';
const App = () =>
  <div className="container-fluid">
    <Route path="/educator/add" component={EducatorAddForm} />
  </div>;

export default App;
