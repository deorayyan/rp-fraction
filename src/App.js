import React from 'react';

// Components
import Layout from './layouts/default';
import Form from './components/form';
import Result from './components/result';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            denominations: []
        };

        this.textInput = React.createRef();
        this.getResult = this.getResult.bind(this);
    }

    render() {
        return (
            <Layout>
                <div className="row">
                    <div className="col-md-6">
                        <Form onSubmit={this.getResult} />
                    </div>
                    <div className="col-md-6">
                        <Result denominations={this.state.denominations} />
                    </div>
                </div>
            </Layout>
        );
    }

    getResult(result) {
        this.setState({
            denominations: result
        });
    }
}

export default App;
