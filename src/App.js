import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers =[
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '가가가',
  'birthday': '950417',
  'gender': '남자',
  'job': '대학생'

},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '나나나',
  'birthday': '950417',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '다다다',
  'birthday': '950417',
  'gender': '남자',
  'job': '대학생'
}
]

class App extends Component {
  render(){
    return (
      <div>
        {
          customers.map(c=>{
            return (
              <Customer
                keqy={c.id}
                id ={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
