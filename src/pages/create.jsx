import React from 'react';

import {CreateContainer} from '../modules/create';
import {NavigationBar} from '../modules/navigation';
import {ContentWrapper} from '../modules/content-wrapper';

export const Create = () => {
    return (
        <React.Fragment>
            <NavigationBar/>
            <ContentWrapper>
                <CreateContainer/>
            </ContentWrapper>
        </React.Fragment>
    );
};