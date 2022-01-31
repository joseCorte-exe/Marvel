import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';

import React, { useEffect, useState } from 'react';

import axios from 'axios';
import Link from 'next/link';

export default function Home() {
    return (
        <>
        <Link href='/comics/Home' >
            <Image src='/images/Marvel_Logo.svg' width={100} height={100} />
        </Link>
        </>
    )
}
