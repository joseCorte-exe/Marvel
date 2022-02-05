import React from 'react';

import Image from 'next/image';

import { api } from '../../../src/infra/services/api';

import { DetailsView } from '../../../src/styles/layouts/details/style';
import Card from '../../../src/components/card/Card';

Id.getInitialProps = async function ({req, query: {id}}) {

    let details = {};
    let series = {};

    try {
        await api.get(`characters/${id}?ts=1643487890&apikey=ff71f49761fb6a07a7b94a1fe4a112d3&hash=fcf44c5101f8b675183d3f9a00b437c3`)
            .then(res => details = res.data.data.results)
            .catch(err => (
                console.log(err)
            ))

        await api.get(`characters/${id}/series?ts=1643487890&apikey=ff71f49761fb6a07a7b94a1fe4a112d3&hash=fcf44c5101f8b675183d3f9a00b437c3`)
        .then(res => series = res.data.data.results)
        .catch(err => (
            console.log(err)
        ))

        } catch(err) {
        console.error(err);
    }

    return {
        details: details,
        series: series
    }
}

export default function Id({ series, details }) {
    return (
            <>
            <DetailsView>
                <section id='header' >
                    <div id='panel'>
                        <Image src={details[0].thumbnail? `${details[0].thumbnail.path}.jpg` : '/images/Marvel_Logo.svg'} width={165} height={210} layout='fixed'/>
                        <h3>{`${details[0].name} #${details[0].id}`}</h3>
                    </div>
                </section>

                <main>
                    <section id='top'>
                        <div>
                            <h4>Description</h4>
                            <p>{details[0].description==""? <>'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores excepturi, ducimus alias animi aliquid blanditiis ullam eos pariatur sequi soluta iure, mollitia, sed repellendus? Ducimus hic voluptatem magni iure eos?<i>personagem sem descrição</i></> : details[0].description }</p>
                        </div>
                        <article>
                            <h4>Criadores: </h4>
                            {
                                details[0].creators==[]? details[0].creators[0]==undefined? <span>Creators not avaliable</span>  : details[0].creators.map(value => (<span key={value} >{`${value}, `}</span>)) : <p>'Marvel'</p>
                            }
                            {
                            
                            }
                            
                        </article>

                    </section>

                    <section id='bottom'>
                        <h4>Characters: </h4>
                        <div id='cardContainer'>
                                {
                                    series==undefined? <p>Characters not avaliable</p> : series.map(value =>  <Card key={value.id} id={value.id} image={value.thumbnail.path}
                                        type={'character'} title={''}
                                        creators={''} route={`/series/${value.id}`} /> )
                                }
                        </div>
                    </section>

                    <section>
                    </section>
                </main>
            </DetailsView>
        </>
    )
}
