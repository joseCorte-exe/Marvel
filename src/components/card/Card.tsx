import React from 'react';

import Image from 'next/image';
import { title } from 'process';

import { CardView } from './style.ts'

export default function Card({image, type, title, creators}) {
    return (
        <CardView>
            <p id='type' >{type}</p>
            <Image src={`${image}.jpg`} alt="" width={115} height={160} />
            <footer>
                <p>{title}</p>
                <span>{creators}</span>
            </footer>
        </CardView>
    );
}
