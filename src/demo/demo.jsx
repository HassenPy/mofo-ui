import React from "react";
import { render } from "react-dom";

// Components

import { ThumbCarousel, TabSwitcher, Tab, RadioFilter, Collapse, Panel, MofoFooter } from "../exports.js";

const App = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

var BoundRadioFilter = React.createClass({
  getInitialState: function () {
    return {
      activeFilter: this.props.options[0].value,
    };
  },
  onChoiceChange: function (e) {
    this.setState({
      activeFilter: ((e.target) ? e.target.value : e),
    });
  },
  render() {
    return (
      <div>
        <h3>RadioFilter with value bound to external state</h3>
        <p>example with two way binding</p>

        <select value={this.state.activeFilter} onChange={this.onChoiceChange} name="topic" id="topic" className="c-select form-control wide">
          {this.props.options.map(filter => {
            return <option key={filter.value} value={filter.value}>{filter.label}</option>;
          })}
        </select>

        <RadioFilter value={this.state.activeFilter} onChange={this.onChoiceChange} options={this.props.options}></RadioFilter>
      </div>
    );
  }
});

const Switcher = React.createClass({
  getInitialState () {
    return {
      externalCSS: ``
    };
  },
  onChange () {
    let css = {
      vanilla: ``,
      "bootstrap-3": `./css/bootstrap.css`,
      "mofo-bootstrap": `./css/mofo-bootstrap.css`
    };

    this.setState({
      externalCSS: css[this.refs.themeSelect.value]
    });
  },
  render () {
    return (
      <div className="switcher">
        <div className="wrapper">
          <label htmlFor="theme-selector">Additional CSS</label>
          <select id="theme-selector" ref="themeSelect" onChange={this.onChange}>
            <option value="vanilla">None</option>
            <option value="bootstrap-3">Bootstrap 3</option>
            <option value="mofo-bootstrap">Mofo Bootstrap</option>
          </select>
        </div>

        <link rel="stylesheet" href={this.state.externalCSS}/>
        <link rel="stylesheet" href="./css/mofo-ui.css"/>
      </div>
    );
  }
});

let radioOptions = [
  {
    value: `featured`,
    label: `Featured Projects`
  },
  {
    value: `date_updated`,
    label: `Recently Updated`
  },
  {
    value: `date_created`,
    label: `Recently Added`
  },
  {
    value: `active`,
    label: `Most Active`
  },
  {
    value: `contributors`,
    label: `Most Contributors`
  }
];

let carouselData = [{
  image: `./img/headshot-1.jpg`,
  caption: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  attribution: `Cindy Sherman, Switzerland`
}, {
  image: `./img/headshot-2.jpg`,
  caption: `Very short quote.`,
  attribution: `Bob Loblaw, Kazakhstan`
}, {
  image: `./img/headshot-3.jpg`,
  caption: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  attribution: `Ken Bradford, Sealand`
}, {
  image: `./img/headshot-4.jpg`,
  caption: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  attribution: `Vic Toomey, Reykjavik`
}];

function handleRadioChange(choice) {
  console.log(`radioChange: ${choice}`);
}

function handleTabSwitch(target) {
  console.log(`tabChange: ${target.index} - ${target.tabName} - ${target.slug}`);
}

let footerLinks = [
  {
    iconType: `info`,
    link: `https://example.com`,
    text: `Info`
  },
  {
    iconType: `email`,
    link: `https://example.com`,
    text: `Email`
  },
  {
    iconType: `github`,
    link: `https://example.com`,
    text: `Github`
  },
  {
    iconType: `chat`,
    link: `https://example.com`,
    text: `IRC`
  },
  {
    iconType: `twitter`,
    link: `https://example.com`,
    text: `Twitter`,
  },
  {
    iconType: `facebook`,
    link: `https://example.com`,
    text: `Facebook`
  },
  {
    iconType: `cc-license`,
    link: `https://example.com`,
    text: `License`
  },
  {
    iconType: `code-of-conduct`,
    link: `https://example.com`,
    text: `Code of Conduct`
  },
  {
    iconType: `cookies`,
    link: `https://www.mozilla.org/privacy/websites/#cookies`,
    text: `Cookies`
  },
  {
    iconType: `legal`,
    link: `https://example.com`,
    text: `Legal`
  },
  {
    iconType: `privacy`,
    link: `https://example.com`,
    text: `Privacy`
  },
  {
    iconType: `donate`,
    link: `https://example.com`,
    text: `Donate`
  }
];

