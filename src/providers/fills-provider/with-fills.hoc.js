import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import {fetchFillsByFormId} from '../../actions/fetch-fills';

const mapDispatchToProps = dispatch => {
    return {
        fetchFillsByFormId: formId => {
            dispatch(fetchFillsByFormId(formId));
        }
    };
};

const mapStateToProps = (state, props) => {
    return {
        fillsForCurrentFormId: state.fills[props.formId] ? state.fills[props.formId] : null
    };
};

export function withFills(WrappedComponent) {

    class FillsProvider extends React.Component {
        componentDidMount() {
            if (!this.props.fillsForCurrentFormId) {
                this.props.fetchFillsByFormId(this.props.formId);
            }
        }

        render() {
            if (!this.props.fillsForCurrentFormId) {
                if (this.props.loader) {
                    return this.props.loader;
                } else {
                    return <CircularProgress style={{ display: 'block', margin: 'auto'}}/>;
                }
            } else {
                return <WrappedComponent {...this.props} users={this.props.fillsForCurrentFormId}/>;
            }
        }
    }

    FillsProvider.propTypes = {
        loader: PropTypes.element,
        fillsForCurrentFormId: PropTypes.object,
        fetchFillsByFormId: PropTypes.func.isRequired,
    };

    const FillsProviderContainer = connect(mapStateToProps, mapDispatchToProps)(FillsProvider);

    return FillsProviderContainer;
}
