import React, {Fragment} from 'react';

class ResultComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            denominations: [],
            balance: 0,
            errorValidationMsg: ''
        }

        this.textInput = React.createRef();

        // Bind custom function
        this.calculateFractions = this.calculateFractions.bind(this);
    }

    componentDidMount() {
        // this.calculateFractions();
    }
    
    render() {
        const {
            denominations,
            balance,
            errorValidationMsg
        } = this.state;

        return (
            <Fragment>
                <div className="row mt-5 justify-content-center">
                    <div className="col-lg-6">
                        <form className="form" action="/" onSubmit={e => this.calculateFractions(e)}>
                            <div className="input-group input-group-lg">
                                <input className="form-control" ref={this.textInput} type="text" />
                                <div className="input-group-append">
                                    <input className="btn btn-primary" type="submit" value="Calculate"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row mt-3 justify-content-center">
                    <div className="col-lg-6">
                    {errorValidationMsg &&
                        errorValidationMsg
                    }
                    <ul className="list-group list-group-flush">
                    {denominations.length > 0 &&
                        denominations.map((denomination, key) => {
                            return (<li className="list-group-item" key={key}>{denomination.total}x <b>Rp{denomination.fraction}</b></li>);
                        })
                    }

                    {(balance > 0) &&
                        <li className="list-group-item">Left <b>Rp{balance}</b><br /><small>(No available fraction)</small></li>
                    }
                    </ul>
                    </div>
                </div>
            </Fragment>
        );
        
    }

    // Let's calculate the result!
    calculateFractions(e) {
        e.preventDefault();
        
        let userInput   = this.textInput.current.value;
        let fractions   = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 100, 50];
        let newBalance  = userInput;
        let newDenominations   = [];

        newBalance = newBalance.trim();

        // Reset states
        this.setState({
            denominations: newDenominations,
            balance: 0
        });

        // eslint-disable-next-line
        if ( newBalance.search(/^(Rp\s?)?([1-9]{1}[0-9]{0,2})(\.\d{3})*(\,0{2})?$|^(Rp\s?0{0,}?)?([1-9]{1}[0-9]{0,2})(\d{3})*(\,0{2})?$|^(0)?(\,0{2})?$|^(Rp\s?0)?(\,0{2})?$|^(Rp\s?0{0,}?\,)(0{2})?$/gm) >= 0 ) {
            // Remove Rp
            if ( newBalance.indexOf('Rp') >= 0 ) {
                newBalance = newBalance.substr(2, newBalance.length);
            }

            // Remove dots
            if ( newBalance.indexOf('.') >= 0 ) {
                newBalance = newBalance.replace(/\./g, '');
            }

            // Remove comma
            if ( newBalance.indexOf(',') >= 0 ) {
                newBalance = newBalance.substr(0, newBalance.indexOf(','));
            }

            console.log(newBalance);

            fractions.map( (fraction) => {
                if ( newBalance >= fraction ) {
                    let fractionsCount = 0;
                    while ( newBalance >= fraction ) {
                        newBalance -= fraction;
                        fractionsCount++;
                    }
    
                    newDenominations.push({
                        'fraction': fraction,
                        'total': fractionsCount
                    });
                }
                return newDenominations;
            } );
            
            if ( newBalance > 0 ) {
                this.setState({balance: newBalance});
            }
    
            this.setState({
                denominations: newDenominations,
                errorValidationMsg: ''
            });
        } else {
            this.setState({errorValidationMsg: 'Error validation'});
        }
    }
}

export default ResultComponent;