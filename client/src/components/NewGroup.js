import React, { Component } from "react";
import {
  Box,
  Article,
  Section,
  Header,
  Heading,
  Form,
  Footer,
  FormFields,
  Button,
  Split,
  FormField,
  TextInput
} from "grommet";
import Auth from "../Auth";
import { addGroup } from "../actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class NewGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gid: null,
      show: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name } = this.state;
    this.props
      .dispatch(addGroup(name, Auth.userID))
      .then(() => {
        this.setState({
          gid: this.props.groups[this.props.groups.length - 1].id,
          name: "",
          show: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleInputChange(event) {
    const target = event.target;
    const { name, value } = target;

    this.setState({
      [name]: value
    });
  }

  render() {
    if (this.state.show === true) {
      return <Redirect to={`/groups/${this.state.gid}`} />;
    }
    return (
      <div>
        <Split flex="right" separator={false} fixed={false}>
          <Box justify="center" align="start" pad="medium">
            <Article ref="content" pad="none" style={{ marginLeft: "-3%" }}>
              <Section key="utilization" pad="medium" full="horizontal">
                <Form onSubmit={this.handleSubmit}>
                  <Header>
                    <Heading tag="h2">Create New Group</Heading>
                  </Header>
                  <FormFields>
                    <FormField label="Group Name">
                      <TextInput
                        onDOMChange={e => this.handleInputChange(e)}
                        name="name"
                      />
                    </FormField>
                  </FormFields>
                  <Footer pad={{ vertical: "medium" }}>
                    <Button label="Submit" type="submit" primary={true} />
                  </Footer>
                </Form>
              </Section>
            </Article>
          </Box>
        </Split>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    groups: state.groups.groups
  };
};

export default connect(mapStateToProps)(NewGroup);
