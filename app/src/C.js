import React , {Component} from 'react';
import { connect } from 'react-redux';
class Calculator extends React.Component {
 constructor(props){
     super(props)
     this.state={
       //  data : []
     }
 }
 componentDidMount(){
    this.props.getData();
 }
 
 render() {
    const {data} = this.props;
      return (
        <div>
        {
          data.map((data,i)=>{
            return <div key={i}> id : {data.id} name : {data.employee_name}</div>
          })
         
        }
      </div>
      );
    }
  }
  const mapStateToProps = state => {
    return {
       data : state.data
    };
};

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch({ type: 'GET_DATA'}),  
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Calculator);
