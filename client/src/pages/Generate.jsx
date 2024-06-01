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
  className: `btn btn-secondary`,
})`
  margin: 15px 15px 15px 5px;
`;

class Generate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      domain: "",
      short_url: "",
    };
  }

  handleChangeInputName = async (event) => {
    const domain = event.target.value;
    this.setState({ domain });
  };

  handleCreateUrl = async () => {
    const { domain } = this.state;
    const payload = { domain };
    if (
      domain.startsWith("www") ||
      domain.startsWith("http") ||
      domain.startsWith("https")
    ) {
      await api.createUrl(payload).then((res) => {
        const short_url = res?.data?.short_url;
        this.setState({
          domain,
          short_url,
        });
      });
    } else {
      window.alert(`Input needs to be url`);
    }
  };

  render() {
    const { domain, short_url } = this.state;
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
        <span>
          {short_url && `Your short url link is: ${short_url}`}{" "}
          {short_url && (
            <Button onClick={navigator.clipboard.writeText(short_url)}>
              Copy to clipboard
            </Button>
          )}
        </span>
      </Wrapper>
    );
  }
}

export default Generate;
