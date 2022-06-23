import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";

const PythonLogo = require("../assets/logos/PythonLogo.png");
const ReactLogo = require("../assets/logos/ReactLogo.png");
const TypescriptLogo = require("../assets/logos/TypescriptLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png");
const NextLogo = require("../assets/logos/NextLogo.png");
const TailwindLogo = require("../assets/logos/TailwindLogo.png");
const SqlLogo = require("../assets/logos/SqlLogo.png");
const ReduxLogo = require("../assets/logos/ReduxLogo.png");
const FirebaseLogo = require("../assets/logos/FirebaseLogo.png");
const MongoDBLogo = require("../assets/logos/MongoDBLogo.png");
const NodeJSLogo = require("../assets/logos/NodeJSLogo.png");
const DockerLogo = require("../assets/logos/DockerLogo.png");
const HTMLLogo = require("../assets/logos/HTML.png");
const CSSLogo = require("../assets/logos/CSS.png");
const AWSLogo = require("../assets/logos/AWS.png");
const CLogo = require("../assets/logos/C.png");
const CPPLogo = require("../assets/logos/cpp.png");
const JavaLogo = require("../assets/logos/java.png");




const About = () => {
  return (
    <div
      id="About"
      className="mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <code>
            Experienced Software/Computer Engineer with a demonstrated history
            of working in the computer software industry. Skilled in Java,
            Javascript, C, C++, Python, CSS, HTML, NodeJS, MongoDB, and Matlab.
            Currently studying Computer Engineering at Virginia Tech.
          </code>
          <br />
          <br />
          <code>These are the following languages I've been working with:</code>
          <div className="grid grid-cols-3 gap-2 text-sm mt-5 text-brown_vs">
            <div className="flex flex-row  mb-3">
              <img
                src={JsLogo}
                alt="Js Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>JavaScript (ES6+)</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={CSSLogo}
                alt="Next Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>CSS</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={ReactLogo}
                alt="React Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>React</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={HTMLLogo}
                alt="Typescript Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>HTML 5</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={AWSLogo}
                alt="Tailwind Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>AWS</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={CLogo}
                alt="Redux Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>C</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={PythonLogo}
                alt="Python Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Python</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={NodeJSLogo}
                alt="Firebase Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Nodejs</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={CPPLogo}
                alt="NodeJS Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>C++</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={SqlLogo}
                alt="SQL Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>SQL</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={MongoDBLogo}
                alt="MongoDB Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>MongoDB</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={JavaLogo}
                alt="MongoDB Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Java</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
