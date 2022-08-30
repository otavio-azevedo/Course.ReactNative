import React from 'react';
import Top from './components/top.js';

import Produtores from './components/produtores.js';

export default function Home() {
    return <Produtores top={Top} />
}