import React from "react";
import SearchBar from "./SearchBar";

import ImageList from "./ImageList";
import unsplash from "../api/unsplash";

class App extends React.Component {
  state = { images: [] };
  componentDidMount() {
    this.onSearchSubmit("Apple");
  }
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID 845CgFQOJycaz3aiP-DSHAZ7CMkxz9qBYDmM09VCWB0",
      },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
