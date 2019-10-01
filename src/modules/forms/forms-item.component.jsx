import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Clipboard from 'react-clipboard.js';

import EditIcon from '@material-ui/icons/Edit';
import ShareIcon from '@material-ui/icons/Share';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

import {withFills} from '../../providers/fills-provider';

const Edit = props => {
    return (
        <Link to={`/edit/${props.id}`}>
            <IconButton><EditIcon/></IconButton>
        </Link>
    );
};

const QuestionAnswer = props => {
    return (
        <Link to={`/users/${props.id}`}>
            <IconButton><QuestionAnswerIcon/></IconButton>
        </Link>
    );
};

const FormsListItemComponent = props => {
    const usersNumber = Object.keys(props.users).length;
    const clipboardText = `${window.location.origin}/fill/${props.form.id}`;

    return (
        <TableRow>
            <TableCell>{props.form.name}</TableCell>
            <TableCell>{props.form.fields}</TableCell>
            <TableCell>{usersNumber}</TableCell>
            <TableCell>
                {
                    usersNumber > 0
                        ? (
                            <QuestionAnswer id={props.form.id}/>
                        ) : (
                            <Edit id={props.form.id}/>
                        )
                }
                <Clipboard component="span" data-clipboard-text={clipboardText}>
                    <IconButton><ShareIcon/></IconButton>
                </Clipboard>
            </TableCell>
        </TableRow>
    );
};

export const FormsListItem = withFills(FormsListItemComponent);

FormsListItemComponent.propTypes = {
    form: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired
};