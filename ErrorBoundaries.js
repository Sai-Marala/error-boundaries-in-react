
import React, { Component } from 'react'

export class ErrorBoundaries extends Component() {
    constructor(props){
        super(props);
            this.state={error:null}
    }
    ComponentDidCatch(error){
        this.setState({
            error:error
        })
    }
    render(){
        if(this.state.error){
            return(
                <h1>oops something went wrong</h1>
            )
        }
        return(
            this.props.childern
        );
    }
  
}
export default ErrorBoundaries;
