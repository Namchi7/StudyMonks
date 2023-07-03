import React, { useState, useEffect } from "react";

import styles from "./css/cSearch.module.css";
import Header from "./Header";

import downArrowIcon from "../assets/icons/downArrow.svg";
import { useAuth } from "./contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const candidates = [
  {
    name: "John Doe",
    location: "Delhi",
    jobRole: "Manager",
    experience: "2",
  },
  {
    name: "Jason White",
    location: "New Delhi",
    jobRole: "General Manager",
    experience: "5",
  },
  {
    name: "Leena Paul",
    location: "Mumbai",
    jobRole: "Associate Manager",
    experience: "3",
  },
  {
    name: "Christopher Nolan",
    location: "Bangalore",
    jobRole: "Branch Manager",
    experience: "2",
  },
  {
    name: "Robert Downey Jr.",
    location: "Mumbai",
    jobRole: "General Manager",
    experience: "7",
  },
  {
    name: "Dwayne Johnson",
    location: "Chennai",
    jobRole: "Manager",
    experience: "5",
  },
  {
    name: "Jennifer Lawrence",
    location: "Chandigarh",
    jobRole: "Assistant Manager",
    experience: "2",
  },
  {
    name: "Tom Holland",
    location: "Pune",
    jobRole: "Assistant Manager",
    experience: "1",
  },
  {
    name: "Jason Mamoa",
    location: "Chennai",
    jobRole: "Manager",
    experience: "4",
  },
  {
    name: "Akshay Kumar",
    location: "Chandigarh",
    jobRole: "Manager",
    experience: "5",
  },
  {
    name: "Alok Nath",
    location: "Lucknow",
    jobRole: "General Manager",
    experience: "7",
  },
];

