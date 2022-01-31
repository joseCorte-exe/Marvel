import React from 'react';

import Image from 'next/image';

import { FaBell, FaSearch } from 'react-icons/fa';

import { HeaderView } from './style.ts'

export default function Header() {
  return (
    <HeaderView>
        <Image src='/images/Marvel_Logo.svg' width={80} height={80} />
        <ul>
            <li>Comics</li>
            <li>Series</li>
            <li>Characters</li>
            <li>Events</li>
        </ul>
        <section>
            <article>
                <FaSearch className='icons' />
                <FaBell className='icons' />
            </article>
            <Image src='https://avatars.githubusercontent.com/u/79228713?v=4' width={40} height={40} />
        </section>
    </HeaderView>
  );
}
