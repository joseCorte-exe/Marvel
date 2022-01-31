import React, {useState, useEffect} from 'react';
import Card from '../../src/components/card/Card';
import { api } from '../../src/services/api';

import Image from 'next/image'

export default function Home() {
    const [catalog, setCatalog] = useState([])

    useEffect(() => {
        api.get('series?ts=1643487890&apikey=ff71f49761fb6a07a7b94a1fe4a112d3&hash=fcf44c5101f8b675183d3f9a00b437c3')
        .then(res => (setCatalog(res.data.data.results)))
        .catch(err => (
            console.log(err)
        ))
    }, [])

    console.log(catalog);

    return (
        <div>
            {
                catalog.map(value => <Card key={value.id} image={value.thumbnail.path} type={value.type} title={value.title} creators={value.creators.items.map(value => (value.name))}/> )
            }
        </div>
    );
}
