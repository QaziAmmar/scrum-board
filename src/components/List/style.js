import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 350px;

  overflow: auto;
  height: 100%;
  padding: 0 15px;
  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

`;

export const AddTaskButton = styled.div`
  
`

export const Header = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 15px;

  .flex-row {
    display: flex;
    align-items: center;
  }


  span {
    width: 30px;
    height: 30px;
    background: #387d7a;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  h1 {
    font-size: 14px;
    color: #333;
  }

  button { 
    
    background-color: #dddf;
    border: none
    color: white; /* White text */
    padding: 6px 8px; /* Some padding */
    font-size: 16px; /* Set a font size */
    border-radius: 5px
  }

  button:hover { 
    background-color: DodgerBlue; /* Blue background */
    color: black;
  }


`;
