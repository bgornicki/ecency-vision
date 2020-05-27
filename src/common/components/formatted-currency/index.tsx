import React, {Component} from 'react';

import {State as GlobalState} from '../../store/global/types';

interface Props {
    global: GlobalState,
    value: number,
    fixAt: number
}

export default class FormattedCurrency extends Component<Props> {
    public static defaultProps: Partial<Props> = {
        fixAt: 2
    };

    render() {
        const {global, value, fixAt} = this.props;
        const {currencyRate, currencySymbol} = global;

        const valInCurrency = value * currencyRate;

        return (
            <>
                {`${currencySymbol} ${valInCurrency.toFixed(fixAt)}`}
            </>
        );
    }
}