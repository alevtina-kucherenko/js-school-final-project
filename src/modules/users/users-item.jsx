import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

export const UsersItem = props => {
    return (
        <Paper style={{margin: 10}}>
            <ListItem>
                <ListItemText
                    primary={props.id}
                />
                <Link to={`/view/${props.formId}/${props.id}`}>
                    <ListItemSecondaryAction>
                        <IconButton><SearchIcon/></IconButton>
                    </ListItemSecondaryAction>
                </Link>
            </ListItem>
        </Paper>
    )
};

UsersItem.propTypes = {
    id: PropTypes.number.isRequired,
    formId: PropTypes.string.isRequired,
};