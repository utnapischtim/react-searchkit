import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';

export default class Count extends Component {
  constructor(props) {
    super(props);
    this.renderTemplate = props.renderTemplate || this._renderTemplate;
  }

  _renderTemplate(total) {
    return (
      <Fragment>
        <Label color={'blue'}>{total}</Label>
      </Fragment>
    );
  }

  render() {
    const { total, loading } = this.props;

    if (loading) {
      return null;
    }
    return total > 0 ? this.renderTemplate(total) : null;
  }
}

Count.propTypes = {
  total: PropTypes.number,
  renderTemplate: PropTypes.func,
};

Count.defaultProps = {
  total: 0,
  renderTemplate: undefined,
};