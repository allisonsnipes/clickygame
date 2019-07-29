// import the needed dependencies for header component
import React from 'react';
import './Header.css';
import { props } from 'bluebird';

//seting the component of the header up
//Like Promise.all but for object properties instead of array items. Returns a promise that is fulfilled when all the properties of the object are fulfilled.
//The promise's fulfillment value is an object with fulfillment values at respective keys to the original object. If any promise in the object rejects, the returned promise is rejected with the rejection reason.If object is a trusted Promise, then it will be treated as a promise for object rather than for its properties.All other objects are treated for their properties as is returned by Object.keys - the object's own enumerable
//here we are going to pull the elements for title, scores, and highscore and change them based on the state

const Header = (props) => (
	<div className="header">
		<div className="title">{props.children}</div>
		<div className="scores" />
	</div>
);
