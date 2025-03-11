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
            2018: [
                { name: 'Alcohol', value: 89 },
                { name: 'Sugar', value: 437 },
                { name: 'Oils & Fats', value: 638 },
                { name: 'Meat', value: 452 },
                { name: 'Dairy & Eggs', value: 309 },
                { name: 'Fruits & Vegetables', value: 165 },
                { name: 'Starchy Roots', value: 127 },
                { name: 'Pulses', value: 117 },
                { name: 'Cereals & Grains', value: 915 },
                { name: 'Other', value: 26 }
            ],
            2019: [
                { name: 'Alcohol', value: 106 },
                { name: 'Sugar', value: 431 },
                { name: 'Oils & Fats', value: 688 },
                { name: 'Meat', value: 448 },
                { name: 'Dairy & Eggs', value: 326 },
                { name: 'Fruits & Vegetables', value: 161 },
                { name: 'Starchy Roots', value: 126 },
                { name: 'Pulses', value: 112 },
                { name: 'Cereals & Grains', value: 861 },
                { name: 'Other', value: 24 }
            ],
            2020: [
                { name: 'Alcohol', value: 91 },
                { name: 'Sugar', value: 377 },
                { name: 'Oils & Fats', value: 710 },
                { name: 'Meat', value: 446 },
                { name: 'Dairy & Eggs', value: 330 },
                { name: 'Fruits & Vegetables', value: 161 },
                { name: 'Starchy Roots', value: 129 },
                { name: 'Pulses', value: 114 },
                { name: 'Cereals & Grains', value: 868 },
                { name: 'Other', value: 25 }
            ],
            2021: [
                { name: 'Alcohol', value: 96 },
                { name: 'Sugar', value: 377 },
                { name: 'Oils & Fats', value: 736 },
                { name: 'Meat', value: 438 },
                { name: 'Dairy & Eggs', value: 326 },
                { name: 'Fruits & Vegetables', value: 160 },
                { name: 'Starchy Roots', value: 128 },
                { name: 'Pulses', value: 107 },
                { name: 'Cereals & Grains', value: 908 },
                { name: 'Other', value: 24 }
            ]
        },
        Nigeria: {
            2018: [
                { name: 'Alcohol', value: 15 },
                { name: 'Sugar', value: 106 },
                { name: 'Oils & Fats', value: 430 },
                { name: 'Meat', value: 53 },
                { name: 'Dairy & Eggs', value: 20 },
                { name: 'Fruits & Vegetables', value: 136 },
                { name: 'Starchy Roots', value: 628 },
                { name: 'Pulses', value: 95 },
                { name: 'Cereals & Grains', value: 1036 },
                { name: 'Other', value: 12 }
            ],
            2019: [
                { name: 'Alcohol', value: 15 },
                { name: 'Sugar', value: 105 },
                { name: 'Oils & Fats', value: 424 },
                { name: 'Meat', value: 52 },
                { name: 'Dairy & Eggs', value: 19 },
                { name: 'Fruits & Vegetables', value: 131 },
                { name: 'Starchy Roots', value: 650 },
                { name: 'Pulses', value: 96 },
                { name: 'Cereals & Grains', value: 1029 },
                { name: 'Other', value: 20 }
            ],
            2020: [
                { name: 'Alcohol', value: 16 },
                { name: 'Sugar', value: 89 },
                { name: 'Oils & Fats', value: 429 },
                { name: 'Meat', value: 51 },
                { name: 'Dairy & Eggs', value: 20 },
                { name: 'Fruits & Vegetables', value: 130 },
                { name: 'Starchy Roots', value: 635 },
                { name: 'Pulses', value: 102 },
                { name: 'Cereals & Grains', value: 1015 },
                { name: 'Other', value: 22 }
            ],
            2021: [
                { name: 'Alcohol', value: 17 },
                { name: 'Sugar', value: 100 },
                { name: 'Oils & Fats', value: 421 },
                { name: 'Meat', value: 50 },
                { name: 'Dairy & Eggs', value: 21 },
                { name: 'Fruits & Vegetables', value: 127 },
                { name: 'Starchy Roots', value: 636 },
                { name: 'Pulses', value: 97 },
                { name: 'Cereals & Grains', value: 1014 },
                { name: 'Other', value: 21 }
            ]
        },
        Bangladesh: {
            2018: [
                { name: 'Alcohol', value: 0 },
                { name: 'Sugar', value: 78 },
                { name: 'Oils & Fats', value: 201 },
                { name: 'Meat', value: 71 },
                { name: 'Dairy & Eggs', value: 54 },
                { name: 'Fruits & Vegetables', value: 73 },
                { name: 'Starchy Roots', value: 94 },
                { name: 'Pulses', value: 61 },
                { name: 'Cereals & Grains', value: 1909 },
                { name: 'Other', value: 24 }
            ],
            2019: [
                { name: 'Alcohol', value: 0 },
                { name: 'Sugar', value: 79 },
                { name: 'Oils & Fats', value: 203 },
                { name: 'Meat', value: 72 },
                { name: 'Dairy & Eggs', value: 52 },
                { name: 'Fruits & Vegetables', value: 76 },
                { name: 'Starchy Roots', value: 92 },
                { name: 'Pulses', value: 72 },
                { name: 'Cereals & Grains', value: 1839 },
                { name: 'Other', value: 27 }
            ],
            2020: [
                { name: 'Alcohol', value: 0 },
                { name: 'Sugar', value: 82 },
                { name: 'Oils & Fats', value: 193 },
                { name: 'Meat', value: 71 },
                { name: 'Dairy & Eggs', value: 53 },
                { name: 'Fruits & Vegetables', value: 84 },
                { name: 'Starchy Roots', value: 89 },
                { name: 'Pulses', value: 81 },
                { name: 'Cereals & Grains', value: 1879 },
                { name: 'Other', value: 39 }
            ],
            2021: [
                { name: 'Alcohol', value: 0 },
                { name: 'Sugar', value: 83 },
                { name: 'Oils & Fats', value: 204 },
                { name: 'Meat', value: 70 },
                { name: 'Dairy & Eggs', value: 55 },
                { name: 'Fruits & Vegetables', value: 94 },
                { name: 'Starchy Roots', value: 91 },
                { name: 'Pulses', value: 84 },
                { name: 'Cereals & Grains', value: 1889 },
                { name: 'Other', value: 42 }
            ]
        },
        Russia: {
            2018: [
                { name: 'Alcohol', value: 139 },
                { name: 'Sugar', value: 425 },
                { name: 'Oils & Fats', value: 544 },
                { name: 'Meat', value: 368 },
                { name: 'Dairy & Eggs', value: 352 },
                { name: 'Fruits & Vegetables', value: 169 },
                { name: 'Starchy Roots', value: 168 },
                { name: 'Pulses', value: 23 },
                { name: 'Cereals & Grains', value: 1131 },
                { name: 'Other', value: 35 }
            ],
            2019: [
                { name: 'Alcohol', value: 146 },
                { name: 'Sugar', value: 406 },
                { name: 'Oils & Fats', value: 541 },
                { name: 'Meat', value: 372 },
                { name: 'Dairy & Eggs', value: 346 },
                { name: 'Fruits & Vegetables', value: 168 },
                { name: 'Starchy Roots', value: 159 },
                { name: 'Pulses', value: 21 },
                { name: 'Cereals & Grains', value: 1155 },
                { name: 'Other', value: 35 }
            ],
            2020: [
                { name: 'Alcohol', value: 144 },
                { name: 'Sugar', value: 394 },
                { name: 'Oils & Fats', value: 525 },
                { name: 'Meat', value: 375 },
                { name: 'Dairy & Eggs', value: 356 },
                { name: 'Fruits & Vegetables', value: 164 },
                { name: 'Starchy Roots', value: 155 },
                { name: 'Pulses', value: 25 },
                { name: 'Cereals & Grains', value: 1199 },
                { name: 'Other', value: 32 }
            ],
            2021: [
                { name: 'Alcohol', value: 147 },
                { name: 'Sugar', value: 383 },
                { name: 'Oils & Fats', value: 533 },
                { name: 'Meat', value: 378 },
                { name: 'Dairy & Eggs', value: 358 },
                { name: 'Fruits & Vegetables', value: 168 },
                { name: 'Starchy Roots', value: 151 },
                { name: 'Pulses', value: 26 },
                { name: 'Cereals & Grains', value: 1203 },
                { name: 'Other', value: 34 }
            ]
        },
        Ethiopia: {
            2018: [
                { name: 'Alcohol', value: 25 },
                { name: 'Sugar', value: 95 },
                { name: 'Oils & Fats', value: 149 },
                { name: 'Meat', value: 33 },
                { name: 'Dairy & Eggs', value: 57 },
                { name: 'Fruits & Vegetables', value: 29 },
                { name: 'Starchy Roots', value: 66 },
                { name: 'Pulses', value: 191 },
                { name: 'Cereals & Grains', value: 1752 },
                { name: 'Other', value: 53 }
            ],
            2019: [
                { name: 'Alcohol', value: 25 },
                { name: 'Sugar', value: 65 },
                { name: 'Oils & Fats', value: 90 },
                { name: 'Meat', value: 35 },
                { name: 'Dairy & Eggs', value: 65 },
                { name: 'Fruits & Vegetables', value: 27 },
                { name: 'Starchy Roots', value: 69 },
                { name: 'Pulses', value: 183 },
                { name: 'Cereals & Grains', value: 1803 },
                { name: 'Other', value: 47 }
            ],
            2020: [
                { name: 'Alcohol', value: 21 },
                { name: 'Sugar', value: 76 },
                { name: 'Oils & Fats', value: 169 },
                { name: 'Meat', value: 37 },
                { name: 'Dairy & Eggs', value: 76 },
                { name: 'Fruits & Vegetables', value: 36 },
                { name: 'Starchy Roots', value: 77 },
                { name: 'Pulses', value: 201 },
                { name: 'Cereals & Grains', value: 1714 },
                { name: 'Other', value: 48 }
            ],
            2021: [
                { name: 'Alcohol', value: 17 },
                { name: 'Sugar', value: 80 },
                { name: 'Oils & Fats', value: 245 },
                { name: 'Meat', value: 36 },
                { name: 'Dairy & Eggs', value: 64 },
                { name: 'Fruits & Vegetables', value: 31 },
                { name: 'Starchy Roots', value: 74 },
                { name: 'Pulses', value: 207 },
                { name: 'Cereals & Grains', value: 1670 },
                { name: 'Other', value: 45 }
            ]
        },
    };


};

export default CalorieComodityChart;