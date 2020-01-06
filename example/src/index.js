import React from 'react';
import ReactDOM from 'react-dom';

import PosterUiKit from 'poster-ui-kit';

function DemoApp() {
    return (
        <div>
            <PosterUiKit.Button className="ib m-r-15" onClick={() => alert('Regular button clicked')}>
                Regular Button
            </PosterUiKit.Button>

            <PosterUiKit.Button className="ib m-r-15" outline onClick={() => alert('Outline button have been clicked')}>
                Outline Button
            </PosterUiKit.Button>

            <PosterUiKit.Button className="ib m-r-15" inputBlocked>
                Blocked Button
            </PosterUiKit.Button>

            <hr />

            <PosterUiKit.Spinner />

            <hr />

            <PosterUiKit.SegmentRadio
                value="1"
                segments={[
                    { title: 'Option 1', name: 'option', value: '1' },
                    { title: 'Option 2', name: 'option', value: '2' },
                    { title: 'Option 3', name: 'option', value: '3' },
                ]}
            />

            <hr />

            <div>
                I am a toggle
                <PosterUiKit.Toggle className="ib m-l-10" />
            </div>
        </div>
    );
}


ReactDOM.render(<DemoApp />, document.getElementById('app-container'));
