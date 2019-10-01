import React from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import CircularProgress from '@material-ui/core/CircularProgress';

import {FormsListItem} from './forms-item.component';

export class FormsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            rowsPerPage: 5
        };
    }

    componentDidMount() {
        if (!this.props.isFormListLoaded) {
            this.props.fetchForms();
        }
    }

    render() {
        if (this.props.isFormListLoaded) {
            return this.renderTable();
        } else {
            return <CircularProgress style={{ display: 'block', margin: 'auto'}}/>;
        }
    }

    renderTable() {
        const startIndex = this.state.page * this.state.rowsPerPage;
        const endIndex = this.state.page * this.state.rowsPerPage + this.state.rowsPerPage;
        const displayForms = this.props.formsList.slice(startIndex, endIndex);

        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Form name</TableCell>
                        <TableCell>Fields</TableCell>
                        <TableCell>People</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {displayForms.map(form => {
                        return (
                            <FormsListItem
                                key={form.id}
                                // props for withFills hoc
                                formId={form.id}
                                loader={(
                                    <TableRow>
                                        <TableCell>
                                            <CircularProgress style={{ display: 'block', margin: 'auto'}}/>
                                        </TableCell>
                                    </TableRow>
                                )}
                                // props form FormListItem
                                form={form}
                            />
                        );
                    })}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            page={this.state.page}
                            rowsPerPage={this.state.rowsPerPage}
                            count={this.props.formsList.length}
                            rowsPerPageOptions={[5, 10, 25]}
                            onChangePage={this.handleChangePage}
                            onChangeRowsPerPage={this.handleChangeRowsOnPage}
                            SelectProps={{
                                inputProps: {'aria-label': 'rows per page'},
                                native: true
                            }}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        );
    }

    handleChangeRowsOnPage = event => {
        this.setState({
            page: 0,
            rowsPerPage: parseInt(event.target.value, 10)
        })
    };

    handleChangePage = (event, page) => {
        this.setState({page})
    };
}

FormsList.propTypes = {
    formsList: PropTypes.array.isRequired,
    isFormListLoaded: PropTypes.bool.isRequired
};