import React from 'react';
import PropTypes from 'prop-types';

import {EditContainer} from '../modules/edit';
import {NavigationBar} from '../modules/navigation';
import {ContentWrapper} from '../modules/content-wrapper';
import {FormProviderContainer} from '../providers/form-provider';

export const Edit = props => {
    return (
        <React.Fragment>
            <NavigationBar/>
            <ContentWrapper>
                <FormProviderContainer formId={props.match.params.formId}>
                    <EditContainer/>
                </FormProviderContainer>
            </ContentWrapper>
        </React.Fragment>
    );
};

Edit.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            formId: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};