import React, { Component } from 'react';
import { Grid } from 'grommet';

class Layout extends Component {
  state = {}
  render() {
    return (
      <Grid
        rows={['auto', 'auto']}
        columns={['auto', 'full']}
        gap="small"
        areas={[
          { name: 'header', start: [0, 0], end: [1, 0] },
          { name: 'preview', start: [0, 1], end: [0, 1] },
          { name: 'selection', start: [1, 1], end: [1, 1] },
          { name: 'selection', start: [1, 1], end: [1, 1] },
        ]}
      >
        {this.props.children}
      </Grid>
    );
  }
}

export default Layout;