// import React from 'react';

import { h } from 'preact';

import render from 'preact-render-to-string';

import './main.css';

import IndexPage from './Index';

console.log('main');
console.log('main2');

// const X = () => <div className="text-center">Hello</div>;

// console.log(render(<x />));
console.log(render(<IndexPage />));
// console.log(<div className="text-center">Hello</div>);
