import React from 'react';
import PropTypes from 'prop-types';

import {Users as UsersList} from '../modules/users';
import {NavigationBar} from '../modules/navigation';
import {ContentWrapper} from '../modules/content-wrapper';

export const Users = props => {
    const formId = props.match.params.formId;

    return (
        <React.Fragment>
            <NavigationBar/>
            <ContentWrapper style={{marginBottom: 20}}>
                <UsersList formId={formId} />
            </ContentWrapper>
        </React.Fragment>
    );
};

Users.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            formId: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};