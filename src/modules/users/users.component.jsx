import React from 'react';
import PropTypes from 'prop-types';

import {UsersItem} from './users-item';

import List from '@material-ui/core/List';
import {withFills} from '../../providers/fills-provider';

export const UsersComponent = props => {
    return (
        <List>
            {Object.keys(props.users).map(userId => {
                const user = props.users[userId];

                return (
                    <UsersItem
                        key={userId}
                        id={user.id}
                        formId={props.formId}
                    />
                );
            })}
        </List>
    );
};

export const Users = withFills(UsersComponent);

UsersComponent.propTypes = {
    formId: PropTypes.string.isRequired,
    users: PropTypes.object.isRequired
};