let orgs = [
  {
    name: `mozilla`,
    link: `https://mozilla.org`,
    description: (<p>Mozilla is a global non-profit dedicated to putting you in control of your online experience and shaping the future of the web for the public good. Visit us at <a href="https://mozilla.org">mozilla.org</a>.</p>),
    className: `mozilla`
  }
];
render((
  <App>
    <Switcher></Switcher>

    <div className="wrapper">
      <h1>Mofo UI Components</h1>

      <h3>Accordion</h3>

      <div>
        <Collapse accordion={false}>
          <Panel header="Heading 1">Forage flexitarian salvia migas fashion axe, meggings locavore poutine. Lo-fi plaid PBR&B, umami pinterest swag authentic beard cold-pressed. Ennui selfies scenester, kickstarter raw denim ramps disrupt forage keffiyeh put a bird on it. Direct trade helvetica umami messenger bag echo park typewriter chicharrones, williamsburg iPhone polaroid offal retro marfa. Offal cronut disrupt banh mi, kitsch shabby chic deep v schlitz intelligentsia letterpress affogato kogi. Green juice tacos austin gochujang, chillwave food truck chambray 8-bit master cleanse forage paleo bespoke. Yr squid ethical irony kickstarter, man braid paleo salvia man bun cred ugh tote bag post-ironic.</Panel>
          <Panel header="Heading 2 with a longer title which wraps on mobile">Forage flexitarian salvia migas fashion axe, meggings locavore poutine. Lo-fi plaid PBR&B, umami pinterest swag authentic beard cold-pressed. Ennui selfies scenester, kickstarter raw denim ramps disrupt forage keffiyeh put a bird on it. Direct trade helvetica umami messenger bag echo park typewriter chicharrones, williamsburg iPhone polaroid offal retro marfa. Offal cronut disrupt banh mi, kitsch shabby chic deep v schlitz intelligentsia letterpress affogato kogi. Green juice tacos austin gochujang, chillwave food truck chambray 8-bit master cleanse forage paleo bespoke. Yr squid ethical irony kickstarter, man braid paleo salvia man bun cred ugh tote bag post-ironic.</Panel>
        </Collapse>
      </div>

      <h3>RadioFilter</h3>

      <RadioFilter options={radioOptions} initialChoice={`date_created`} onChange={handleRadioChange}></RadioFilter>

      <BoundRadioFilter options={radioOptions}></BoundRadioFilter>

      <h3>TabSwitcher</h3>

      <h4>Hero Variant</h4>

      <TabSwitcher onChange={handleTabSwitch} initialTab={`schedule`}>
        <Tab slug="about" name="About" iconDefault="./img/icon-tab-schedule.svg" iconActive="./img/icon-tab-schedule-blue.svg">About content.</Tab>
        <Tab slug="schedule" name="Schedule" iconDefault="./img/icon-tab-schedule.svg" iconActive="./img/icon-tab-schedule-blue.svg">Schedule content.</Tab>
        <Tab slug="projects" name="Projects" iconDefault="./img/icon-tab-schedule.svg" iconActive="./img/icon-tab-schedule-blue.svg">Projects content.</Tab>
      </TabSwitcher>

      <h4>Inline Variant (.inline)</h4>

      <TabSwitcher className="inline" initialTab={`one`}>
        <Tab slug="one" name="One" iconDefault="./img/icon-tab-schedule-blue.svg">One content.</Tab>
        <Tab slug="two" name="Two" iconDefault="./img/icon-tab-schedule-blue.svg">Two content.</Tab>
        <Tab slug="three" name="Three" iconDefault="./img/icon-tab-schedule-blue.svg">Three content.</Tab>
        <Tab slug="four" name="Four" iconDefault="./img/icon-tab-schedule-blue.svg">Four content.</Tab>
      </TabSwitcher>

      <h3>ThumbCarousel</h3>

      <ThumbCarousel contents={carouselData}></ThumbCarousel>
    </div>

    <div>
      <MofoFooter footerLinks={footerLinks} orgs={orgs} />
    </div>

  </App>
), document.querySelector(`#app`));
