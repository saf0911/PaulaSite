import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Header from '../components/Header'

const Home = () => (
  <div className='page'>
    <Head title="Paula" />
    <Header />

    <div className="hero">
      <div className='leftSide'>
        <h4> Recent Books </h4>
        <Link className='cookbooks'>
          <a>
            <img />
          </a>
        </Link>
      </div>
      <div className='centerMain'>
        <h2 className='bookTitle'>Thank You For Smoking </h2>
        <img className='currentBook' src='/static/images/thankyouforsmoking_cover16.jpg' />
      </div>
      <div className='rightSide'>
        <img />Bacon
        <Link className='quotes'>
          <a>
            <p>
              I WRITE ABOUT THE ENDLESS ADVENTURE OF FOOD AND TRAVEL.
            </p>
          </a>
        </Link>

      </div>

    </div>

    <style jsx global>{`
      .page {

      }

      .hero {
        list-style-type: none;
        text-decoration: none;
        background-color: white;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: repeat(2, 1fr);
        grid-template-areas:
          'leftSide center rightSide'
          'cookbooks center quotes'
        grid-gap: 10px 10px;
        margin-top: 5%;
      }

      .leftSide {
        // grid-area: leftSide;
        width: 100%;
        margin: 3%;
      }

      .cookbooks {
        grid-area: cookbooks;
      }

      .centerMain {
        // grid-area: center;
        width: 100%;
        display: inline;
      }

      .bookTitle {
        text-align: center;
      }

      .currentBook {
        width: 100%;
        align-self: center;
      }

      .rightSide {
        // grid-area: rightSide;
        width: 100%;
        display: inline;
      }

      .quotes {
        grid-area: quotes;
      }

    `}</style>
  </div>
)

export default Home
