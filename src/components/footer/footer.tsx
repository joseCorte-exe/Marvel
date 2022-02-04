import React from 'react';

import Image from 'next/image'

import { FooterView } from './style'

export default function Footer() {
return (
    <FooterView className="site-footer">
        <main>
            <header>
                <section>
                    <h3>José Corte</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam nostrum, tempora laborum dolor ut ad pariatur minima quod saepe exercitationem quos magni, est mollitia nihil, vero perspiciatis neque fugiat earum!</p>
                </section>
                <section>
                    <h3>portifolio</h3>
                    <ul>
                        <a target='_blank' href='https://portifolio-two-self.vercel.app' >portifolio-two-self.vercel.app</a>
                    </ul>
                </section>
            </header>
            <hr />
            <footer>
                <label>Copyright © 2022 All Rights Reserved by joseCorte-exe.</label>
                <div>
                    <a href='https://github.com/joseCorte-exe' target='_blank' ><Image src='/images/github.png' width={30} height={30}  /></a>
                    <a href='https://www.linkedin.com/in/jose-corte/' target='_blank' ><Image src='/images/linkedin.png' width={30} height={30} id="icon" /></a>
                </div>
            </footer>
        </main>
    </FooterView>
);
}
