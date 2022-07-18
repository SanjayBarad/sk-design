import React from 'react';
import $ from 'jquery';


// Components
import Header from '../components/Header';
import SocialMedia from '../components/SocialMedia';



// Horizontal Scroll
$(document).ready(function(){
    const scrollContainer = document.querySelector('.site_main');
    scrollContainer.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });
});

function SiteTemplate(props) {
    return (
        <main className="site_main hide_scrollbar">
            <div className="site_main_wrapper">
                <Header />
                {props.children}
                <SocialMedia />
            </div>
        </main>
    )
}

export default SiteTemplate;