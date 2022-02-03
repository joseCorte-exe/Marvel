import React from 'react';

import Image from 'next/image';
import { title } from 'process';

import { CardView } from './style.ts'
import Link from 'next/link';

export default function Card({image, type, title, creators, id}) {
    return (
        <CardView>
                <p id='type' >{type? type : "standart"}</p>
            <Link href={`/comics/${id}`} >
                <Image src={`${image}.jpg`} alt={image} width={165} height={210} layout='fixed' />
            </Link>
            <footer>
                <p>{title}</p>
                <div>
                    <span>{creators}</span>
                </div>
            </footer>
        </CardView>
    );
}
