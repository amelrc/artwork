import P0 from './images/p_0.JPG';
import P1 from './images/p_1.jpg';
import P2 from './images/p_2.JPG';
import P3 from './images/p_3.JPG';
import P4 from './images/p_4.JPG';
import P5 from './images/p_5.JPG';
import P6 from './images/p_6.JPG';
import P7 from './images/p_7.jpg';
import I0 from './images/i_0.jpg';
import D0 from './images/d_0.jpg';
import D1 from './images/d_1.jpg';
import D2 from './images/d_2.jpg';
import D3 from './images/d_3.jpg';
import D4 from './images/d_4.jpg';
import C0 from './images/c_0.JPG';
import C1 from './images/c_1.JPG';
import C2 from './images/c_2.JPG';
import C3 from './images/c_3.JPG';
import L0 from './images/l_0.jpeg';
import L1 from './images/l_1.jpeg';
import L2 from './images/l_2.jpeg';
import L3 from './images/l_3.jpeg';
import L4 from './images/l_4.jpg';
import S0 from './images/s_0.jpeg';
import S1 from './images/s_1.jpg';
import S2 from './images/s_2.jpg';

export const data = {
	artwork:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	painting: {
		series: [
			{
				id: 1,
				serie: 'inedito',
				text:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			},
			{
				id: 2,
				serie: 'b&w',
				text:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			},
			{
				id: 2,
				serie: 'sunya',
				text:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			},
		],
		inedito: [
			{
				id: 1,
				image: I0,
				name: 'Yo tengo piedad de mi mismo',
				progress: 'work in progress',
				technique: 'oil on canvas',
				sold: true,
				overview: '',
				size: '200cm x 200cm',
			},
		],

		bw: [
			{
				id: 1,
				image: P0,
				name: 'b/w',
				technique: 'oil on canvas',
				sold: true,
				overview: '',
				size: '100cm x 100cm',
			},
			{
				id: 2,
				image: P1,
				name: 'single',
				technique: 'oil on canvas',
				sold: true,
				overview: '',
				size: '100cm x 100cm',
			},
			{
				id: 3,
				image: P2,
				name: 'single',
				technique: 'oil on canvas',
				sold: false,
				overview: '',
				size: '130cm x 150cm',
			},
			{
				id: 4,
				image: P3,
				name: 'single',
				technique: 'oil on canvas',
				sold: false,
				overview: '',
				size: '100cm x 100cm',
			},
			{
				id: 5,
				image: P4,
				name: 'single',
				technique: 'technique',
				sold: false,
				overview: '',
				size: '100cm x 100cm',
			},
			{
				id: 6,
				image: P5,
				name: 'single',
				technique: 'oil on canvas',
				sold: false,
				overview: '',
				size: '40cm x 40cm',
			},

			{
				id: 7,
				image: P6,
				name: 'single',
				technique: 'oil on canvas',
				sold: true,
				overview: '',
				size: '120cm x 150cm',
			},
		],
		sunya: [
			{
				id: 1,
				image: P7,
				name: 'untitled',
				technique: 'oil on canvas',
				sold: false,
				overview: '',
				size: '100cm x 70cm',
			},
		],
	},
	drawing: {
		series: [
			{
				id: 1,
				serie: 'untitled',
				text:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			},
		],

		untitled: [
			{
				id: 1,
				image: D0,
				name: 'Tesa',
				technique: 'graphite on paper',
				sold: false,
				overview: '',
				size: '150cm x 120cm',
			},
			{
				id: 2,
				image: D1,
				name: 'Mirando al cielo',
				technique: 'graphite on paper',
				sold: true,
				overview: '',
				size: '100cm x 70cm',
			},
			{
				id: 3,
				image: D2,
				name: 'untitled',
				technique: 'graphite on paper',
				sold: false,
				overview: '',
				size: '100cm x 70cm',
			},
			{
				id: 4,
				image: D3,
				name: 'untitled',
				technique: 'graphite on paper',
				sold: false,
				overview: '',
				size: '100cm x 70cm',
			},
			{
				id: 5,
				image: D4,
				name: 'untitled',
				technique: 'graphite on paper',
				sold: false,
				overview: '',
				size: '100cm x 70cm',
			},
		],
	},

	cutpaper: {
		series: [
			{
				id: 1,
				serie: 'Optical Illusions',
				text:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			},
		],
		opart: [
			{
				id: 1,
				image: C0,
				name: 'untitled',
				technique: 'layers of paper',
				sold: true,
				overview: '',
				size: '100cm x 70cm',
			},
			{
				id: 2,
				image: C1,
				name: 'untitled',
				technique: 'layers of paper',
				sold: true,
				overview: '',
				size: '100cm x 70cm',
			},
			{
				id: 3,
				image: C2,
				name: 'untitled',
				technique: 'layers of paper',
				sold: true,
				overview: '',
				size: '100cm x 70cm',
			},
			{
				id: 4,
				image: C3,
				name: 'untitled',
				technique: 'layers of paper',
				sold: true,
				overview: '',
				size: '100cm x 70cm',
			},
		],
	},

	design: {
		series: [
			{ id: 1, serie: 'architectural', text: 'inedito' },
			{ id: 1, serie: 'sketches' },
		],
		lamps: [
			{
				id: 1,
				image: L0,
				name: 'untitled - (off)',
				technique: 'oak wood',
				sold: true,
				overview: '',
				size: '50cm x 35cm x 35cm',
			},
			{
				id: 2,
				image: L1,
				name: 'untitled - (on)',
				technique: '',
				sold: true,
				overview: '',
			},
			{
				id: 3,
				image: L2,
				name: 'untitled - (off)',
				technique: 'oak wood',
				sold: true,
				overview: '',
				size: '50cm x 25cm x 25cm',
			},
			{
				id: 4,
				image: L3,
				name: 'untitled - (on)',
				technique: '',
				sold: true,
				overview: '',
			},
			{
				id: 5,
				image: L4,
				name: 'untitled - (off)',
				technique: 'oak wood',
				sold: true,
				overview: '',
				size: '50cm x 30cm x 25cm',
			},
		],
		sketches: [
			{
				id: 1,
				image: S0,
			},
			{
				id: 2,
				image: S1,
			},
			{
				id: 3,
				image: S2,
			},
		],
	},

	about: {
		contact: {
			email: 'amelrc@gmail.com',
			phone: '+31643846453',
		},
		me: { intro: 'heading', sub: 'sub', body: 'body' },
	},
	bio: {
		about:
			'Amel, born in Havana, has been working as an artist for more than 15 years. He is a multidisciplinary artist who lives in The Hague, The Netherlands. Amel started to receive professional art lessons as a young talent at Taller d’Manero cultural program, continuing his artistic development at The National Academy of Fine Arts San Alejandro in Havana, Cuba. Holding a Master in Cultural Heritage from the Reinwardt Academy in Amsterdam, his artistic practice includes different disciplines such as painting, sculpture, drawing and cut-paper. Having the human being as the center of his work thematic, Amel illustrates emotions and behaviors that are present in our every day life. Questioning the human thinking and the mind, themes like fragility, violence, uncertainty, power, irrationality and death, form part of his realm of inspiration.',
		exhibitions: [
			{
				id: 1,
				title: 'Charity Auction Terry Fox',
				year: 2010,
				location: 'Havana, Cuba',
			},
			{
				id: 2,
				title: 'Cuarteto Artístico: Cuatro Amigos una Cuba',
				year: 2010,
				location: 'Havana, Cuba',
			},
			{
				id: 3,
				title: 'Artistas Cubanos',
				year: 2008,
				location: 'Madrid, Spain',
			},
			{
				id: 4,
				title: 'Panorama 42',
				year: 2008,
				location: 'Havana, Cuba',
			},
			{
				id: 5,
				title: 'Prajnaparamita: Perfección de la Sabiduría',
				year: 2007,
				location: 'Havana, Cuba',
			},
			{
				id: 6,
				title: 'Tribute to Concha Ferrant',
				year: 2007,
				location: 'Havana, Cuba',
			},
			{
				id: 7,
				title: '3D Art Salon Recuerdo de una Época',
				year: 2006,
				location: 'Havana, Cuba',
			},
			{
				id: 8,
				title: 'Playa Art Competition',
				year: 2005,
				location: 'Havana, Cuba',
			},
			{
				id: 9,
				title: 'Performance in Honor to Peace',
				year: 2003,
				location: 'Havana, Cuba',
			},
			{
				id: 10,
				title: 'Malas fotos para cualquier historia',
				year: 2003,
				location: 'Havana, Cuba',
			},
		],
	},
};
