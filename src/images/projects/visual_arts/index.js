import egg_one from './eggs_1.jpg'
import egg_two from './eggs_2.jpg'
import egg_three from './eggs_3.jpg'
import egg_four from './eggs_4.jpg'
import egg_five from './eggs_5.jpg'
import falling_one from './falling_1.jpg'
import falling_two from './falling_2.jpg'
import falling_three from './falling_3.jpg'
import lookup from './lookup.jpg'
import outside_of_window_1 from './outside_of_window_1.jpg'
import outside_of_window_2 from './outside_of_window_2.jpg'
import outside_of_window_3 from './outside_of_window_3.jpg'
import outside_of_window_4 from './outside_of_window_4.jpg'
import planet from './planet.jpg'

const visual_arts = [
    {
        id: 'eggs',
        project_name: 'Eggs',
        subtitle: 'Prints',
        year: '2017',
        type: 'Visual Design',
        category: 'Visual Arts',
        materials: [],
        size: '297 x 420 mm',
        description: '',
        image_layout: "ABB",
        images: [
            egg_one,
            egg_two,
            egg_three,
            egg_four,
            egg_five
        ]
    },
    {
        id: 'falling',
        project_name: 'Falling',
        subtitle: 'Three-dimensional expression Plane composition',
        year: '2017',
        type: 'Visual Design',
        category: 'Visual Arts',
        materials: [],
        size: '250 x 353 mm',
        description: 'Monochrome dominant color One tone (same hue) Triad color scheme',
        images: [
            falling_one,
            falling_two,
            falling_three
        ]
    },
    {
        id: 'look_up',
        project_name: 'Look Up',
        subtitle: 'Large graphic design space (planar configuration)',
        year: '2017',
        type: 'Visual Design',
        category: 'Visual Arts',
        materials: [],
        size: '250 x 353 mm',
        description: '',
        images: [
            lookup
        ]
    },
    {
        id: 'outside_of_window',
        project_name: 'Outside of Window',
        subtitle: 'Prints',
        year: '2017',
        type: 'Visual Design',
        category: 'Visual Arts',
        materials: [],
        size: '297 x 420 mm',
        description: '',
        image_layout: "ABBB",
        images: [
            outside_of_window_1,
            outside_of_window_2,
            outside_of_window_3,
            outside_of_window_4
        ]
    },
    {
        id: 'planet',
        project_name: 'Planet',
        subtitle: 'Psychedelic (planar configuration)',
        year: '2017',
        type: 'Visual Design',
        category: 'Visual Arts',
        materials: [],
        size: '250 x 353 mm',
        description: '',
        images: [
            planet
        ]
    },
]

export default visual_arts