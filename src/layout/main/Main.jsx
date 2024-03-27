/* eslint-disable react/prop-types */
import Button from "../../components/Button";
import "./main.css";
import graffic from "../../img/graff.png";

export default function Main() {
  return (
    <>
      <main>
        <div className='title'>
          <h1>This is a title of the website</h1>
          <span>
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com
          </span>
          <div>
              <Button secondary>Click me</Button>
          </div>
        </div>
        <div className='image'>
          <img src={graffic} alt='' />
        </div>
      </main>
    </>
  );
}
