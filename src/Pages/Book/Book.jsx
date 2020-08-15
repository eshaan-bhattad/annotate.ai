import React, { Component } from "react";
import { ReactReader } from "./modules";
import { Container, ReaderContainer } from "./Components";
import "./annotate";
import { Button, Modal } from "react-bootstrap";
import DataTable from "./DataTable";

const storage = global.localStorage || null;
const heading = ["Text", "Note"];
const DEMO_URL = "/littleprince.epub";
const DEMO_NAME = "The Little Prince";

class Book extends Component {
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
      annotations: [{ item: "Address", thing: "Add your notes" }],
    };
    this.rendition = null;
  }
  addAnnotation() {}
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
    const { fullscreen, location, localFile, localName } = this.state;
    return (
      <div>
        <Container>
          <ReaderContainer fullscreen={fullscreen}>
            <ReactReader
              url={localFile || DEMO_URL}
              title={localName || DEMO_NAME}
              location={location}
              locationChanged={this.onLocationChanged}
              getRendition={this.getRendition}
            />
          </ReaderContainer>
        </Container>
        <li>
          <ul></ul>
        </li>
      </div>
    );
  }

  Example() {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose} id="myModel">
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  onRenditionSelection = (cfiRange) => {
    console.log("Selection was created", cfiRange);
    const notes = prompt("Enter in your notes: ");
    const annotation = {
      cfi: cfiRange,
      text: notes,
    };
    this.state.annotations.push(annotation);
    console.log(this.state.annotations);
  };
  getRendition = (rendition) => {
    // Get access to core events from epubjs
    rendition.on("selected", this.onRenditionSelection);
    // Add custom styles
    rendition.themes.default({
      "::selection": {
        background: "rgba(255,255,0, 0.3)",
      },
    });
  };
}

export default Book;
