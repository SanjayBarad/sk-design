import React from 'react';

function SiteTemplate(props) {
    return (
        <main className="site_main">
            <div className="site_main_wrapper">
                {props.children}
            </div>
        </main>
    )
}

export default SiteTemplate;