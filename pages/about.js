import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Header from '../components/Header'
import Leftside from '../components/Leftside'
import Rightside from '../components/Rightside'

const About = () => (
  <div className='page'>
    <Head title="Paula" />
    <Header />

    <div className="hero">
      <div className='leftSide'>
        <Leftside />
      </div>
      <div className='centerAbout'>
        <h2 className='aboutPaula'>Paula Disbrowe </h2>
        <p>
        <img className='paulaTruck' src='/static/images/Paulatruck.jpg' />

            My writing is devoted to the adventure of food and travel, and it’s
            a pretty delicious ride. Assignments have sent me snorkeling with
            black-tipped reef sharks in French Polynesia, whisking through a
            forest on a dog sled in Alaska, to fish camps in the bayous of
            Southwest Louisiana, and scalloping off the Forgotten Coast of Florida.
            I recently served as editor-in-chief of TRIBEZA, Austin’s premiere arts
            and culture publication. Prior to that I spent two years covering
            the South’s vibrant culture as a senior editor at Southern Living
            (where I remain a frequent contributor). My articles have appeared
            in The New York Times (Dining Section and Sunday Magazine),
            Bon Appetit, Food & Wine, Cooking Light, Coastal Living, Delta Sky,
            and Texas Highways, among other national publications, and I
            previously served as the food editor of Restaurant Business magazine.
        </p>
        <p>
          I have also authored five cookbooks. My first, “Cowgirl Cuisine,” shares
          the adventure of leaving New York City to cook on a ranch in The Texas
          Hill Country. I’ve co-written four other cookbooks, “Crescent City Cooking”
          with Susan Spicer, the chef at Bayona and Mondo in New Orleans; The
          New York Times bestseller “Down Home with the Neelys” with Food Network
          stars Pat and Gina Neely; and “Real Cajun” with Donald Link, the acclaimed
          chef of Herbsaint and Cochon restaurants in New Orleans, which won the
          prestigious 2010 James Beard Award for Best American Cookbook. “Down South,”
          my second collaboration with Donald, was published in 2014 and won the 2015
          International Association of Culinary Professionals Award for Best American Cookbook.
          I have also served as the General Manager of Feather Down Farm Days
          (and launched the Europe-based farm stay concept to the U.S. market),
          and worked as the Cowgirl Chef at Hart & Hind Ranch in the beautiful
          Texas Hill Country. I live in Austin, Texas, with my husband David Norman
          (partner/head “doughpuncher” at Easy Tiger Bake Shop and Beer Garden),
          children Flannery and Wyatt, and two retired ranch dogs.
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


      .centerAbout {
        // grid-area: center;
        width: 85%;
        display: inline;
        margin-left: auto;
        margin-right: auto;
      }

      .aboutPaula {
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

export default About
