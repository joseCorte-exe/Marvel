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
            <Link href={'/Comics/Home'}  >Comics</Link>
            <Link href={'/Series/home'} >Series</Link>
            <Link href={'/Characters/home'} >Characters</Link>
            <Link href={'/Events/home'} >Events</Link>
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
