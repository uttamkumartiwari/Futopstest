// HERE A TABLE WITH FETCH DATA FROM AN API...
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const FetchData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("https://6cw4vl6ty7.execute-api.ap-northeast-1.amazonaws.com/dev")
            .then((result) => result.data)
            .then((res) => setData(res.body.data));
    }, []);
    return (
        <>
            <table border={2}>
                <thead>
                    <tr>
                        <th>LastActivityTime</th>
                        <th>Tags</th>
                        <th>CameraType</th>
                        <th>UserID</th>
                        <th>SnapshotSignedUrl</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.UserID}>
                            <td>{item.LastActivityTime}</td>
                            <td>{item.Tags}</td>
                            <td>{item.CameraType}</td>
                            <td>{item.UserID}</td>
                            <td>{item.SnapshotSignedUrl}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
export default FetchData;