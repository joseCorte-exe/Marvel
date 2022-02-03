import React from 'react';

import Image from 'next/image';

import { api } from '../../src/infra/services/api';
import Header from '../../src/components/header/Header';

import { DetailsView } from '../../src/styles/layouts/details/style';
import Card from '../../src/components/card/Card';

Id.getInitialProps = async function ({req, query: {id}}) {

    let details = {};
    let characters = [];

    try {
        await api.get(`comics/${id}?ts=1643487890&apikey=ff71f49761fb6a07a7b94a1fe4a112d3&hash=fcf44c5101f8b675183d3f9a00b437c3`)
            .then(res => details = {
                id: res.data.data.results[0].id,
                title: res.data.data.results[0].title,
                description: res.data.data.results[0].description? res.data.data.results[0].description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod autem, odio doloribus amet, eum in deserunt a ipsa, velit sunt nemo animi fuga iure vitae consequatur dolorem molestias rem.",
                thumbnail: res.data.data.results[0].thumbnail.path,
                creators: res.data.data.results[0].creators.items.map(value => (value.name)),
                characters: res.data.data.results[0].characters.collectionURI
            })
            .catch(err => (
                console.log(err)
            ))

        await api.get(`comics/${id}/characters?ts=1643487890&apikey=ff71f49761fb6a07a7b94a1fe4a112d3&hash=fcf44c5101f8b675183d3f9a00b437c3`)
            .then(res => characters = res.data.data.results)
            .catch(err => (
                console.log(err)
        ))} catch(err) {
        console.error(err);
    }

    return {
        details: details,
        characters: characters
    }
}

export default function Id({ characters, details }) {
    return (
            <>
            <Header />
            <DetailsView>
                <section id='header' >
                    <div>
                        <Image src={details.thumbnail? `${details.thumbnail}.jpg` : '/images/Marvel_Logo.svg'} width={165} height={210} layout='fixed'/>
                        <h3>{`${details.title} #${details.id}`}</h3>
                    </div>
                </section>

                <main>
                    <section id='top'>

                        <h4>Description</h4>
                        <p>{details.description=="#N/A"? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores excepturi, ducimus alias animi aliquid blanditiis ullam eos pariatur sequi soluta iure, mollitia, sed repellendus? Ducimus hic voluptatem magni iure eos?' : details.description }</p>

                        <article>
                            <h4>Characters</h4>
                            {
                                characters[0]==undefined? <p>Characters not avaliable</p> : characters.map(value =>  <Card key={value.id} id={value.id} image={value.thumbnail.path}
                                    type={'character'} title={''}
                                    creators={''} /> )
                            }
                        </article>

                    </section>

                    <section id='bottom'>
                    <h4>Criadores: </h4>
                            {
                                details.creators[0]==undefined? <span>Creators not avaliable</span>  : details.creators.map(value => (<span key={value} >{`${value}, `}</span>))
                            }
                    </section>

                    <section>
                    </section>
                </main>
            </DetailsView>
        </>
    )
}
