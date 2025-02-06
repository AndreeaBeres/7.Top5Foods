import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './MainContent.css';

const America = () => {
    return (
        <div>
            <Header title="Top 5 Foods in America" />
            <Nav />
            <main>
                <section>
                    <h2>Must-Try American Dishes</h2>
                    <p>American cuisine is as diverse as its culture, with influences from Native American, European, African, and Asian traditions.  
                    Here are the top 5 foods you must try from this delicious and ever-evolving culinary landscape.</p>
                    <img src="/images/america-food.jpg" alt="Delicious American food" className="food-image" />
                </section>
            
                <section>
                    <h3>1. Apple Pie</h3>
                    <img src="/images/apple_pie.jpg" alt="America" className="food-image" />
                    <p>An apple pie is a pie in which the principal filling is apples. Apple pie is often served with whipped cream, ice cream ("apple pie à la mode"), 
                    custard or cheddar cheese. It is generally double-crusted, with pastry both above and below the filling; the upper crust may be solid or latticed 
                    (woven of crosswise strips). The bottom crust may be baked separately ("blind") to prevent it from getting soggy. Tarte Tatin is baked with the crust on 
                    top, but served with it on the bottom. </p>
                </section>
            
                <section>
                    <h3>2. Buffalo Wings</h3>
                    <img src="/images/buffalo_wings.jpg" alt="America" className="food-image" />
                    <p>A Buffalo wing in American cuisine is an unbreaded chicken wing section (flat or drumette) that is generally deep-fried, then coated or dipped in a 
                    sauce consisting of a vinegar-based cayenne pepper hot sauce and melted butter prior to serving. They are traditionally served hot, along with celery sticks 
                    and carrot sticks, and a dip of blue cheese dressing or, primarily outside of New York, ranch dressing. Buffalo wings are named after Buffalo, New York, where 
                    they were invented, and have no relation to the animal. They are often called simply chicken wings, hot wings, or just wings.</p>
                </section>
            
                <section>
                    <h3>3. Barbecue Ribs</h3>
                    <img src="/images/barbeque_ribs.jpg" alt="America" className="food-image" />
                    <p>Barbeque ribs became popular in the 20th century at the dawn of mechanical refrigeration. Before refrigerated transport, barbeque pork ribs would only be 
                    consumed as part of a whole "Pig Roast" where a whole pig was often barbequed in a pit. In American cuisine, ribs usually refers to barbecue pork ribs, or 
                    sometimes beef ribs, which are served with various barbecue sauces. They are served as a rack of meat which diners customarily tear apart by hand, then eat 
                    the meat from the bone. Slow roasting or barbecuing for as much as 6-8 hours creates a tender finished product.</p>
                </section>
            
                <section>
                    <h3>4. Grits</h3>
                    <img src="/images/grits.jpg" alt="America" className="food-image" />
                    <p>Grits are a type of porridge made from coarsely ground dried maize or hominy, the latter being maize that has been treated with an alkali in a process 
                    called nixtamalization, with the pericarp (ovary wall) removed. Grits are cooked in warm salted water or milk. They are often served with flavorings 
                    as a breakfast dish. Grits can be savory or sweet, with savory seasonings being more common. Grits are similar to other thick maize-based porridges from 
                    around the world, such as polenta and mieliepap. The dish originated in the Southern United States but is now available nationwide. Grits are often part of 
                    the dinner entrée shrimp and grits, served primarily in the Southern United States.</p>
                </section>
            
                <section>
                    <h3>5. Hamburger</h3>
                    <img src="/images/hamburger.jpg" alt="America" className="food-image" />
                    <p>A hamburger, or simply a burger, is a dish consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll. 
                    The patties are often served with cheese, lettuce, tomato, onion, pickles, bacon, or chilis with condiments such as ketchup, mustard, mayonnaise, relish or a 
                    "special sauce", often a variation of Thousand Island dressing, and are frequently placed on sesame seed buns. A hamburger patty topped with cheese is called 
                    a cheeseburger. Under some definitions, and in some cultures, a burger is considered a sandwich. </p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default America