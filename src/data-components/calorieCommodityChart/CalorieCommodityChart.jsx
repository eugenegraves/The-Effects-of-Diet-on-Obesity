import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import styles from "./calorieCommodityChartStyles.module.css";

const CalorieComodityChart = () => {
    const [currentCountry, setCurrentCountry] = useState("USA");
    const [currentYear, setCurrentYear] = useState("2018");

    const countries = [
        'USA', 'China', 'India', 'Indonesia', 'Pakistan',
        'Brazil', 'Nigeria', 'Bangladesh', 'Russia', 'Ethiopia'
    ];

    const years = ['2018', '2019', '2020', '2021'];

    const data = {
        USA: {
            2018: [
                { name: 'Alcohol', value: 143 },
                { name: 'Sugar', value: 593 },
                { name: 'Oils & Fats', value: 924 },
                { name: 'Meat', value: 517 },
                { name: 'Dairy & Eggs', value: 454 },
                { name: 'Fruits & Vegetables', value: 230 },
                { name: 'Starchy Roots', value: 102 },
                { name: 'Pulses', value: 32 },
                { name: 'Cereals & Grains', value: 795 },
                { name: 'Other', value: 33 }
            ],
            2019: [
                { name: 'Alcohol', value: 143 },
                { name: 'Sugar', value: 596 },
                { name: 'Oils & Fats', value: 948 },
                { name: 'Meat', value: 529 },
                { name: 'Dairy & Eggs', value: 456 },
                { name: 'Fruits & Vegetables', value: 235 },
                { name: 'Starchy Roots', value: 100 },
                { name: 'Pulses', value: 31 },
                { name: 'Cereals & Grains', value: 802 },
                { name: 'Other', value: 36 }
            ],
            2020: [
                { name: 'Alcohol', value: 141 },
                { name: 'Sugar', value: 589 },
                { name: 'Oils & Fats', value: 957 },
                { name: 'Meat', value: 540 },
                { name: 'Dairy & Eggs', value: 452 },
                { name: 'Fruits & Vegetables', value: 217 },
                { name: 'Starchy Roots', value: 101 },
                { name: 'Pulses', value: 44 },
                { name: 'Cereals & Grains', value: 814 },
                { name: 'Other', value: 37 }
            ],
            2021: [
                { name: 'Alcohol', value: 146 },
                { name: 'Sugar', value: 603 },
                { name: 'Oils & Fats', value: 966 },
                { name: 'Meat', value: 538 },
                { name: 'Dairy & Eggs', value: 458 },
                { name: 'Fruits & Vegetables', value: 221 },
                { name: 'Starchy Roots', value: 95 },
                { name: 'Pulses', value: 29 },
                { name: 'Cereals & Grains', value: 818 },
                { name: 'Other', value: 38 }
            ],
        },
        China: {
            2018: [
                { name: 'Alcohol', value: 97 },
                { name: 'Sugar', value: 81 },
                { name: 'Oils & Fats', value: 395 },
                { name: 'Meat', value: 417 },
                { name: 'Dairy & Eggs', value: 127 },
                { name: 'Fruits & Vegetables', value: 410 },
                { name: 'Starchy Roots', value: 141 },
                { name: 'Pulses', value: 16 },
                { name: 'Cereals & Grains', value: 1551 },
                { name: 'Other', value: 35 }
            ],
            2019: [
                { name: 'Alcohol', value: 98 },
                { name: 'Sugar', value: 88 },
                { name: 'Oils & Fats', value: 409 },
                { name: 'Meat', value: 417 },
                { name: 'Dairy & Eggs', value: 135 },
                { name: 'Fruits & Vegetables', value: 427 },
                { name: 'Starchy Roots', value: 139 },
                { name: 'Pulses', value: 16 },
                { name: 'Cereals & Grains', value: 1533 },
                { name: 'Other', value: 36 }
            ],
            2020: [
                { name: 'Alcohol', value: 92 },
                { name: 'Sugar', value: 78 },
                { name: 'Oils & Fats', value: 423 },
                { name: 'Meat', value: 390 },
                { name: 'Dairy & Eggs', value: 140 },
                { name: 'Fruits & Vegetables', value: 429 },
                { name: 'Starchy Roots', value: 136 },
                { name: 'Pulses', value: 18 },
                { name: 'Cereals & Grains', value: 1572 },
                { name: 'Other', value: 37 }
            ],
            2021: [
                { name: 'Alcohol', value: 93 },
                { name: 'Sugar', value: 82 },
                { name: 'Oils & Fats', value: 440 },
                { name: 'Meat', value: 414 },
                { name: 'Dairy & Eggs', value: 145 },
                { name: 'Fruits & Vegetables', value: 438 },
                { name: 'Starchy Roots', value: 136 },
                { name: 'Pulses', value: 17 },
                { name: 'Cereals & Grains', value: 1590 },
                { name: 'Other', value: 39 }
            ],
        },
        India: {
            2018: [
                { name: 'Alcohol', value: 15 },
                { name: 'Sugar', value: 257 },
                { name: 'Oils & Fats', value: 365 },
                { name: 'Meat', value: 36 },
                { name: 'Dairy & Eggs', value: 186 },
                { name: 'Fruits & Vegetables', value: 152 },
                { name: 'Starchy Roots', value: 56 },
                { name: 'Pulses', value: 134 },
                { name: 'Cereals & Grains', value: 1306 },
                { name: 'Other', value: 28 }
            ],
            2019: [
                { name: 'Alcohol', value: 16 },
                { name: 'Sugar', value: 241 },
                { name: 'Oils & Fats', value: 363 },
                { name: 'Meat', value: 37 },
                { name: 'Dairy & Eggs', value: 200 },
                { name: 'Fruits & Vegetables', value: 154 },
                { name: 'Starchy Roots', value: 56 },
                { name: 'Pulses', value: 133 },
                { name: 'Cereals & Grains', value: 1309 },
                { name: 'Other', value: 30 }
            ],
            2020: [
                { name: 'Alcohol', value: 16 },
                { name: 'Sugar', value: 211 },
                { name: 'Oils & Fats', value: 365 },
                { name: 'Meat', value: 38 },
                { name: 'Dairy & Eggs', value: 215 },
                { name: 'Fruits & Vegetables', value: 158 },
                { name: 'Starchy Roots', value: 57 },
                { name: 'Pulses', value: 129 },
                { name: 'Cereals & Grains', value: 1336 },
                { name: 'Other', value: 27 }
            ],
            2021: [
                { name: 'Alcohol', value: 16 },
                { name: 'Sugar', value: 207 },
                { name: 'Oils & Fats', value: 365 },
                { name: 'Meat', value: 36 },
                { name: 'Dairy & Eggs', value: 211 },
                { name: 'Fruits & Vegetables', value: 159 },
                { name: 'Starchy Roots', value: 58 },
                { name: 'Pulses', value: 132 },
                { name: 'Cereals & Grains', value: 1353 },
                { name: 'Other', value: 32 }
            ]
        },
        Indonesia: {
            2018: [
                { name: 'Alcohol', value: 2 },
                { name: 'Sugar', value: 266 },
                { name: 'Oils & Fats', value: 380 },
                { name: 'Meat', value: 143 },
                { name: 'Dairy & Eggs', value: 75 },
                { name: 'Fruits & Vegetables', value: 135 },
                { name: 'Starchy Roots', value: 214 },
                { name: 'Pulses', value: 8 },
                { name: 'Cereals & Grains', value: 1675 },
                { name: 'Other', value: 22 }
            ],
            2019: [
                { name: 'Alcohol', value: 2 },
                { name: 'Sugar', value: 261 },
                { name: 'Oils & Fats', value: 454 },
                { name: 'Meat', value: 174 },
                { name: 'Dairy & Eggs', value: 75 },
                { name: 'Fruits & Vegetables', value: 136 },
                { name: 'Starchy Roots', value: 211 },
                { name: 'Pulses', value: 8 },
                { name: 'Cereals & Grains', value: 1571 },
                { name: 'Other', value: 22 }
            ],
            2020: [
                { name: 'Alcohol', value: 2 },
                { name: 'Sugar', value: 283 },
                { name: 'Oils & Fats', value: 589 },
                { name: 'Meat', value: 169 },
                { name: 'Dairy & Eggs', value: 82 },
                { name: 'Fruits & Vegetables', value: 154 },
                { name: 'Starchy Roots', value: 211 },
                { name: 'Pulses', value: 9 },
                { name: 'Cereals & Grains', value: 1402 },
                { name: 'Other', value: 23 }
            ],
            2021: [
                { name: 'Alcohol', value: 2 },
                { name: 'Sugar', value: 272 },
                { name: 'Oils & Fats', value: 594 },
                { name: 'Meat', value: 172 },
                { name: 'Dairy & Eggs', value: 82 },
                { name: 'Fruits & Vegetables', value: 159 },
                { name: 'Starchy Roots', value: 205 },
                { name: 'Pulses', value: 9 },
                { name: 'Cereals & Grains', value: 1397 },
                { name: 'Other', value: 24 }
            ]
        },
        Pakistan: {
            2018: [
                { name: 'Alcohol', value: 0 },
                { name: 'Sugar', value: 252 },
                { name: 'Oils & Fats', value: 464 },
                { name: 'Meat', value: 81 },
                { name: 'Dairy & Eggs', value: 326 },
                { name: 'Fruits & Vegetables', value: 92 },
                { name: 'Starchy Roots', value: 29 },
                { name: 'Pulses', value: 35 },
                { name: 'Cereals & Grains', value: 1186 },
                { name: 'Other', value: 19 }
            ],
            2019: [
                { name: 'Alcohol', value: 0 },
                { name: 'Sugar', value: 224 },
                { name: 'Oils & Fats', value: 463 },
                { name: 'Meat', value: 83 },
                { name: 'Dairy & Eggs', value: 352 },
                { name: 'Fruits & Vegetables', value: 92 },
                { name: 'Starchy Roots', value: 30 },
                { name: 'Pulses', value: 40 },
                { name: 'Cereals & Grains', value: 1150 },
                { name: 'Other', value: 17 }
            ],
            2020: [
                { name: 'Alcohol', value: 0 },
                { name: 'Sugar', value: 284 },
                { name: 'Oils & Fats', value: 446 },
                { name: 'Meat', value: 75 },
                { name: 'Dairy & Eggs', value: 335 },
                { name: 'Fruits & Vegetables', value: 78 },
                { name: 'Starchy Roots', value: 28 },
                { name: 'Pulses', value: 60 },
                { name: 'Cereals & Grains', value: 1158 },
                { name: 'Other', value: 19 }
            ],
            2021: [
                { name: 'Alcohol', value: 0 },
                { name: 'Sugar', value: 289 },
                { name: 'Oils & Fats', value: 446 },
                { name: 'Meat', value: 79 },
                { name: 'Dairy & Eggs', value: 341 },
                { name: 'Fruits & Vegetables', value: 81 },
                { name: 'Starchy Roots', value: 36 },
                { name: 'Pulses', value: 55 },
                { name: 'Cereals & Grains', value: 1139 },
                { name: 'Other', value: 19 }
            ]
        },
        Brazil: {

        },
        Nigeria: {

        },
        Bangladesh: {

        },
        Russia: {

        },
        Ethiopia: {

        },
    };


};

export default CalorieComodityChart;