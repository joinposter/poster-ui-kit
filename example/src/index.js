import React from 'react';
import ReactDOM from 'react-dom';

// import PosterUiKit from '../../dist/bundle.min'; // npm run build // Uncomment to test a build
// import PosterUiKit from '../../src/build';
import PosterUiKit from 'poster-ui-kit';

function DemoApp() {
    return (
        <div>
            <PosterUiKit.PageHeader
                title="Billing"
                quantity={10}
                pages={[
                    { url: '#', name: 'Pricing plan', active: true },
                    { url: '#', name: 'Details and notifications' },
                ]}
            />

            <div style={{ padding: 20 }}>
                <PosterUiKit.Button className="ib m-r-15" onClick={() => alert('Regular button clicked')}>
                    Regular Button
                </PosterUiKit.Button>

                <PosterUiKit.Button className="ib p-m-r-16" inProgress>
                    In Progress
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

                <PosterUiKit.BlockTitle
                    title="New block starts here"
                    hint="And of some a handful tip here"
                />

                <hr />

                <div>
                    I am a toggle <PosterUiKit.Toggle className="ib m-l-10" />
                </div>

                <hr />

                <PosterUiKit.Tooltip>
                    Helpful tip here
                </PosterUiKit.Tooltip>

                <hr />
            </div>

            <PosterUiKit.Submit buttonText="Save" onClick={(e, next) => setTimeout(next, 1000)} />
        </div>
    );
}


ReactDOM.render(<DemoApp />, document.getElementById('app-container'));
