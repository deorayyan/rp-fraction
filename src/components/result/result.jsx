import React from 'react';
import Card from '../card';
import scss from './result.module.scss';

class ResultComponent extends React.Component {
    render() {
        const currency = new Intl.NumberFormat('id-ID');

        const { denominations } = this.props;

        return (
            <div className={scss.result}>
                {Array.isArray(denominations) && denominations.length > 0 ? (
                    <ul>
                        {denominations.map((denomination, key) => {
                            return (
                                <li key={key}>
                                    <Card
                                        className={`card--${
                                            denomination.fraction
                                        }`}
                                        isLeft={denomination.isLeft}
                                        total={denomination.total}
                                        fraction={currency.format(
                                            denomination.fraction
                                        )}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <div className="error">{denominations}</div>
                )}
            </div>
        );
    }
}

export default ResultComponent;
