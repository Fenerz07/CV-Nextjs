import React from 'react';
import { Tabs, Tab } from './Tab';

const IndexPage = () => {
  return (
    <div>
      <Tabs>
        <Tab title="Hobbies" className="mr-5">
          <div>
            <ul>
              <li>Watching Films/Series</li>
              <li>Working at Gym</li>
              <li>Cars</li>
              <li>Listening Music</li>
              <li>Playing Videogames</li>
              <li>Hanging out with some friends</li>
              <li>Learning new Languages</li>
              <li>Fashion</li>
            </ul>
          </div>
        </Tab>
        <Tab title="Skills" className="mr-5" >
          <div>
            <ul>
              <li>Javascript</li>
              <li>React</li>
              <li>Next</li>
              <li>HTML/CSS</li>
              <li>Phyton</li>
              <li>C</li>
              <li>Java</li>
              <li>Linux</li>
            </ul>
          </div>
        </Tab>
        <Tab title="Education" >
          <div>
            <ul>
              <li>High School Diploma</li>
              <li>Currently studying Computer Science in first year</li>
            </ul>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default IndexPage;
