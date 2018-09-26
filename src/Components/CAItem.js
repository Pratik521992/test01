import React, { Component } from 'react';

class CAItem extends Component {

    render() {


       

        return (

            <li>
               <strong> {this.props.data.name} </strong> - {this.props.data.email} - {this.props.data.address.city}

            </li>
        )
    }

}
export default CAItem;