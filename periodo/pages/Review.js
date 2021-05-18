import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Review = (props) => {
  const [state, setState] = useState({
    name: "",
    gender: "",
    age: "",
    period: "",
    diet: "",
    cramps: "",
    periodcramps: "",
    sol: "",
    sol1: "",
    final: "",
    sol2: "",
    male: "",
  });

  useEffect(() => {
    const { steps } = props;
    const {
      name,
      gender,
      age,
      period,
      diet,
      cramps,
      periodcramps,
      sol,
      sol1,
      final,
      sol2,
      male,
    } = steps;
    setState({
      name,
      gender,
      age,
      period,
      diet,
      cramps,
      periodcramps,
      sol,
      sol1,
      final,
      sol2,
      male,
    });
  }, [props]);

  const {
    name,
    gender,
    age,
    period,
    diet,
    cramps,
    periodcramps,
    sol,
    sol1,
    final,
    sol2,
    male,
  } = state;
  return (
    <div style={{ width: "100%" }}>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{name.value}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{gender.value}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{age.value}</td>
          </tr>
          <tr>
            <td>Period</td>
            <td>{period.value}</td>
          </tr>
          <tr>
            <td>Diet</td>
            <td>{diet.value}</td>
          </tr>

          <tr>
            <td>Cramps</td>
            <td>{cramps.value}</td>
          </tr>

          <tr>
            <td>PeriodCramps</td>
            <td>{periodcramps.value}</td>
          </tr>

          <tr>
            <td>Sol</td>
            <td>{sol.value}</td>
          </tr>
          <tr>
            <td>Sol1</td>
            <td>{sol1.value}</td>
          </tr>
          <tr>
            <td>Fianl</td>
            <td>{final.value}</td>
          </tr>
          <tr>
            <td>Sol2</td>
            <td>{sol2.value}</td>
          </tr>
          <tr>
            <td>Male</td>
            <td>{male.value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

export default Review;
