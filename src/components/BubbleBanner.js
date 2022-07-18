import React from 'react';
import $ from 'jquery';

$(document).ready(function(){
    $('.counter-value').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({
            countNum: $this.text()
        }).animate({
            countNum: countTo
        },

            {

                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                    //alert('finished');
                }

            });
    });
});


function BubbleBanner() {
  return (
    <section className='site_section bubble_banner_section'>
        <div className='site_section_wrapper'>
            <div className="bubble_banner_cont">
                <div className="bubble_banner_head">
                    <h2>We're a global design agency curating experiences that <span>scale businesses</span></h2>
                </div>
                <div className="bubble_banner_conter_row">
                    <div className='bubble_banner_conter_col'>
                        <h4>One Billion+</h4>
                        <p>Lives Touched</p>
                    </div>
                    <div className='bubble_banner_conter_col'>
                        <h4><span className='counter-value' data-count='30'>0</span>+</h4>
                        <p>Global Awards</p>
                    </div>
                    <div className='bubble_banner_conter_col'>
                        <h4><span className='counter-value' data-count='300'>0</span>+</h4>
                        <p>Clients</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BubbleBanner;