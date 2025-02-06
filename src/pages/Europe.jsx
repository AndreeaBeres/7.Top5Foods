import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './MainContent.css';

const Europe = () => {
    return (
        <div>
            <Header title="Top 5 Foods in Europe" />
            <Nav />
            <main>
                <section>
                    <h2>Must-Try European Dishes</h2>
                    <p>Europe offers some of the most diverse and delicious cuisines in the world. Here are the top 5 foods you must try.</p>
                    <img src="/images/europe-food.jpg" alt="Delicious European food" className="food-image" />
                </section>
                
                <section>
                    <h3>1. Currywurst</h3>
                    <img src="/images/currywurst.jpg" alt="Germany" className="food-image" />
                    <p>A German fast food dish consisting of steamed, then fried pork sausage cut into slices and seasoned with curry ketchup. Fries are many times included. 
                    The Deutsches Currywurst Museum estimated that 800 million currywursts are eaten every year in Germany, with 70 million in Berlin alone. It was invented in 
                    1949 by Herta Heuwer, who began selling it at a food stand in West Berlin.</p>
                </section>
                
                <section>
                    <h3>2. Paella Valenciana</h3>
                    <img src="/images/paella_valenciana.PNG" alt="Spain" className="food-image" />
                    <p>Is a dish full of flavor and tradition, which captures the essence of Mediterranean gastronomy. Perfect for family gatherings or special celebrations, this 
                    paella is characterized by the unique combination of rabbit, chicken and fresh vegetables, cooked with rice in a tomato base and spices such as saffron 
                    and paprika. Paella is regarded as one of the community's identifying symbols. It is one of the best-known dishes in Spanish cuisine.</p>
                </section>
                
                <section>
                    <h3>3. Baguette</h3>
                    <img src="/images/baguette.jpg" alt="France" className="food-image" />
                    <p>The traditional French baguette is known in French as a Baguette de Tradition Française (Tradition, or, less formally, a Tradi). You tear off the crust to 
                    taste it, still warm, while leaving the boulangerie. The flavor differs from one boulangerie to the next, since there are as many varieties of baguette as
                    there are artisan bakers. It is commonly made from basic lean dough (the dough, not the shape, is defined by French law). It is distinguishable by its length 
                    and crisp crust.</p>
                </section>
                
                <section>
                    <h3>4. Wiener Schnitzel</h3>
                    <img src="/images/wiener_schnitzel.jpg" alt="Austria" className="food-image" />
                    <p>Wiener schnitzel means "Viennese cutlet" in German, and it is one of Austria's most traditional and representative dishes. So much so, in fact, that its 
                    definition is fiercely protected by Austrian law. It must be made of veal; when made with any other type of meat, it cannot technically be called Wiener 
                    schnitzel.</p>
                </section>
                
                <section>
                    <h3>5. Belgian Fries</h3>
                    <img src="/images/belgian_fries.jpg" alt="Belgium" className="food-image" />
                    <p>Frites have essentially become far more than just a snack in Belgium - and beyond. They are a national Belgian symbol and an essential part of the 
                    country's rich culture and history. Sold out of caravans, shacks, and chalets across the country, they are fried twice and typically served with a dash of 
                    salt, a glob of mayonnaise, and a little plastic fork.</p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Europe;