'use strict';
import React from 'react';

const Table = () => {

    const URL = 'https://founders-takehome-api.herokuapp.com/api/fetch'

       constructor(props) {
          super(props)
          this.state = { 
             foods: [{}]
          }
       }
    // Make a GET request to `https://founders-takehome-api.herokuapp.com/api/fetch` (initialized as `URL`)
       componentDidMount() {
         fetch("https://founders-takehome-api.herokuapp.com/api/fetch")
          .then(response => response.json())
          .then(data => this.setState({ foods: data.foods }));
      }
       
        //Process response data into an HTML table

        //Feel free to delegate to as many components as you like or make Table a class-based component
    renderTableHeader() {
          let header = Object.keys(this.state.foods[0])
          return header.map((key, index) => {
             return <th key={index}>{key.toUpperCase()}</th>
          })
       }
    renderTableData() {
      return this.state.foods.map((foods, index) => {
         const {name, quantity, calories, carbohydrates} = foods //destructuring
         return (
            <tr key={name}>
               <td>{name}</td>
               <td>{quantity}</td>
               <td>{calories}</td>
               <td>{carbohydrates}</td>
            </tr>
         )
      })
   }


    return (
         <div>
            <h1 id='title'>Food Nutritional Information</h1>
            <table id='foods'>
               <tbody>
               	<tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
}

const domContainer = document.querySelector('#table');
ReactDOM.render(<Table />, domContainer);
