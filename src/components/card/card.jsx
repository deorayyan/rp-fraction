import React, { Fragment } from 'react';

import scss from './card.module.scss';

class CardComponent extends React.Component {
    render() {
        const { total, fraction, isLeft, className } = this.props;
        return (
            <div className={`${scss.card} ${scss[className]}`}>
                <div className={scss.card__total}>
                    {isLeft ? (
                        <span>Left</span>
                    ) : (
                        <Fragment>
                            {total}
                            <span>x</span>
                        </Fragment>
                    )}
                </div>
                <div className={scss.card__content}>
                    <span>Rp</span>
                    {fraction}
                    {isLeft ? <small>(No available fraction)</small> : ''}
                </div>
            </div>
        );
    }
}

export default CardComponent;
