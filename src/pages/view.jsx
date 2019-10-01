import React from 'react';
import PropTypes from 'prop-types';

import {NavigationBar} from '../modules/navigation';
import {ContentWrapper} from '../modules/content-wrapper';
import {FormViewerContainer} from '../modules/form-viewer';
import {FormProviderContainer} from '../providers/form-provider';

export const View = props => {
    const formId = props.match.params.formId;
    const userId = props.match.params.userId;

    return (
        <>
            <NavigationBar/>
            <ContentWrapper>
                <FormProviderContainer formId={formId}>
                    <FormViewerContainer formId={formId} userId={userId}/>
                </FormProviderContainer>
            </ContentWrapper>
        </>
    );
};

View.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            formId: PropTypes.string.isRequired,
            userId: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

