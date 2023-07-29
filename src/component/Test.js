import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Test.css";
const Test = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://6cw4vl6ty7.execute-api.ap-northeast-1.amazonaws.com/dev")
      .then((result) => result.data)
      .then((res) => setData(res.body.data));
  }, []);
  const list = data.length;

  return (
    <>
      <div className="main-container">
        <div className="navbar">
          <nav>
            <h1 className="nav-text">Camera Management</h1>
            <div className="img-div">
              <img src={"johnsmith.jpg"} className="img-1" />
              <h3 className="name">John Smith</h3>
            </div>
            <hr className="nav-1" />
          </nav>
        </div>
        <div className="camera">
          <img src={"cameralogo.png"} className="img-2" />
          <h3 className="cam-view">Camera View</h3>
        </div>
        <div className="snap">
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="search-nav"
          >
            <h3 className="text-1">Search</h3>
            <div className="text-icon">
              <input
                className="search-bar"
                type="text"
                placeholder="Search By Device Id"
                style={{ marginRight: "10px" }}
              />
              <img
                className="search-icon"
                src={"search.png"}
                alt="Search"
                style={{ cursor: "pointer", width: "25px" }}
              />
              <select className="custom-select">
                <option value="option1">Tags</option>
                <option value="option2">Tags</option>
                <option value="option3">Tags</option>
              </select>
              <img src={"tagslogo.png"} className="tag_image" />
            </div>
            <div className="main-pic">
              <h3 className="snapshot">Latest Snapshot</h3>
              <img src={"roadways.jpg.avif"} className="img-3" />
            </div>
          </div>
        </div>
        <h2 id="heading">Showing All: ({list})</h2>
        <section className="section-1">
          <table className="main-table">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th className="td-row">DeviceID</th>
                <th className="td-row">LastActivityTime</th>
                <th></th>
                <th className="td-row">Tags</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>
                    <img src={"particularimage.png"} className="small_img" />
                  </th>
                  <td className="td-row">{item.DeviceID}</td>
                  <td className="td-row">{item.LastActivityTime}</td>
                  <th>
                    <img src={"tagslogo.png"} className="tags_img" />
                  </th>
                  <td className="td-row">{item.Tags}</td>
                  <th>
                    <img src={"arrow.png"} className="arrow_img" />
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};
export default Test;
