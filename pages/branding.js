import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Header from '../components/Header'
import Leftside from '../components/Leftside'
import Rightside from '../components/Rightside'

const Branding = () => (
  <div className='page'>
    <Head title="Paula" />
    <Header />

    <div className="hero">
      <div className='leftSide'>
        <Leftside />
      </div>
      <div className='centerBranding'>
        <h2 className='aboutSC'>Story City </h2>
        <p>
          What is the kernel of an idea that your brand or restaurant wants to
          develop? What is the story that your menu or recipe needs to tell? As
          a writer and cookbook author,  I have spent years working to convey
          the essence and unique flavor behind small towns, big cities,
          food-ccentric drives and some of the country&lsquo;s best chefs.
          As a recipe developer, I delight in creating fresh, enticing, and on-trend recipes for any concept sent my way. The culmination of this experience on both the trade and consumer sides of the industry is Story City, a compelling food content company based in Austin, Texas.

Story City is an army of one or an armada of as many needed to create multi-platform food content including brand development, strategic social media, editorial, cookbooks, original recipe development, and photography and video production for the story that your business is burning to tell.

As you might have heard, Austin is a great place to live and an awesome place to visit. If you&lsquo;re heading our way (for SXSW or ACL), use Story City as a resource for creating unique and memorable culinary experiences (e.g. barbecue and taco tours with a side of live music) for your clients.

Imagine your idea, fully realized. We'll help you tell it and shamelessly spread the word. Incidentally, Story City is more than the source of your next big idea, it's also where I was born.
        </p>

        <img className='currentBook' src='/static/images/thankyouforsmoking_cover16.jpg' />
        <Link className='newAmazon' href="https://www.amazon.com/Thank-You-Smoking-Fearless-Recipes-ebook/dp/B07F5YGFRG?_encoding=UTF8&camp=1789&creative=9325&linkCode=ur2&tag=storypodca-20&linkId=2P4S6EY6B462X4AR" target="_blank">
          <a>
            <img src="http://www.niftybuttons.com/amazon/amazon-button2.png" alt="Amazon Button (via NiftyButtons.com)" />
          </a>
        </Link>
      </div>
      <div className='rightSide'>
        <Rightside />
      </div>

    </div>

    <style jsx global>{`
      @font-face {
        font-family: 'Playfair Display', serif;
        @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
      }

      body {
        margin: 0;
      }
      .page {
        font-family: 'Playfair Display', serif;
      }

      .hero {
        background-color: white;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows:  1fr;
        grid-template-areas:
          'leftSide center rightSide'
        gap: 10%;
        margin-top: 2%;
      }

      .leftSide {
        // grid-area: leftSide;
        width: 100%;
        border-right: 1px solid black;
        display: block;
        // background-color: pink;
      }


      .centerBranding {
        // grid-area: center;
        width: 85%;
        display: inline;
        margin-left: auto;
        margin-right: auto;
      }

      .aboutSC {
        text-align: center;
      }

      .paulaTruck {
        float: left;
        margin: 2%;
        width: 50%;
      }

      .currentBook {
        width: 50%;
        align-self: center;
      }

      .newAmazon {
        margin-left: auto;
        margin-right: auto;
      }

      .rightSide {
        // grid-area: rightSide;
        width: 100%;
        display: block;
        border-left: 1px solid black;
        padding: 1%;
        // background-color: rgb(232,232,232);
      }



    `}</style>
  </div>
)

export default Branding
