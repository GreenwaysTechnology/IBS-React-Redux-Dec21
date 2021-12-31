import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom'
//static import : not need if you load dynamically

// import {Artists} from './Artists'
//const Artists = React.lazy(() => import('./Artists'));
//import function is dynamic function , which returns promise
const Artists = lazy(() => import('./Artists'));

const App = () => <div>
    <Suspense fallback={<div>Loading...</div>}>
        <Artists />
    </Suspense>
</div>


ReactDOM.render(<App />, document.getElementById('root'))
