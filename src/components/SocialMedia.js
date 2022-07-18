import React from 'react';
import { Link } from "react-router-dom";

function SocialMedia() {
  return (
    <section class="social_media_section">
        <div class="social_media_nav">
            <ul className="items">
                <li className="item"><a href="https://www.linkedin.com" className="link">Linkedin</a></li>
                <li className="item"><a href="https://dribbble.com/" className="link">Dribble</a></li>
                <li className="item"><a href="https://www.behance.net/" className="link">Behance</a></li>
                <li className="item"><a href="https://www.instagram.com/" className="link">Instagram</a></li>
            </ul>
        </div>
    </section>
  )
}

export default SocialMedia;