import './css/button.less';
import './css/normalize.less';

import React from 'react';
import ReactDOM from 'react-dom';

import Button from './js/Button';


ReactDOM.render(<Button outline={false}>Привет</Button>, document.getElementById('app-container'));
