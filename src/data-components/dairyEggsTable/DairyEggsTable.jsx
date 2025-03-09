import React, { useState } from "react";
import { ResponsiveContainer } from "recharts";
import styles from "./dairyEggsTableStyles.module.css";

const DairyEggsTable = () => {
    const data = [
        {
            country: "USA",
            2018: 454,
            2019: 456,
            2020: 452,
            2021: 458,
            relativeChange: 1,
            absoluteChange: 4,
        },
        {
            country: "Russia",
            2018: 352,
            2019: 346,
            2020: 356,
            2021: 358,
            relativeChange: 2,
            absoluteChange: 6,
        },
        {
            country: "Bangladesh",
            2018: 54,
            2019: 52,
            2020: 53,
            2021: 55,
            relativeChange: 2,
            absoluteChange: 1,
        },
        {
            country: "Pakistan",
            2018: 326,
            2019: 352,
            2020: 335,
            2021: 341,
            relativeChange: 5,
            absoluteChange: 15,
        },
        {
            country: "Nigeria",
            2018: 20,
            2019: 19,
            2020: 20,
            2021: 21,
            relativeChange: 5,
            absoluteChange: 1,
        },
        {
            country: "Brazil",
            2018: 309,
            2019: 326,
            2020: 330,
            2021: 326,
            relativeChange: 6,
            absoluteChange: 17,
        },
        {
            country: "Indonesia",
            2018: 75,
            2019: 75,
            2020: 82,
            2021: 82,
            relativeChange: 9,
            absoluteChange: 7,
        },
        {
            country: "Ethiopia",
            2018: 57,
            2019: 65,
            2020: 76,
            2021: 64,
            relativeChange: 12,
            absoluteChange: 7,
        },
        {
            country: "India",
            2018: 186,
            2019: 200,
            2020: 215,
            2021: 211,
            relativeChange: 13,
            absoluteChange: 25,
        },
        {
            country: "China",
            2018: 126,
            2019: 134,
            2020: 140,
            2021: 145,
            relativeChange: 15,
            absoluteChange: 19,
        },
    ];

    const columns = [
        { key: 'country', header: 'Country' },
        { key: '2018', header: '2018' },
        { key: '2019', header: '2019' },
        { key: '2020', header: '2020' },
        { key: '2021', header: '2021' },
        { key: 'relativeChange', header: 'Relative Change (%)' },
        { key: 'absoluteChange', header: 'Absolute Change (kcal)' }
    ];

    const [sortDirection, setSortDirection] = useState({
        key: null,
        direction: 'asc'
    });

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortDirection.key === key && sortDirection.direction === 'asc') {
            direction = 'desc';
        }
        setSortDirection({ key, direction });
    }

    const sortedData = React.useMemo(() => {
        if (!sortDirection.key) {
            return data;
        }

        return [...data].sort((a, b) => {
            if (a[sortDirection.key] < b[sortDirection.key]) {
                return sortDirection.direction === 'asc' ? -1 : 1;
            }
            if (a[sortDirection.key] > b[sortDirection.key]) {
                return sortDirection.direction === 'asc' ? 1 : -1;
            }
            return 0;
        });
    }, [data, sortDirection]);

    const sortArrow = ({ column }) => {
        if (sortDirection.key !== column) return <span className={styles.sortIcon}>↕</span>;

        return <span className={styles.sortIcon}>
            {sortDirection.direction === 'asc' ? '↑' : '↓'}
        </span>
    };

    return (
        <ResponsiveContainer width="100" height={400}>
            <table className={styles.dairyEggTable}>
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th key={col.key} className={styles.headerStyle} onClick={() => handleSort(col.key)} style={{ cursor: 'pointer' }}>
                                {col.header}
                                {sortArrow({ column: col.key })}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            {columns.map((col) => (
                                <td key={col.key} className={styles.cellStyle}>
                                    {row[col.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </ResponsiveContainer>
    );
}

export default DairyEggsTable;