import React from 'react';
import '../App.css';
import AppCss from '../css-modules/app.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import Display from './Display'
import Total from './Total'
import AddExpense from './addExpense'



function App() {
  return (
    <div className={`${AppCss.container} App`}>
      <div className={AppCss.content}>
              <Header />
              <Total />
              <Display />
              <AddExpense />
      </div>
      <Footer/>

    </div>
  );
}

export default App;
