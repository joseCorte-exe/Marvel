import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Home() {
    const [catalog, setCatalog] = useState([])

    const app = axios.create({
        baseURL: 'http://gateway.marvel.com/v1/public/',
    });

    useEffect(() => {
        app.get('series?ts=1643487890&apikey=ff71f49761fb6a07a7b94a1fe4a112d3&hash=fcf44c5101f8b675183d3f9a00b437c3')
        .then(res => (setCatalog(res.data.data.results)))
        .then(console.log(catalog))
        .catch(err => (
            console.log(err)
        ))
    }, [])

    return (
        <div>
            <p>
                {
                    catalog.map(value => value.title)
                }
            </p>
        </div>
    );
}
