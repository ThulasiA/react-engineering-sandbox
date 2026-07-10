import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

const SpaceXLaunches = () => {
    const [year, setYear] = useState("");
    const [launch, setLaunch] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.spacexdata.com/v3/launches`)
            .then((res) => setLaunch(res.data));
    }, []);

    const filteredLaunches = useMemo(() => {
        return year
            ? launch.filter((launch) => launch.launch_year === year)
            : launch;
    }, [year, launch]);

    return (
        <>
            <select value={year} onChange={(e) => setYear(e.target.value)}>
                <option value="">All Years</option>
                {[...new Set(launch.map((launch) => launch.launch_year))].map(
                    (year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    )
                )}
            </select>
            <table>
                <thead>
                    <tr>
                        <th>Mission </th>
                        <th> Year </th>
                    </tr>
                </thead>
                <tbody>
                    {filteredLaunches.map((launch) => (
                        <tr key={launch.flight_number}>
                            <td>{launch.mission_name} </td>
                            <td> {launch.launch_year} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default SpaceXLaunches;