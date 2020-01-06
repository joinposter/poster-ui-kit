# Poster UI Kit

React library with Poster's interface components. 

[🎮 Try out the live version](https://codesandbox.io/s/github/joinposter/poster-ui-kit/tree/master/example) 


## Getting Started

```bash

npm i poster-ui-kit

```


## Usage

```jsx harmony
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
```


## Components


### Button

![Buttons visual](https://github.com/joinposter/poster-ui-kit/blob/master/example/img/buttons.png?raw=true)


```jsx harmony
<PosterUiKit.Button>Press me</PosterUiKit.Button>
```


### Spinner

![Spinner visual](https://github.com/joinposter/poster-ui-kit/blob/master/example/img/spinner.png?raw=true)


```jsx harmony
<PosterUiKit.Spinner>Press me</PosterUiKit.Spinner>
```


## Contribution

