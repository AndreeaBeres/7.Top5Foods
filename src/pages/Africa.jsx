import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './MainContent.css';

const Africa = () => {
    return (
        <div>
            <Header title="Top 5 Foods in Africa" />
            <Nav />
            <main>
                <section>
                    <h2>Must-Try African Dishes</h2>
                    <p>African cuisine is a rich tapestry of flavors, influenced by diverse cultures, landscapes, and traditions across the continent.  
                    Here are the top 5 foods you must try from this diverse and flavorful continent.</p>
                    <img src="/images/africa-food.jpg" alt="Delicious African food" className="food-image" />
                </section>
            
                <section>
                    <h3>1. Ugali</h3>
                    <img src="/images/ugali.jpg" alt="East/West/South Africa" className="food-image" />
                    <p>Also known as posho, nsima, papa, pap, sadza, isitshwala, akume, amawe, ewokple, akple, and other names, is a type of corn meal made from maize 
                    or corn flour in several African countries. It is cooked in boiling water or milk until it reaches a stiff or firm dough-like consistency.</p>
                </section>
            
                <section>
                    <h3>2. Injera</h3>
                    <img src="/images/injera.jpg" alt="Ethiopia" className="food-image" />
                    <p>Is a sour fermented pancake-like flatbread with a slightly spongy texture, traditionally made of teff flour. Injera is central to the dining process 
                    in Amhara community, like bread or rice elsewhere and is usually stored in the mesob. Traditionally, injera is made with just two ingredients: teff flour and water.</p>
                </section>
            
                <section>
                    <h3>3. Fufu</h3>
                    <img src="/images/fufu.jpg" alt="West Africa" className="food-image" />
                    <p>Is a pounded meal found in West African cuisine. Although the original ingredients for fufu are boiled cassava, plantains, and cocoyam, it is also made in different
                    ways in other West African countries. It is eaten with a variety of soups with vegetables and lots of beef and fish. Fufu is traditionally eaten with the fingers, and a 
                    small ball of it can be dipped into an accompanying soup or sauce</p>
                </section>
            
                <section>
                    <h3>4. Matooke</h3>
                    <img src="/images/Matoke.jpg" alt="East Africa" className="food-image" />
                    <p>Locally also known as matooke, amatooke in Buganda (Central Uganda), ekitookye in southwestern Uganda, ekitooke in western Uganda, kamatore in Lugisu (Eastern Uganda), 
                    ebitooke in northwestern Tanzania, igitoki in Rwanda, Burundi and by the cultivar name East African Highland banana, are a group of starchy triploid banana cultivars, 
                    originating from the African Great Lakes. The fruit is harvested green, carefully peeled, and then cooked and often mashed or pounded into a meal. In Uganda and Rwanda, 
                    the fruit is steam-cooked, and the mashed meal is considered a national dish in both countries.</p>
                </section>
            
                <section>
                    <h3>5. Garri</h3>
                    <img src="/images/Garri.jpg" alt="West Africa" className="food-image" />
                    <p>In the Hausa language, garri can also refer to the flour of guinea corn, maize, rice, yam, plantain and millet.For example, garin dawa is processed from guinea corn, 
                garin masara and garin alkama originate from maize and wheat respectively, while garin magani is a powdery medicine. Cassava, the root from which garri is produced, 
                is rich in fiber, copper and magnesium. Garri is similar to farofa of Brazil, used in many food preparations and recipes, particularly in the state of Bahia.</p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Africa