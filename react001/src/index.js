import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import HelloReact from './HelloReact';
import Rainbow from './Rainbow';
import Comment from './CommentComponent/Comment'


ReactDOM.render(<HelloReact />, document.getElementById('root'));
ReactDOM.render(<div>
                    <Rainbow fcolor="white" bcolor="purple">R</Rainbow>
                    <Rainbow fcolor="white" bcolor="purple">E</Rainbow>
                    <Rainbow fcolor="white" bcolor="purple">A</Rainbow>
                    <Rainbow fcolor="white" bcolor="purple">C</Rainbow>
                    <Rainbow fcolor="white" bcolor="purple">T</Rainbow>
                </div>, document.getElementById("colors"));

ReactDOM.render(<Comment />, document.getElementById("message"));