import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Header from '../components/Header'
import Leftside from '../components/Leftside'
import Rightside from '../components/Rightside'

const Books = () => (
  <div className='page'>
    <Head title="Paula" />
    <Header />

    <div className="hero">
      <div className='leftSide'>
        <Leftside />
      </div>
      <div className='centerBooks'>
        <h2 className='centerTitle'> CookBooks </h2>
        <div className='book1'>
          <h3> The latest: </h3>
          <img className='currentBook' src='/static/images/thankyouforsmoking_cover16.jpg' />
          <Link className='newAmazon' href="https://www.amazon.com/Thank-You-Smoking-Fearless-Recipes-ebook/dp/B07F5YGFRG?_encoding=UTF8&camp=1789&creative=9325&linkCode=ur2&tag=storypodca-20&linkId=2P4S6EY6B462X4AR" target="_blank">
            <a>
              <img src="http://www.niftybuttons.com/amazon/amazon-button2.png" alt="Amazon Button (via NiftyButtons.com)" />
            </a>
          </Link>
          <p>
            Award-winning author and grilling expert Paula Disbrowe shows home
            cooks how to elevate everyday meals with seductive, smoky flavors in
            this collection of 100 recipes for smoking meats, fish, poultry,
            vegetables, nuts, grains, pantry staples, and even cocktails on a
            smoker or grill in as little as 30 minutes.
          </p>
        </div>
        <div className='book2' >
          <h3> Previous Books: </h3>
          <img className='ANG'  src='./static/images/ANG.jpg'/>
          <Link href="https://www.amazon.com/gp/product/B07465XS4Z/ref=dbs_a_def_rwt_hsch_vapi_taft_p1_i0?_encoding=UTF8&camp=1789&creative=9325&linkCode=ur2&tag=storypodca-20&linkId=2P4S6EY6B462X4AR" target="_blank">
            <a className='ANGButton'>
              <img src="http://www.niftybuttons.com/amazon/amazon-button2.png" alt="Amazon Button (via NiftyButtons.com)" />
              </a>
          </Link>
          <p>
            In Food52’s Any Night Grilling, author (and Texan) Paula Disbrowe
            coaches you through the fundamentals of cooking over fire so the
            simple pleasure of a freshly grilled meal can be enjoyed any night
            of the week—no long marinades or low-and-slow cook times here.
            Going way beyond your standard burgers and brats, Disbrowe offers
            up streamlined, surprising recipes for Crackly Rosemary Flatbread,
            Grilled Corn Nachos, and Porchetta-Style Pork Kebabs, alongside
            backyard classics like Sweet & Smoky Drumsticks, Gulf Coast Shrimp
            Tacos, and Green Chile Cheeseburgers. You’ll also be charring
            fruits and vegetables in coals for caramelized sweetness, bringing
            day-old bread back to life, and using lingering heat to cook ahead
            for future meals. Filled with clever tips, lush photography,
            and what will surely become your favorite go-to recipes,
            Any Night Grilling is the only book you and your grill need.
          </p>
        </div>
      <div className='book2'>
        <img className='CC' src='./static/images/CC.jpg'/>
        <Link href="https://www.amazon.com/gp/product/B000S1L8ZW/ref=dbs_a_def_rwt_hsch_vapi_taft_p1_i1?_encoding=UTF8&camp=1789&creative=9325&linkCode=ur2&tag=storypodca-20&linkId=2P4S6EY6B462X4AR" target="_blank">
          <a className='CCButton'>
            <img src="http://www.niftybuttons.com/amazon/amazon-button2.png" alt="Amazon Button (via NiftyButtons.com)" />
          </a>
        </Link>
        <p>
          Who hasn&lsquo;t fantasized about leaving behind the chaos of everyday life
          and moving someplace where life is simpler? Well, that&lsquo;s just
          what chef and food writer Paula Disbrowe did when she left New York
          City and moved to Texas. She traded her subway MetroCard for a pickup
          truck and her stiletto heels for a pair of down-home cowboy boots.

          In Cowgirl Cuisine, Paula tells her story through food. She weaves
          together romance, adventure, and more than a few laughs as she
          celebrates the beauty of flavorful food, fresh air, and her own
          wholesome recipes, all while taking home cooks on a journey well
          off the beaten path.

          Like Texas itself, the recipes in Cowgirl Cuisine are big-hearted
          and bold—whole-grain muffins bursting with berries, salads loaded
          with leafy herbs and avocado, and fiery bowls of chili. Paula&lsquo;s food
          is healthful and full of nutrients, but this is not a diet cookbook—cowgirls
          don&lsquo;t have time to count calories (besides, they burn it all off
            trail rides). Instead, this is food that is satisfying and easy to
            prepare, which leaves plenty of time for living life to the fullest.

            From hearty ranch breakfasts to fresh salads, spicy nibbles,
            seductive desserts, and killer watermelon margaritas, Paula&lsquo;s
            recipes are full of her signature zest, spunk, and spice. Start your
            day off right with Canyon Granola or Cowgirl Migas. For lunch, have
            a nourishing bowl of silky Roasted Pumpkin Soup with Red Chile Cream
            or Chicken and Citrus Slaw Tostadas. For dinner, try Gazpacho Risotto
            with Garlic Shrimp or Cowboy Pot Roast with Coffee and Whiskey. And
            be sure to save room for one of Paula&lsquo;s decadent desserts, such
            as Chocolate Pecan Squares or Dulce de Leche Flan with Pepita Brittle.

In addition to her recipes, Paula includes humorous and heartfelt vignettes about wild animals on the loose, scorpions in the sheets, and Casanova cowboys. And the pages are filled with lush photographs of food and life on the range. Cowgirl Cuisine isn't just spurs and salsa—it's about following your dream. So saddle up and follow yours.
        </p>
      </div>
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
        grid-template-rows: 1fr ;
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


      .centerBooks {
        // grid-area: center;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr);
        width: 85%;
        display: inline;
        margin-left: auto;
        margin-right: auto;
      }

      .book1 {
        width: 90%;
        align-self: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10%;
      }

      .book2 {
        width: 75%;
        align-self: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10%;
      }

      .currentBook {
        width: 100%;
        align-self: center;
      }

      .centerTitle {
        width: 100%;
        text-align: center;
      }

      .ANG {
        width: 100%;
        align-self: center;
        margin-left: auto;
        margin-right: auto;
      }

      .CC {
        width: 100%;
        align-self: center;
        margin-left: auto;
        margin-right: auto;
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

export default Books
