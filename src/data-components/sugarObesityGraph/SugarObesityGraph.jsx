import React from "react";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import styles from "./SugarObesityGraph.module.css";

const SugarObesityGraph = () => {
    const [ selectedCountry, setSelectedCountry ] = useState("all");
    
    const data = [
        { year: 2018, country: "India", sugar: 27500, obesity: 6.11 },
        { year: 2019, country: "India", sugar: 27000, obesity: 6.46 },
        { year: 2020, country: "India", sugar: 28000, obesity: 6.82 },
        { year: 2021, country: "India", sugar: 29000, obesity: 7.22 },
        { year: 2022, country: "India", sugar: 29500, obesity: 7.58 },
        { year: 2018, country: "China", sugar: 15800, obesity: 6.59 },
        { year: 2019, country: "China", sugar: 15400, obesity: 6.99 },
        { year: 2020, country: "China", sugar: 15500, obesity: 7.42 },
        { year: 2021, country: "China", sugar: 14800, obesity: 7.88 },
        { year: 2022, country: "China", sugar: 15500, obesity: 8.36 },
        { year: 2018, country: "USA", sugar: 10982, obesity: 40.68 },
        { year: 2019, country: "USA", sugar: 11109, obesity: 41.19 },
        { year: 2020, country: "USA", sugar: 11032, obesity: 42.70 },
        { year: 2021, country: "USA", sugar: 11314, obesity: 42.21 },
        { year: 2022, country: "USA", sugar: 11498, obesity: 42.72 },
        { year: 2018, country: "Indonesia", sugar: 7055, obesity: 9.10 },
        { year: 2019, country: "Indonesia", sugar: 7356, obesity: 9.68 },
        { year: 2020, country: "Indonesia", sugar: 7445, obesity: 10.69 },
        { year: 2021, country: "Indonesia", sugar: 7600, obesity: 10.91 },
        { year: 2022, country: "Indonesia", sugar: 7055, obesity: 11.33 },
        { year: 2018, country: "Pakistan", sugar: 5400, obesity: 19.17 },
        { year: 2019, country: "Pakistan", sugar: 5540, obesity: 20.26 },
        { year: 2020, country: "Pakistan", sugar: 5750, obesity: 21.39 },
        { year: 2021, country: "Pakistan", sugar: 6000, obesity: 22.54 },
        { year: 2022, country: "Pakistan", sugar: 6150, obesity: 23.71 },
        { year: 2018, country: "Nigeria", sugar: 1610, obesity: 11.06 },
        { year: 2019, country: "Nigeria", sugar: 1620, obesity: 11.48 },
        { year: 2020, country: "Nigeria", sugar: 1610, obesity: 11.93 },
        { year: 2021, country: "Nigeria", sugar: 1600, obesity: 12.40 },
        { year: 2022, country: "Nigeria", sugar: 1600, obesity: 12.89 },
        { year: 2018, country: "Brazil", sugar: 10600, obesity: 24.92 },
        { year: 2019, country: "Brazil", sugar: 10650, obesity: 25.87 },
        { year: 2020, country: "Brazil", sugar: 10150, obesity: 26.83 },
        { year: 2021, country: "Brazil", sugar: 9500, obesity: 27.82 },
        { year: 2022, country: "Brazil", sugar: 9500, obesity: 28.82 },
        { year: 2018, country: "Bangladesh", sugar: 2519, obesity: 4.10 },
        { year: 2019, country: "Bangladesh", sugar: 2480, obesity: 4.40 },
        { year: 2020, country: "Bangladesh", sugar: 2416, obesity: 4.72 },
        { year: 2021, country: "Bangladesh", sugar: 2769, obesity: 5.04 },
        { year: 2022, country: "Bangladesh", sugar: 2428, obesity: 5.39 },
        { year: 2018, country: "Russia", sugar: 6110, obesity: 23.86 },
        { year: 2019, country: "Russia", sugar: 6820, obesity: 24.07 },
        { year: 2020, country: "Russia", sugar: 5804, obesity: 24.28 },
        { year: 2021, country: "Russia", sugar: 6350, obesity: 24.51 },
        { year: 2022, country: "Russia", sugar: 6500, obesity: 24.74 },
        { year: 2018, country: "Ethiopia", sugar: 832, obesity: 2.23 },
        { year: 2019, country: "Ethiopia", sugar: 787, obesity: 2.38 },
        { year: 2020, country: "Ethiopia", sugar: 1642, obesity: 2.54 },
        { year: 2021, country: "Ethiopia", sugar: 2057, obesity: 2.72 },
        { year: 2022, country: "Ethiopia", sugar: 1825, obesity: 2.90 },
    ];
    /*
    const indiaData = data.filter(d => d.country === "India");
    const chinaData = data.filter(d => d.country === "China");
    const usaData = data.filter(d => d.country === "USA");
    const indonesiaData = data.filter(d => d.country === "Indonesia");
    const pakistanData = data.filter(d => d.country === "Pakistan");
    const nigeriaData = data.filter(d => d.country === "Nigeria");
    const brazilData = data.filter(d => d.country === "Brazil");
    const bangladeshData = data.filter(d => d.country === "Bangladesh");
    const russiaData = data.filter(d => d.country === "Russia");
    const ethiopiaData = data.filter(d => d.country === "Ethiopia");
    */

    //Pivoting the Data due to Year Misalignment
    const years = [...new Set(data.map(d => d.year))].sort();
    const pivotedData = years.map(year => {
        const yearData = { year };
        data.forEach(d => {
            if (d.year === year) {
                yearData[`${d.country.toLowerCase()}Sugar`] = d.sugar;
                yearData[`${d.country.toLowerCase()}Obesity`] = d.obesity;
            }
        });
        return yearData;
    });

    const countries = ["All Countries", "India", "China", "USA", "Indonesia", "Pakistan", "Nigeria", "Brazil", "Bangladesh", "Russia", "Ethiopia"];

    //Function Responsible for greying out the lines of the unselected countries
    const lineOpacityHandler = (country) => {
        if (selectedCountry === "all" || selectedCountry === country.toLowerCase()) {
            return 1;
        }
        return 0.1;
    };

    //Function Responsible for highlighting the obesity line gold of the active country
    const lineColorHandler = (country, type) => {
        if (selectedCountry === "all" || selectedCountry === country.toLowerCase()) {
            if (type === "obesity") {
                return "url(#obesityGradient)";
            }
            return "#FFF";
        }
        return "#FFF";
    }

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <h2 style={{ textAlign: "center" }}>Sugar Intake vs Obesity Rates by Country</h2>
            <div style={{ maxWidth: "700px", margin: "40px auto" }}>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={pivotedData} margin={{ top: 5, right: 50, left: 20, bottom: 10 }}>
                        <defs>
                            <linearGradient id="obesityGradient" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#FFD700" />
                                <stop offset="100%" stopColor="#FFA500" />
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" label={{ value: "Year", position: "insideBottom", offset: -5 }} />
                        <YAxis yAxisId="obesity" label={{ value: "Obesity Rate (%)", angle: -90, position: "insideLeft", style: { fill: "#FFD700" } }} />
                        <YAxis yAxisId="sugar" orientation="right" label={{ value: "Sugar Intake (Tons)", angle: 90, position: "insideRight", style: { fill: "#FFF" } }} />
                        
                        <Line yAxisId="obesity" type="monotone" dataKey="indiaObesity" stroke={lineColorHandler("india", "obesity")} name="India Obesity" activeDot={{ r: 3 }} opacity={lineOpacityHandler("india")} />
                        <Line yAxisId="sugar" type="monotone" dataKey="indiaSugar" stroke="#FFF" name="India Sugar" activeDot={{ r: 3 }} opacity={lineOpacityHandler("india")} />
                        <Line yAxisId="obesity" type="monotone" dataKey="chinaObesity" stroke={lineColorHandler("china", "obesity")} name="China Obesity" activeDot={{ r: 3 }} opacity={lineOpacityHandler("china")} />
                        <Line yAxisId="sugar" type="monotone" dataKey="chinaSugar" stroke="#FFF" name="China Sugar" activeDot={{ r: 3 }} opacity={lineOpacityHandler("china")} />
                        <Line yAxisId="obesity" type="monotone" dataKey="usaObesity" stroke={lineColorHandler("usa", "obesity")} name="USA Obesity" activeDot={{ r: 3 }} opacity={lineOpacityHandler("usa")} />
                        <Line yAxisId="sugar" type="monotone" dataKey="usaSugar" stroke="#FFF" name="USA Sugar" activeDot={{ r: 3 }} opacity={lineOpacityHandler("usa")} />
                        <Line yAxisId="obesity" type="monotone" dataKey="indonesiaObesity" stroke={lineColorHandler("indonesia", "obesity")} name="Indonesia Obesity" activeDot={{ r: 3 }} opacity={lineOpacityHandler("indonesia")} />
                        <Line yAxisId="sugar" type="monotone" dataKey="indonesiaSugar" stroke="#FFF" name="Indonesia Sugar" activeDot={{ r: 3 }} opacity={lineOpacityHandler("indonesia")} />
                        <Line yAxisId="obesity" type="monotone" dataKey="pakistanObesity" stroke={lineColorHandler("pakistan", "obesity")} name="Pakistan Obesity" activeDot={{ r: 3 }} opacity={lineOpacityHandler("pakistan")} />
                        <Line yAxisId="sugar" type="monotone" dataKey="pakistanSugar" stroke="#FFF" name="Pakistan Sugar" activeDot={{ r: 3 }} opacity={lineOpacityHandler("pakistan")} />
                        <Line yAxisId="obesity" type="monotone" dataKey="nigeriaObesity" stroke={lineColorHandler("nigeria", "obesity")} name="Nigeria Obesity" activeDot={{ r: 3 }} opacity={lineOpacityHandler("nigeria")} />
                        <Line yAxisId="sugar" type="monotone" dataKey="nigeriaSugar" stroke="#FFF" name="Nigeria Sugar" activeDot={{ r: 3 }} opacity={lineOpacityHandler("nigeria")}/>
                        <Line yAxisId="obesity" type="monotone" dataKey="brazilObesity" stroke={lineColorHandler("brazil", "obesity")} name="Brazil Obesity" activeDot={{ r: 3 }} opacity={lineOpacityHandler("brazil")} />
                        <Line yAxisId="sugar" type="monotone" dataKey="brazilSugar" stroke="#FFF" name="Brazil Sugar" activeDot={{ r: 3 }} opacity={lineOpacityHandler("brazil")} />
                        <Line yAxisId="obesity" type="monotone" dataKey="bangladeshObesity" stroke={lineColorHandler("bangladesh", "obesity")} name="Bangladesh Obesity" activeDot={{ r: 3 }} opacity={lineOpacityHandler("bangladesh")} />
                        <Line yAxisId="sugar" type="monotone" dataKey="bangladeshSugar" stroke="#FFF" name="Bangladesh Sugar" activeDot={{ r: 3 }} opacity={lineOpacityHandler("bangladesh")} />
                        <Line yAxisId="obesity" type="monotone" dataKey="russiaObesity" stroke={lineColorHandler("russia", "obesity")} name="Russia Obesity" activeDot={{ r: 3 }} opacity={lineOpacityHandler("russia")}/>
                        <Line yAxisId="sugar" type="monotone" dataKey="russiaSugar" stroke="#FFF" name="Russia Sugar" activeDot={{ r: 3 }} opacity={lineOpacityHandler("russia")}/>
                        <Line yAxisId="obesity" type="monotone" dataKey="ethiopiaObesity" stroke={lineColorHandler("ethiopia", "obesity")} name="Russia Obesity" activeDot={{ r: 3 }} opacity={lineOpacityHandler("ethiopia")}/>
                        <Line yAxisId="sugar" type="monotone" dataKey="ethiopiaSugar" stroke="#FFF" name="Russia Sugar" activeDot={{ r: 3 }} opacity={lineOpacityHandler("ethiopia")}/>
                    
                        <Tooltip content={<CustomTooltip selectedCountry={selectedCountry} />} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className={styles.filterContainer}>
                <select 
                    value={selectedCountry} 
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className={styles.dropdown}
                >
                    {countries.map((country) => (
                        <option key={country} value={country === "All Countries" ? "all" : country.toLowerCase()}>
                            {country}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

const CustomTooltip = ({ active, payload, label, selectedCountry }) => {
    if (!active || !payload || !payload.length || selectedCountry === "all") {
        return null;
    }

    const countryName = selectedCountry.charAt(0).toUpperCase() + selectedCountry.slice(1);
    const obesityValue = payload.find(p => p.dataKey === `${selectedCountry}Obesity`)?.value;
    const sugarValue = payload.find(p => p.dataKey === `${selectedCountry}Sugar`)?.value;

    return (
        <div className={styles.tooltip}>
            <p>{`Year: ${label}`}</p>
            <p style={{ color: "#FFD700" }}>{`${countryName} Obesity: ${obesityValue}%`}</p>
            <p style={{ color: "#FFFFFF" }}>{`${countryName} Sugar: ${sugarValue} tons`}</p>
        </div>
    );
};

export default SugarObesityGraph;