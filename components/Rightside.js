import React from 'react';
import Link from 'next/link';

function rightSide() {
  return (
  <div className='rightContainer'>
    <h2 className='title'> Paula </h2>
    <p className='tagLine'>
      I write about the endless adventure of food and travel
    </p>
    <img className='paulaImg' src='/static/images/Paula.jpg' />
    <Link className='about'>
      <a>
        <h4>About </h4>
        <p> Paula Disbrowe is a food and travel writer, cookbook author,
            and recipe developer based in Austin, Texas.
        </p>
      </a>
    </Link>
    <Link className='branding'>
      <a>
      <h4>Branding </h4>
      <p> Multi-platform food content devoted to brand and recipe development.
          Let me bring your next big idea to delicious fruition.
      </p>
      </a>
    </Link>
    <Link className='articles'>
      <a>
        <h4>Articles</h4>
        <p> Scalloping in Florida, Texas troubadours, and a Fish Camp Feast
            in Louisiana are a few of my latest features. (P.S. Dale Watson let me sit on his motorcycle, cool!)
        </p>
      </a>
    </Link>



    <style jsx>{`
      h4 {
        text-align: center;
      }
      .rightContainer {
        margin: auto;
        display: block;
      }

      .title {
        text-align: center;
      }
      .paulaImg {
        display: block;
        border-radius: 25%;
        margin-left: auto;
        margin-right: auto;
        width: 75%;
      }
      .tagLine {
        text-align: center;
      }
      .quotes {
        grid-area: quotes;
      }


  `}</style>


  </div>
  );
}

export default rightSide;
