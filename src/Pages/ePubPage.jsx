import React, { Component } from "react";
import {
  ReactReader, // A simple epub-reader with left/right button and chapter navigation
  ReactReaderStyle, // Styles for the epub-reader it you need to customize it
} from "react-reader";
import SelectionHighlighter from "react-highlight-selection";

class ePubPage extends Component {
  render() {
    return (
      <div style={{ position: "relative", height: "100%" }}>
        <ReactReader
          style={ReactReaderStyle}
          url={"/greatgatsby.epub"}
          title={"Great Gatbsy"}
          locationChanged={(epubcifi) => console.log(epubcifi)}
          swipeable={true}
        />
        <SelectionHighlighter
          selectionHandler={this.selectionHandler}
          customClass="custom-class"
        />
      </div>
    );
  }
}

export default ePubPage;
