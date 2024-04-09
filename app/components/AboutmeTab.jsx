import React from 'react';
import { Tabs, Tab } from './Tab';

const ExampleTabs = () => {
  return (
    <Tabs >
      <Tab title="Hobbies">
        <div>
          <ul>
            <li>Gym</li>
            <li>Reading</li>
            <li>Music</li>
            <li>Videogames</li>
            <li>Hanging out</li>
            <li>Watching Series/Films</li>
          </ul>
        </div>
      </Tab>
      <Tab title="Skills">
        <div>
          <ul>
            <li>Javascript</li>
            <li>Next</li>
            <li>React</li>
            <li>HTML/CSS</li>
            <li>C</li>
            <li>Python</li>
          </ul>
        </div>
      </Tab>
      <Tab title="Education">
        <div>
          <ul>
            <li>Baccalauréat</li>
            <li>Equivalent to High School Diploma</li>
            <li>2023</li>
            <li>Currently pursuing Bachelor&apos;s Degree in First Year</li>
            <li>At Enigma</li>
            <li>2023 - Present</li>
          </ul>
        </div>
      </Tab>
    </Tabs>
  );
};

export default ExampleTabs;
