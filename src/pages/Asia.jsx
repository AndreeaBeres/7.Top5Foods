import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './MainContent.css';

const Asia = () => {
    return (
        <div>
            <Header title="Top 5 Foods in Asia" />
            <Nav />
            <main>
                <section>
                    <h2>Must-Try Asian Dishes</h2>
                    <p>Asia is home to an incredible variety of flavors, textures, and culinary traditions that span from savory to sweet, with vibrant spices and unique ingredients. 
                    Here are the top 5 foods you must try from this diverse and flavorful continent.</p>
                    <img src="/images/asia-food.jpg" alt="Delicious Asian food" className="food-image" />
                </section>
                
                <section>
                    <h3>1. Pho</h3>
                    <img src="/images/pho.jpg" alt="Vietnam" className="food-image" />
                    <p>Is a Vietnamese soup dish consisting of broth, rice noodles (bánh phở), herbs, and meat - usually beef, and sometimes chicken. Phở is a popular food in 
                    Vietnam where it is served in households, street-stalls, and restaurants country-wide. Residents of the city of Nam Định were the first to create Vietnamese traditional 
                    phở. It is considered Vietnam's national dish.</p>
                </section>
                
                <section>
                    <h3>2. Dim Sum</h3>
                    <img src="/images/dim_sum.jpg" alt="China" className="food-image" />
                    <p>Is a large range of small Chinese dishes that are traditionally enjoyed in restaurants for brunch. Most modern dim sum dishes are commonly associated with Cantonese cuisine, 
                    although dim sum dishes also exist in other Chinese cuisine.</p>
                </section>
                
                <section>
                    <h3>3. Ramen</h3>
                    <img src="/images/ramen.jpg" alt="Japan" className="food-image" />
                    <p>Is a Japanese noodle dish. It includes Chinese-style wheat noodles served in a broth. Common flavors are soy sauce and miso, with typical toppings including sliced pork 
                    dried seaweed, bamboo shoots, and scallions. Ramen has its roots in Chinese noodle dishes and is a part of Japanese Chinese cuisine. Nearly every region in Japan has its own 
                    variation of ramen, such as the pork bone broth ramen of Kyushu and the miso ramen of Hokkaido.</p>
                </section>
                
                <section>
                    <h3>4. Green Curry</h3>
                    <img src="/images/green_curry.jpg" alt="Thai" className="food-image" />
                    <p>Is a central Thai variety of curry. Apart from the main protein, traditionally fish, fish balls, or meat, the other ingredients for the dish consist of coconut milk, 
                    green curry paste, palm sugar, and fish sauce. Thai eggplant (aubergine), pea aubergine, basil leaves or other green or whitish vegetables and even fruit are often included.
                    The consistency of its sauce varies with the amount of coconut milk used. Green curry paste is traditionally made by pounding in a mortar green chillies, shallots, garlic, 
                    galangal, lemongrass, kaffir lime leaves, cilantro roots (coriander), and cumin seeds, white peppercorns, shrimp paste and salt.</p>
                </section>
                
                <section>
                    <h3>5. Laksa</h3>
                    <img src="/images/laksa.jpg" alt="Southeast Asia" className="food-image" />
                    <p>Is a spicy noodle dish popular in Southeast Asia and it consists of various types of noodles, most commonly thick rice noodles, with toppings such as chicken, prawns or 
                    fish. Most variations of laksa are prepared with a rich and spicy coconut curry soup or a broth seasoned with a souring ingredient like tamarind or asam gelugur.
                    Originating from Peranakan Chinese cuisine, laksa recipes are commonly served in Singapore, Indonesia, and Malaysia.</p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Asia;