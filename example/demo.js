import React from 'react';
import ReactDOM from 'react-dom';

import PosterUiKit from 'poster-ui-kit';


function DemoApp() {
    return (
        <div>
            <PosterUiKit.Button onClick={() => alert('Regular button clicked')}>
                Regular Button
            </PosterUiKit.Button>

            <hr />

            <PosterUiKit.Button outline onClick={() => alert('Outline button have been clicked')}>
                Outline Button
            </PosterUiKit.Button>

            <hr />

            <PosterUiKit.Spinner />
        </div>
    );
}


ReactDOM.render(<DemoApp />, document.getElementById('app-container'));
