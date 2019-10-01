import React from 'react';

import {FormsContainer} from '../modules/forms';
import {NavigationBar} from '../modules/navigation';
import {ContentWrapper} from '../modules/content-wrapper';

export const Home = () => {
    return (
        <React.Fragment>
            <NavigationBar/>
            <ContentWrapper style={{marginBottom: 20}}>
                <FormsContainer/>
            </ContentWrapper>
        </React.Fragment>
    );
};
