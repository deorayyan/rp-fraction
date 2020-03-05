import React from 'react';
import Fractions from '../../lib/fractions';

class FormComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            denominations: []
        };

        this.textInput = React.createRef();

        // Bind custom function
        this.calculateFractions = this.calculateFractions.bind(this);
    }

    render() {
        return (
            <div>
                <h1>IDR Fractions Project</h1>

                <p>
                    This program is a tool that can be used to calculate how
                    many Rupiah’s fractions based on user input. Created by{' '}
                    <strong>Deo Aqli Rayyan</strong> as requirements for
                    Front-end developer test at <strong>Tokopedia</strong>.
                    Cheers!
                </p>

                <form
                    className="form"
                    action="/"
                    onSubmit={this.calculateFractions}
                >
                    <label htmlFor="userInput">
                        Please input some value and let’s calculate!
                    </label>
                    <div className="input-group input-group-lg">
                        <input
                            id="userInput"
                            className="form-control"
                            ref={this.textInput}
                            placeholder='Try "Rp188.859,00"'
                            type="text"
                        />
                        <div className="input-group-append">
                            <input
                                className="btn btn-primary"
                                type="submit"
                                value="Calculate"
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    // Let's calculate the result!
    calculateFractions(e) {
        e.preventDefault();

        let userInput = this.textInput.current.value;
        let result = Fractions(userInput);

        this.props.onSubmit(result);
    }
}

export default FormComponent;
