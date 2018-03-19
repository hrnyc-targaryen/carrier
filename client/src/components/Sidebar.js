import React, { Component } from "react";
import {
  Title,
  Sidebar as GrommetSidebar,
  Header,
  Menu,
  Box,
  Anchor
} from "grommet";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // Always open, for now.
    return (
      <GrommetSidebar colorIndex="neutral-1" fixed={true}>
        <Header pad="medium" justify="start">
          <Title>MailAppTitle</Title>
        </Header>
        <Box flex="grow" justify="start">
          <Menu primary={true}>
            <Anchor href="#">Dashboard</Anchor>
            <Anchor href="#">Profile</Anchor>
            <Anchor href="#">New</Anchor>
          </Menu>
        </Box>
      </GrommetSidebar>
    );
  }
}

export default Sidebar;
