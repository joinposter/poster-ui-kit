import React from 'react';

import Button from './Button';

export default class DemoApp extends React.Component {
    render() {
        return (
            <div>
                <Button>Regular Button</Button>

                <p />

                <Button outline onClick={() => alert('Hello')}>Outline Button</Button>
            </div>
        );
    }
}
