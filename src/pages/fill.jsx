import React from 'react';
import PropTypes from 'prop-types';

import {FillContainer} from '../modules/fill';
import {ContentWrapper} from '../modules/content-wrapper';
import {FormProviderContainer} from '../providers/form-provider';

export const Fill = props => {
    return (
        <ContentWrapper style={{marginTop: 20}}>
            <FormProviderContainer formId={props.match.params.formId}>
                <FillContainer/>
            </FormProviderContainer>
        </ContentWrapper>
    );
};

Fill.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            formId: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};