function CSearch() {
  const [filtered, setFiltered] = useState([]);
  const { currentUser } = useAuth();
  const user = currentUser ? true : false;
  const navigate = useNavigate();

  const openFilterDropdown = (filter) => {
    const filterDDown = document.querySelector(`[${filter}]`);
    const allDDown = document.querySelectorAll("#filterDDown");
    allDDown.forEach((dDown) => {
      dDown.style.display = "none";
    });
    if (filterDDown.style.display === "flex")
      filterDDown.style.display = "none";
    else filterDDown.style.display = "flex";
  };

  const setSelected = (filter, value) => {
    switch (filter) {
      case "loc": {
        document.querySelector("[data-location]").innerText = value;
        const allDDown = document.querySelectorAll("#filterDDown");
        allDDown.forEach((dDown) => {
          dDown.style.display = "none";
        });
        break;
      }
      case "job": {
        document.querySelector("[data-jobrole]").innerText = value;
        const allDDown = document.querySelectorAll("#filterDDown");
        allDDown.forEach((dDown) => {
          dDown.style.display = "none";
        });
        break;
      }
      case "exp": {
        document.querySelector("[data-experience]").innerText = value;
        const allDDown = document.querySelectorAll("#filterDDown");
        allDDown.forEach((dDown) => {
          dDown.style.display = "none";
        });
        break;
      }
    }
  };

  const getFilteredCandidates = () => {
    const location = document.querySelector("[data-location]").innerHTML;
    const jobrole = document.querySelector("[data-jobrole]").innerHTML;
    let experience = document.querySelector("[data-experience]").innerHTML;

    if (experience === "Select Experience") experience = 0;

    let tempFiltered = [];
    candidates.forEach((candidate) => {
      if (
        candidate.location === location &&
        candidate.experience >= experience
      ) {
        tempFiltered.push(candidate);
      } else if (
        candidate.jobRole === jobrole &&
        candidate.experience >= experience
      ) {
        tempFiltered.push(candidate);
      }
    });
    setFiltered(tempFiltered);
    console.log(location.innerHTML, jobrole.innerHTML, experience.innerHTML);
  };

  const clearResults = () => {
    setFiltered([]);
    document.querySelector("[data-location]").innerHTML = "Select Location";
    document.querySelector("[data-jobrole]").innerHTML = "Select Job Role";
    document.querySelector("[data-experience]").innerHTML = "Select Experience";
  };

  const closeEvalDiv = () => {
    document.querySelector("[data-eval-wrapper]").style.display = "none";
  };

  const openEvalDiv = () => {
    document.querySelector("[data-eval-wrapper]").style.display = "flex";
  };

  useEffect(() => {
    if (!user) navigate("/login");
  }, [filtered]);

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.filters}>
        <div className={styles.filter}>
          <div className={styles.filterInput} data-location>
            Select Location
          </div>
          <div
            className={styles.dArrDiv}
            onClick={() => openFilterDropdown("data-filter-loc")}
          >
            <img
              src={downArrowIcon}
              alt="More"
              className={styles.downArrIcon}
            />
          </div>

          <div
            style={{ display: "none" }}
            className={styles.filterDropdown}
            id="filterDDown"
            data-filter-loc
          >
            <div
              className={styles.filterOption}
              onClick={() => setSelected("loc", "Select Location")}
            >
              Select Location
            </div>
            <div
              className={styles.filterOption}
              onClick={() => setSelected("loc", "New Delhi")}
            >
              New Delhi
            </div>
            <div
              className={styles.filterOption}
              onClick={() => setSelected("loc", "Delhi")}
            >
              Delhi
            </div>
            <div
              className={styles.filterOption}
              onClick={() => setSelected("loc", "Bangalore")}
            >
              Bangalore
            </div>
            <div
              className={styles.filterOption}
              onClick={() => setSelected("loc", "Chandigarh")}
            >
              Chandigarh
            </div>
            <div
              className={styles.filterOption}
              onClick={() => setSelected("loc", "chennai")}
            >
              Chennai
            </div>
            <div
              className={styles.filterOption}
              onClick={() => setSelected("loc", "Lucknow")}
            >
              Lucknow
            </div>
            <div
              className={styles.filterOption}
              onClick={() => setSelected("loc", "Mumbai")}
            >
              Mumbai
            </div>
            <div
              className={styles.filterOption}
              onClick={() => setSelected("loc", "Pune")}
            >
              Pune
            </div>
          </div>
        </div>

        <div className={styles.filter}>
          <div className={styles.filterInput} data-jobrole>
            Select Job Role
          </div>
          <div
            className={styles.dArrDiv}
            onClick={() => openFilterDropdown("data-filter-job")}
          >
            <img
              src={downArrowIcon}
              alt="More"
              className={styles.downArrIcon}
            />
          </div>

          <div
            style={{ display: "none" }}
            className={styles.filterDropdown}
            id="filterDDown"
            data-filter-job
          >
            <div
              className={styles.filterOption}
              onClick={() => setSelected("job", "Select Job Role")}
            >
              Select Job Role
            </div>
            <div
              className={styles.filterOption}
              onClick={() => setSelected("job", "Manager")}
            >
              Manager
            </div>
            <div
              className={styles.filterOption}
              onClick={() => setSelected("job", "Assistant Manager")}
            >
              Assistant Manager
            </div>
            <div
              className={styles.filterOption}
              onClick={() => setSelected("job", "General Manager")}
            >
              General Manager
            </div>
            <div
              className={styles.filterOption}
              onClick={() => setSelected("job", "Associate Manager")}
            >
              Associate Manager
            </div>
            <div
              className={styles.filterOption}
              onClick={() => setSelected("job", "Branch Manager")}
            >
              Branch Manager
            </div>
          </div>
        </div>

        <div className={styles.filter}>
          <div className={styles.filterInput} data-experience>
            Select Experience
          </div>
          <div
            className={styles.dArrDiv}
            onClick={() => openFilterDropdown("data-filter-exp")}
          >
            <img
              src={downArrowIcon}
              alt="More"
              className={styles.downArrIcon}
            />
          </div>

          <div
            style={{ display: "none" }}
            className={styles.filterDropdown}
            id="filterDDown"
            data-filter-exp
          >
            <div className={styles.filterOption}>Select Experience</div>
            {Array.from({ length: 16 / 1 }, (_, i) => (
              <div
                className={styles.filterOption}
                onClick={() => setSelected("exp", i)}
                key={i}
              >
                {i}
              </div>
            ))}
          </div>
        </div>

        <div
          onClick={() => getFilteredCandidates()}
          className={styles.actionBtn}
        >
          Search
        </div>
      </div>

      <div className={styles.clearDiv}>
        <div className={styles.actionBtn} onClick={() => clearResults()}>
          Clear
        </div>
      </div>

      <div className={styles.resultsDiv}>
        <div className={styles.resultHeadings}>
          <div className={styles.resultHeading}>Name</div>
          <hr />
          <div className={styles.resultHeading}>Location</div>
          <hr />
          <div className={styles.resultHeading}>Job Role</div>
          <hr />
          <div className={styles.resultHeading}>Experience</div>
        </div>

        <div className={styles.results}>
          {filtered.length > 0 &&
            filtered.map((candidate, index) => (
              <div className={styles.result} key={index}>
                <div className={styles.resultEntry}>{candidate.name}</div>
                <hr />
                <div className={styles.resultEntry}>{candidate.location}</div>
                <hr />
                <div className={styles.resultEntry}>{candidate.jobRole}</div>
                <hr />
                <div className={styles.resultEntry}>
                  {candidate.experience}
                  {"+ years"}
                </div>
              </div>
            ))}

          {/* <div className={styles.result}>
            <div className={styles.resultEntry}>John Doe</div>
            <hr />
            <div className={styles.resultEntry}>Delhi</div>
            <hr />
            <div className={styles.resultEntry}>General Manager</div>
            <hr />
            <div className={styles.resultEntry}>2+ years</div>
          </div> */}
        </div>
      </div>

      <div className={styles.evalDiv}>
        <div className={styles.actionBtn} onClick={() => openEvalDiv()}>
          Evaluate
        </div>
      </div>

      <div
        style={{ display: "none" }}
        className={styles.evalWrapper}
        data-eval-wrapper
      >
        <div className={styles.evaluationDiv}>
          <div className={styles.resultHeadings}>
            <div className={styles.resultHeading}>Name</div>
            <hr />
            <div className={styles.resultHeading}>Location</div>
            <hr />
            <div className={styles.resultHeading}>Job Role</div>
            <hr />
            <div className={styles.resultHeading}>Experience</div>
          </div>

          <div className={styles.results}>
            {filtered.length > 0 &&
              filtered.map((candidate, index) => (
                <div className={styles.result} key={index}>
                  <div className={styles.resultEntry}>{candidate.name}</div>
                  <hr />
                  <div className={styles.resultEntry}>{candidate.location}</div>
                  <hr />
                  <div className={styles.resultEntry}>{candidate.jobRole}</div>
                  <hr />
                  <div className={styles.resultEntry}>
                    {candidate.experience}
                    {"+ years"}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className={styles.evalDarkBG} onClick={() => closeEvalDiv()} />
      </div>
    </div>
  );
}

export default CSearch;
