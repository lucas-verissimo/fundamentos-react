import './Contador.css'
import { Component } from "react";

import Display from './Display'
import PassoForm from './PassoForm'
import Botoes from './Botoes'

const Contador =  class Contador extends Component {

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    mudarPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }


    render() {
        return (
            <div className='Contador'>
                <h2>Contador</h2>

                <PassoForm passo={this.state.passo} onPassoChange={(e) => this.mudarPasso(e)}></PassoForm>
                <Display valor={this.state.valor}></Display>
                <Botoes onInc={this.inc} onDec={this.dec}></Botoes>
            </div>

        );
    };
};

export default Contador;