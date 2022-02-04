import React from 'react';

import Image from 'next/image';

import { FaBell, FaSearch } from 'react-icons/fa';

import { HeaderView } from './style'
import Link from 'next/link';
import SignInButton from '../signInButton/SingInButton';

export default function Header() {
  return (
    <HeaderView>
        <Image src='/images/Marvel_Logo.svg' width={120} height={120} />
        <ul>
            <Link href={'/comics/home'}  >Comics</Link>
            <Link href={'/series/home'} >Series</Link>
            <Link href={'/characters/home'} >Characters</Link>
            <Link href={'/events/home'} >Events</Link>
        </ul>
        <section>
            <article>
                <FaSearch className='icons' />
                <FaBell className='icons' />
            </article>
            <SignInButton />
        </section>
    </HeaderView>
  );
}
