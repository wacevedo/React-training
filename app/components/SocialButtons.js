import React from 'react';

class SocialButtons extends React.Component {
    render () {
        return (
            <footer className='container'>
                <h3 className='header'>Follow me on:</h3>
                <ul className="row icons center-icons">
                    <li><a href="https://github.com/wilson20a94" target="_blank" className="fa fa-github">
                        <span className="label">GitHub</span>
                    </a></li>
                    <li><a href="https://www.instagram.com/wilson_acevedo/" target="_blank" className="fa fa-instagram">
                        <span className="label">Instagram</span>
                    </a></li>
                    <li><a href="https://www.facebook.com/wilson.acevedosanchez.1" target="_blank" className="fa fa-facebook">
                        <span className="label">Facebook</span>
                    </a></li>                   
                    <li><a href="https://twitter.com/wilson_acevedo" target="_blank" className="fa fa-twitter">
                        <span className="label">Twitter</span>
                    </a></li>
                </ul>
            </footer>
        )
    }
}


export default SocialButtons;
