import React, {Suspense } from 'react';
import ReactDOM from 'react-dom'
// import {Artists} from './Artists'


const Artists = React.lazy(() => import('./Artists'));

const App = () => <div>
    <Suspense fallback={<div>Loading...</div>}>
        <Artists />
    </Suspense>
</div>


ReactDOM.render(<App />, document.getElementById('root'))
