import React, { Component } from 'react';
import { Box } from 'grommet';

class Layout extends Component {
  state = {  }
  render() { 
    return ( 
      <Box >
        {this.props.children}
      </Box>
     );
  }
}
 
export default Layout;