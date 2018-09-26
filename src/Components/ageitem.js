import React, { Component } from 'react';

class Ageitems extends Component {

    render() {


        

        return (
        <section className="top-container">  

            <header className="top-box-a">
                <i className="fas fa-2x">AGED</i>
               
            </header>
            <header className="top-box-a">
                <i className="fa fa-1x">P1</i>
                <p className="price" > {this.props.data.p1agebr}</p>
            </header>
            <header className="top-box-b">
                <i className="fa fa-1x">P2</i>
                <p className="price" > {this.props.data.p2agebr}</p>
            </header>
            <header className="top-box-c">
                <i className="fa fa-1x">P3</i>
                <p className="price" >{this.props.data.p3agebr}</p>
            </header>
            <header className="top-box-a">
                <i className="fa fa-1x">P4</i>
                <p className="price" > {this.props.data.p4agebr} </p>
            </header>
            <header className="top-box-a">
                <i className="fas  fa-1x">Total</i>
                <p className="price" > {this.props.data.totagebr} </p>
            </header>       
       
        </section>       
            
        )
    }

}
export default Ageitems;