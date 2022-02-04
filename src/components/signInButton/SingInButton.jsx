import Image from 'next/image'

import { signIn, signOut, useSession } from 'next-auth/react';

import React from 'react';

import { ButtonSignIn, ButtonSignOut } from './style'

export default function SignInButton() {

    const { data: session } = useSession();

    return session ? (
        <ButtonSignOut type='button' onClick={() => signOut()}>
            <Image src={session.user.image} width={55} height={55} />
        </ButtonSignOut>
    ) : (
        <ButtonSignIn
            type='button'
            onClick={() => signIn('github')}
        >
            <Image src={'/images/github.png'} width={25} height={25} />
            Sign in with github
        </ButtonSignIn>
    )
}
