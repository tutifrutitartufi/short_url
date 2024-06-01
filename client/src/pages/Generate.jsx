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
      long_url: "",
    };
  }

  handleChangeInputName = async (event) => {
    const long_url = event.target.value;
    this.setState({ long_url });
  };

  handleCreateUrl = async () => {
    const { long_url } = this.state;
    const payload = { long_url };
    if (long_url.startsWith("www.")) {
      await api.createUrl(payload).then((res) => {
        window.alert(`Short url created: ${res?.data?.short_url}`);
        this.setState({
          long_url,
        });
      });
    } else {
      window.alert(`Input needs to be url`);
    }
  };

  render() {
    const { long_url } = this.state;
    return (
      <Wrapper>
        <Title>Generate</Title>

        <Label>Long url:</Label>
        <InputText
          type="text"
          value={long_url}
          onChange={this.handleChangeInputName}
        />

        <Button onClick={this.handleCreateUrl}>Add Url</Button>
      </Wrapper>
    );
  }
}

export default Generate;
