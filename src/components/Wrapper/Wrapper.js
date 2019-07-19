import React, { Component } from 'react';
import characterBox from './characterBox';
import score from './score';

//this is our variable to shuffle our array of characters
const shuffleChar = (arr) => arr.map((a) => [ Math.random(), a ]).sort((a, b) => a[0] - b[0]).map((a) => a[1]);

//array of sailor moon characters
const sailorChar = [
	{
		name: 'Sailor Moon',
		img: '../../../public/img/sm.jpg',
		clicked: false
	},
	{
		name: 'Sailor Mercury',
		img: '../../../public/img/m1.jpg',
		clicked: false
	},
	{
		name: 'Sailor Mars',
		img: '../../../public/img/m2.jpg',
		clicked: false
	},
	{
		name: 'Sailor Jupiter',
		img: '../../../public/img/j.jpg',
		clicked: false
	},
	{
		name: 'Sailor Venus',
		img: '../../../public/img/v.jpg',
		clicked: false
	},
	{
		name: 'Tuxedo Mask',
		img: '../../../public/img/tm.jpg',
		clicked: false
	},
	{
		name: 'Sailor Chibi-Moon',
		img: '../../../public/img/cm.jpg',
		clicked: false
	},
	{
		name: 'Sailor Uranus',
		img: '../../../public/img/u.jpg',
		clicked: false
	},
	{
		name: 'Sailor Neptune',
		img: '../../../public/img/n.jpg',
		clicked: false
	},
	{
		name: 'Sailor Pluto',
		img: '../../../public/img/p.jpg',
		clicked: false
	},
	{
		name: 'Sailor Saturn',
		img: '../../../public/img/s.jpg',
		clicked: false
	},
	{
		name: 'Luna Artemis Diana',
		img: '../../../public/img/cats.jpg',
		clicked: false
	}
];

export default class Board extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {
				score: 0
			},
			characters: shuffleArray(sailorChar)
		};
	}

	selectingCharacter = (index) => {
    if (!this.state.)
  }
}
