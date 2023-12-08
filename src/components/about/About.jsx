// Write all the code here
import React from "react";
import Nelson from "../../assets/skj.jpg";

function About() {
    return(<div className="about">
    <main>
        <h1>ABOUT US</h1>
        <article>
            <h4>BURGER SHOP</h4>
            <p>This is Burger Shop. 
            The place for  most tasty burgers on the entire earth.
            <br />
            <br />
            <br />
            Explore the various types of food and burgers. Click below to see the menu.</p>
            <a href="/menu">
            <i class="bi bi-search"></i>
            </a>
        </article>
        <div>
            <h2>Founder</h2>
            <article>
                <div>
                    <img src={Nelson} alt="Nelson's photo"/>
                    <h3>Nelson</h3>
                </div>
                <p>I am Nelson, the founder of Burger Shop.
                Affiliated to good taste...</p>
            </article>
        </div>
    </main>
    </div>);
};

export default About;
