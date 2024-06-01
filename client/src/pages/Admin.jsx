import React, { Component } from "react";
import ReactTable from "react-table";
import api from "../api";
import "react-table/react-table.css";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      columns: [],
      isLoading: true,
    };
  }

  componentDidMount = async () => {
    await api.getAllUrls().then((urls) => {
      this.setState({
        urls: urls.data.data,
        isLoading: false,
      });
    });
  };

  render() {
    const { urls, isLoading } = this.state;

    const columns = [
      {
        Header: "Short Url",
        accessor: "short_url",
        filterable: true,
      },
      {
        Header: "Domain",
        accessor: "domain",
        filterable: true,
      },
      {
        Header: "Rating",
        accessor: "rating",
        filterable: true,
      },
    ];

    return (
      <ReactTable
        data={urls}
        columns={columns}
        loading={isLoading}
        defaultPageSize={10}
        showPageSizeOptions={true}
        minRows={0}
        sortDescFirst={true}
        initialState={{
          sorting: [
            {
              id: "rating",
              desc: true,
            },
          ],
        }}
      />
    );
  }
}

export default Admin;
