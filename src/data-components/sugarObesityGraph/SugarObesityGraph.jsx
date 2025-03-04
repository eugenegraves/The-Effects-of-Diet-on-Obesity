import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const SugarObesityGraph = () => {
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

    return (
        <div>
            <h2>Sugar Intake vs Obesity Rates by Country</h2>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={pivotedData} margin={{ top: 5, right: 50, left: 20, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" label={{ value: "Year", position: "insideBottom", offset: -5 }} />
                    <YAxis yAxisId="obesity" label={{ value: "Obesity Rate (%)", angle: -90, position: "insideLeft" }} />
                    <YAxis yAxisId="sugar" orientation="right" label={{ value: "Sugar Intake (Tons)", angle: 90, position: "insideRight" }} />
                    
                    <Line yAxisId="obesity" type="monotone" dataKey="indiaObesity" stroke="#FF0000" name="India Obesity" activeDot={{ r: 3 }} />
                    <Line yAxisId="sugar" type="monotone" dataKey="indiaSugar" stroke="#8B0000" name="India Sugar" activeDot={{ r: 3 }} />
                    <Line yAxisId="obesity" type="monotone" dataKey="chinaObesity" stroke="#FF4500" name="China Obesity" activeDot={{ r: 3 }} />
                    <Line yAxisId="sugar" type="monotone" dataKey="chinaSugar" stroke="#D2691E" name="China Sugar" activeDot={{ r: 3 }} />
                    <Line yAxisId="obesity" type="monotone" dataKey="usaObesity" stroke="#FFFF00" name="USA Obesity" activeDot={{ r: 3 }} />
                    <Line yAxisId="sugar" type="monotone" dataKey="usaSugar" stroke="#DAA520" name="USA Sugar" activeDot={{ r: 3 }} />
                    <Line yAxisId="obesity" type="monotone" dataKey="indonesiaObesity" stroke="#00FF00" name="Indonesia Obesity" activeDot={{ r: 3 }} />
                    <Line yAxisId="sugar" type="monotone" dataKey="indonesiaSugar" stroke="#006400" name="Indonesia Sugar" activeDot={{ r: 3 }} />
                    <Line yAxisId="obesity" type="monotone" dataKey="pakistanObesity" stroke="#00B7EB" name="Pakistan Obesity" activeDot={{ r: 3 }} />
                    <Line yAxisId="sugar" type="monotone" dataKey="pakistanSugar" stroke="#00008B" name="Pakistan Sugar" activeDot={{ r: 3 }} />
                    <Line yAxisId="obesity" type="monotone" dataKey="nigeriaObesity" stroke="#FF00FF" name="Nigeria Obesity" activeDot={{ r: 3 }} />
                    <Line yAxisId="sugar" type="monotone" dataKey="nigeriaSugar" stroke="#4B0082" name="Nigeria Sugar" activeDot={{ r: 3 }} />
                    <Line yAxisId="obesity" type="monotone" dataKey="brazilObesity" stroke="#FF69B4" name="Brazil Obesity" activeDot={{ r: 3 }} />
                    <Line yAxisId="sugar" type="monotone" dataKey="brazilSugar" stroke="#C71585" name="Brazil Sugar" activeDot={{ r: 3 }} />
                    <Line yAxisId="obesity" type="monotone" dataKey="bangladeshObesity" stroke="#A52A2A" name="Bangladesh Obesity" activeDot={{ r: 3 }} />
                    <Line yAxisId="sugar" type="monotone" dataKey="bangladeshSugar" stroke="#4A2F23" name="Bangladesh Sugar" activeDot={{ r: 3 }} />
                    <Line yAxisId="obesity" type="monotone" dataKey="russiaObesity" stroke="#FFF" name="Russia Obesity" activeDot={{ r: 3 }} />
                    <Line yAxisId="sugar" type="monotone" dataKey="russiaSugar" stroke="#FFF" name="Russia Sugar" activeDot={{ r: 3 }} />
                    <Line yAxisId="obesity" type="monotone" dataKey="ethiopiaObesity" stroke="#000" name="Russia Obesity" activeDot={{ r: 3 }} />
                    <Line yAxisId="sugar" type="monotone" dataKey="ethiopiaSugar" stroke="#000" name="Russia Sugar" activeDot={{ r: 3 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SugarObesityGraph;