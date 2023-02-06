import styled from "styled-components";

export const Container = styled.div`
  background-color: dodgerblue;
  padding: 0 0px;
  height: 80px;
  box-shadow: 0 2px 2px 0 #0003;

  display: flex;
  align-items: center;

  h1 {
    color: #fff;
    font-weight: 500;
  }

  .header {
    display: flex;
    background-color: dodgerblue;
    padding: 20px 0px;
    width: 100%;
    justify-content: space-between;
  }
  
  /* Style the header links */
  .header a {
    float: left;
    color: black;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;
    padding-left: 15px;
    color: white;
  }
  
  /* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */
  .header a.logo {
    font-size: 25px;
    font-weight: bold;
  }
  
  /* Change the background color on mouse-over */
  .header button {
    background-color: #e7e7e7; /* Green */
    border: none;
    color: black;
    padding: 10px 20px;
    margin-right: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }

  .header button:hover {
    background-color: #dddf;
    color: black;
  }
  
  

`;
