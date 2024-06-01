import React, { Component } from "react";
import api from "../api";

import styled from "styled-components";

const Title = styled.h1.attrs({
  className: "h1",
})``;

const Wrapper = styled.div.attrs({
  className: "form-group",
})`
  margin: 0 30px;
`;

const Label = styled.label`
  margin: 5px;
`;

const InputText = styled.input.attrs({
  className: "form-control",
})`
  margin: 5px;
`;

const Button = styled.button.attrs({
  className: `btn btn-primary`,
})`
  margin: 15px 15px 15px 5px;
`;

class Generate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      domain: "",
    };
  }

  handleChangeInputName = async (event) => {
    const domain = event.target.value;
    this.setState({ domain });
  };

  handleCreateUrl = async () => {
    const { domain } = this.state;
    const payload = { domain };
    if (domain.startsWith("www.")) {
      await api.createUrl(payload).then((res) => {
        window.alert(`Short url created: ${res?.data?.short_url}`);
        this.setState({
          domain,
        });
      });
    } else {
      window.alert(`Input needs to be url`);
    }
  };

  render() {
    const { domain } = this.state;
    return (
      <Wrapper>
        <Title>Generate</Title>

        <Label>Domain</Label>
        <InputText
          type="text"
          value={domain}
          onChange={this.handleChangeInputName}
        />

        <Button onClick={this.handleCreateUrl}>Add Url</Button>
      </Wrapper>
    );
  }
}

export default Generate;
