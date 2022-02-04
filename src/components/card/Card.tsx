import React from 'react';

import Image from 'next/image';

import { CardView } from './style'
import Link from 'next/link';

export default function Card({image, type, title, creators, id, route}) {
    return (
        <CardView>
                <p id='type' >{type? type : "standart"}</p>
            <Link href={route}  >
                <Image src={`${image}.jpg`} alt="" width={165} height={210} layout='fixed' />
                {/* <Image src={image} alt="" width={165} height={210} layout='fixed'/> */}
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
