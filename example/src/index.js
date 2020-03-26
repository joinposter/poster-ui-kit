import React from 'react';
import ReactDOM from 'react-dom';

// import PosterUiKit from '../../dist/bundle.min'; // npm run build // Uncomment to test a build
// import PosterUiKit from '../../src/build'; // npm run dev // Uncomment for real-time testing
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

            <div style={{ padding: '20px 30px 80px 30px' }}>
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

                <p>Enabled all, selected 1:</p>
                <br />
                <PosterUiKit.SegmentRadio
                    value="1"
                    segments={[
                        { title: 'Option 1.1', name: 'option1', value: '1' },
                        { title: 'Option 1.2', name: 'option1', value: '2' },
                        { title: 'Option 1.3', name: 'option1', value: '3' },
                    ]}
                />

                <p>Disabled 1,2, selected 1:</p>
                <br />
                <PosterUiKit.SegmentRadio
                    value="1"
                    segments={[
                        { title: 'Option 2.1', name: 'option2', value: '1', disabled: true },
                        { title: 'Option 2.2', name: 'option2', value: '2', disabled: true },
                        { title: 'Option 2.3', name: 'option2', value: '3' },
                        { title: 'Option 2.4', name: 'option2', value: '4' },
                    ]}
                />

                <p>Disabled control, selected 1:</p>
                <br />
                <PosterUiKit.SegmentRadio
                    value="1"
                    disabled
                    segments={[
                        { title: 'Option 3.1', name: 'option3', value: '1' },
                        { title: 'Option 3.2', name: 'option3', value: '2' },
                        { title: 'Option 3.3', name: 'option3', value: '3' },
                    ]}
                />

                <p>Enabled control, disabled all segments, selected 1:</p>
                <br />
                <PosterUiKit.SegmentRadio
                    value="1"
                    segments={[
                        { title: 'Option 3.1', name: 'option3', value: '1', disabled: true },
                        { title: 'Option 3.2', name: 'option3', value: '2', disabled: true },
                        { title: 'Option 3.3', name: 'option3', value: '3', disabled: true },
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

                <PosterUiKit.Alert>Data saved!</PosterUiKit.Alert>

                <PosterUiKit.Alert onClose={() => ({})}>
                    Data saved!
                </PosterUiKit.Alert>

                <hr />

                <div style={{ maxWidth: 600 }}>
                    <PosterUiKit.FormGroup label="Input label">
                        <input type="text" id="input-id" placeholder="Your text here" />
                    </PosterUiKit.FormGroup>

                    <PosterUiKit.FormGroup label="Input with error" error="Error message">
                        <input type="text" id="input-error" placeholder="Your text here" />
                    </PosterUiKit.FormGroup>
                </div>

                <hr />

                {['success', 'info', 'warning', 'danger', 'primary', 'default'].map(type => (
                    <div className="p-m-b-12">
                        <PosterUiKit.Bage text={type} type={type} />
                    </div>
                ))}
            </div>

            <PosterUiKit.Submit buttonText="Save" onClick={(e, next) => setTimeout(next, 1000)} />
        </div>
    );
}


ReactDOM.render(<DemoApp />, document.getElementById('app-container'));
