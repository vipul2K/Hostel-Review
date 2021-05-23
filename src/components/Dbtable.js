import '../style/comp.css';
import React from 'react';
import {db} from './Firebase';
class Dbtable extends React.Component{
  state={
    hostelreview:null
  }
  componentDidMount(){
    console.log('mounted');
    db.collection('hostelreview')
    .get()
    .then(snapshot=>{
      const hostelreview=[]
      snapshot.forEach(doc =>{
        const data = doc.data()
        hostelreview.push(data)
      })
      this.setState({hostelreview:hostelreview})
    })
    .catch(error=> console.log(error))
  }
  render(){
    return (
      <div className="db" class="center">
          <h2>DATABASE </h2>
          
            {
              this.state.hostelreview && 
              this.state.hostelreview.map(hostelreview =>{
                return(
                  <div className="align"> 
                  <div id="demobox aligh">
                  <h3>
                  <blockquote>
                  {hostelreview.msg}
                  
                  <i>
                  {hostelreview.name}
                  </i>
                  </blockquote>
                        </h3>
                  </div>             
                        </div>
                )
              })
            }
          
      </div>
    );
  }
}
  
  export default Dbtable;