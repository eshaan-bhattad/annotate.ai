import React, { Component } from "react";
import {
  ReactReader, // A simple epub-reader with left/right button and chapter navigation
  ReactReaderStyle,
  getRendition, // Styles for the epub-reader it you need to customize it
} from "react-reader";
import SelectionHighlighter from "react-highlight-selection";
const storage = global.localStorage || null;
class ePubPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullscreen: false,
      location:
        storage && storage.getItem("epub-location")
          ? storage.getItem("epub-location")
          : 2,
      localFile: null,
      localName: null,
      largeText: false,
    };
    this.rendition = null;
  }

  toggleFullscreen = () => {
    this.setState(
      {
        fullscreen: !this.state.fullscreen,
      },
      () => {
        setTimeout(() => {
          const evt = document.createEvent("UIEvents");
          evt.initUIEvent("resize", true, false, global, 0);
        }, 1000);
      }
    );
  };

  onLocationChanged = (location) => {
    this.setState(
      {
        location,
      },
      () => {
        storage && storage.setItem("epub-location", location);
      }
    );
  };

  onToggleFontSize = () => {
    const nextState = !this.state.largeText;
    this.setState(
      {
        largeText: nextState,
      },
      () => {
        this.rendition.themes.fontSize(nextState ? "140%" : "100%");
      }
    );
  };

  getRendition = (rendition) => {
    // Set inital font-size, and add a pointer to rendition for later updates
    const { largeText } = this.state;
    this.rendition = rendition;
    rendition.themes.fontSize(largeText ? "140%" : "100%");
  };
  handleChangeFile = (event, results) => {
    if (results.length > 0) {
      const [e, file] = results[0];
      if (file.type !== "application/epub+zip") {
        return alert("Unsupported type");
      }
      this.setState({
        localFile: e.target.result,
        localName: file.name,
        location: null,
      });
    }
  };
  render() {
    return (
      <div style={{ position: "relative", height: "100%" }}>
        <ReactReader
          style={ReactReaderStyle}
          url={"/littleprince.epub"}
          title={"The Little Prince"}
          locationChanged={(epubcifi) => console.log(epubcifi)}
          swipeable={true}
          getRendition={this.getRendition}
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
