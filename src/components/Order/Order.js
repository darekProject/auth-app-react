import React, {Component} from 'react';
import './Order.css';

class Order extends Component {
    render() {
        return (
            <div className="container">
                <div className="row wrapper-order">
                    <div className="col-6 picture">
                        <img src="soczewki.jpg" alt="Soczewki"/>
                    </div>
                    <div className="col-6 address">
                        <header>
                            ADRES:
                        </header>
                        <article>
                            <p><span>Miasto:</span> Kraków</p>
                            <p><span>Ulica:</span> Norymberska 10c</p>
                            <p><span>Kod:</span> 30-376 Kraków</p>
                        </article>
                    </div>
                </div>
            </div>
        )
    }
}

export default Order;