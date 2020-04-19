import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { Tabs, Tab } from "react-bootstrap";

function TabContainer() {
  return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
      <Tab eventKey="home" title="Home">
        My Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        My Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Disabled Contact
      </Tab>
    </Tabs>
  );
}

export default TabContainer;
