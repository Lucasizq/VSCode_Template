import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-64 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Virginia Tech</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Bachelor of Science in Computer Engineering
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Aug 2020 - May 2024</code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">
              Lunar Communications Software Development
            </code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              NASA - Greenbelt, Maryland{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• June 2022 - Present</code>
            <br />
            <code className="text-sm">
              <br />• Developed APIs needed for integrating NS-3 network
              simulations visual for web-app using Django.
              <br />• Built front-end dashboard/pages to visualize data pulled
              from simulations using React.
              <br />• Integrated localized web app with existing EC2 code base
              and front-end web app.
              <br />• Performed extensive end-to-end testing to insure a
              polished project with no issues.
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Team Research Member</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              HEVT - Blacksburg, Virginia{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • November 2022 - Present
            </code>
            <br />
            <code className="text-sm">
              <br />• Connected and Automated Vehicle (CAVs) team at HEVT.
              <br />• Converting a stock Chevy Blazer to an SAE Level 2
              autonomous vehicle with a Lane Monitoring System and Adaptive
              Cruise Control.
              <br />• Backed by the U.S. DoE, General Motors, Mathworks, and
              other fortune 500 companies.
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">
              Junior QA Engineer / Software Engineer Intern
            </code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              BoomTV | AVGL - Remote{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • March 2020 - Present
            </code>
            <br />
            <code className="text-sm">
              <br />• Built NodeJS applications used in live-ops scenarios,
              integrating with MongoDB, Express, and Handlebars, managed with
              git and hosted on Heroku, AWS, and Azure.
              <br />• Developed Discord bots used to grab rich consumer
              analytics to drive corporate marketing decisions
              <br />• Managed at-scale product testing and implementation of
              over 500 new features on the BoomTV and AVGL platforms.
              <br />• Compiled security logistics reports for multiple events
              with 20k budgets.
              <br />• Managed product final QA evaluations for Intel Inspires:
              250k in total scholarships awarded to high school and college
              students
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Skills</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Languages</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Native{" "}
            </code>
            <code className="text-sm">
              <br />• English
              <br />• Spanish
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Front End</code>
            <code className="text-sm">
              <br />• HTML
              <br />• CSS
              <br />• JavaScript
              <br />• Handlebars
              <br />• React
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Back End</code>
            <code className="text-sm">
              <br />• Java
              <br />• JavaScript
              <br />• Nodejs
              <br />• DiscordJs
              <br />• Express
              <br />• MongoDB
              <br />• Python/Django
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
