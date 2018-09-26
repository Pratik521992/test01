import React, {
  Component
} from 'react';
import './App.css';
import axios from 'axios';
import Best from './Components/best';
import APIdatas from './Components/APIdataUS';
import Chart from './Components/bar';
import Age from  './Components/ageUS';
import Assigneddata from './Components/AssigneddataUS';
import { Bar } from 'react-chartjs-2';
import PendinCust from './Components/pendingcust';
import Inprog from './Components/inprogress';


class AppUS extends Component {


  constructor() {
    super(); 
    this.state = {
      data : [],
      data2 : [],
      data3 : [],
      data4 : [],
      loading : false,
      isP1 : false
      
    }
    

  }

  

  getAPIdata(){

        this.setState ({
          loading : true,
          isP1 : true
        })
        axios.get('http://localhost:9080/RCA+CA/rest/sync/getUSopen')
          .then(result => {
            this.setState({
              data2 : result.data,
              loading : false
              
             
            })
            
          })
         
          this.getbestdata();
          
  }

  getbestdata(){

    
    axios.get('http://localhost:9080/RCA+CA/rest/sync/best')
      .then(result => {
        this.setState({
          data3 : result.data
          
        })
        
      })
      

        
      
}

getchartdata(){

  
  
  axios.get('http://10.11.72.89:9080/DashboardR5/rest/sync/opentrend')
    .then(result => {
      this.setState({
        data4 : result.data,
        

      })
      
    })
    

      
    
}

getCAAPIdata(){

  this.setState ({
    loading : true,
    isP1 : 'Ca'
  })
  
  axios.get('https://jsonplaceholder.typicode.com/CA')
    .then(result => {
      this.setState({
        data : result.data,
        loading : false,

      })
      
    })
    

      
    
}

  componentDidMount(){

    this.getAPIdata();
  }

  handleNewProject(datanew){
    
    let data = this.state.data;
    data.push(datanew);
    this.setState({data : data});
  }

 

   render() {

      
    return (
    
    <div > 
       
     
      <div className="wrap">
      <APIdatas Apidata = {this.state.data2.records} isLoading = {this.state.loading}  P1click = {this.getAPIdata.bind(this)} />
      <Age age = {this.state.data2.records} isLoading = {this.state.loading}/> 
      <Assigneddata assdata = {this.state.data2.records} isLoading = {this.state.loading}/> 
     
     </div>
     <Best bestdata = {this.state.data3.records} chartdata = {this.state.data4.records} />
     
     
      
        
       
    </div>
    


    );
  }
}

export default AppUS;