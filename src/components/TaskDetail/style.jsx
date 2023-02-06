import styled from 'styled-components';

export const TaskDetailContainer = styled.div`

.column {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin: 20px;
    padding: 20px;
    box-shadow: 2px 2px 5px gray;
    font: inherit;
    font-family: "Source Sans Pro", Helvetica, sans-serif;
    width: 100%;
  }

  .row {
    width: 100%;
    display: flex;
    margin-bottom: 20px;
    min-width: 18em;
  }

  .justify-between {
    justify-content: space-between;
  }

	textarea {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		background-color: transparent;
		border-radius: 4px;
		border: none;
		border: solid 1px;
		color: inherit;
		display: block;
		outline: 0;
		padding: 0.75rem 1rem;
		text-decoration: none;
    border-color: rgba(0, 0, 0, 0.2);
    font-family: "Source Sans Pro", Helvetica, sans-serif;
		font-size: 1rem;
		font-weight: 300;
		line-height: 1.65;
    width: 100%;
    min-height: 12rem;
	}

  textarea:focus {
    border-color: DodgerBlue;
    box-shadow: 0 0 0 1px #47D3E5;
  }

  .title {
    border: none;
    font-family: Arial, sans-serif;
    font-size: 20px;
    font-weight: medium;
    width: 100%;
  }

  .user-info .userName {
    font-family: Arial, sans-serif;
    font-size: 15;
    padding-right: 5px;
  }
  
  .row .user-info {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
  }
  
  
  .user-info img {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    margin-right: 5px;
  }
  

   .user-info .dueDate {
    font-size: 15px;
     font-weight: bold;
     color: #FF0000;
     text-align: center;
     position: relative;
     }

     .user-info .dueDate:hover { 
      cursor: pointer;
     }

     .user-info .clander-row {
      display: flex;
     }

     .clander-row .calander {
      z-index: 9;
      position: absolute;
      right: 0; /* adjust as needed */
     }

     .clander-row img { 
      width: 20px;
      height: 20px;
      margin: 0px 5px 0px 5px;
     }

     .createdAt {
      font-size: 10px;
      font-weight: medium;
      text-align: center;
      position: relative;
     }

     
    .submitBtn {
      
        background-color: DodgerBlue; /* Blue background */
        border: none
        color: white; /* White text */
        padding: 6px 8px; /* Some padding */
        font-size: 16px; /* Set a font size */
        border-radius: 5px
      
     }

   
     .add-user {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-top: 10px;
   }

   .user-list {
    width: 100%;
   }

     .p-t {
      padding-top: 10px;
     }

    //  User tag Css
    .tag {
      display: inline-block;
      padding: 5px 10px;
      border-radius: 10px;
      background-color: #F9F9F9;
      margin: 5px;
      font-size: 12px;
      
      
    }

    .tag:hover {
        background-color: red;
        color: white;
    }
    
// Drop down Css
     .dropdown {
      position: relative;
    }
    
    .menu {
      position: relative;
    
      list-style-type: none;
      margin: 5px 0;
      padding: 0;
      border: 1px solid grey;
      
    }
    
    .menu > li {
      // margin: 0;
      background-color: white;
    }
    
    .menu > li:hover {
      background-color: lightgray;
    }
    
    .menu > li > button {
      width: 100%;
      height: 100%;
      text-align: left;
    
      background: none;
      color: inherit;
      border: none;
      padding: 5px;
      margin: 0;
      font: inherit;
      cursor: pointer;
    }
    // End Drop down Css

    // add new asignee btn
    .add-img {
      width: 20px;
      height: 20px;
     }
    .add-btn {
      border: none;
      background-color: transparent;
      border-radius: 5px;
      padding: 3px;
    }
    .add-btn:hover {
      background-color: gray;
    }

`;
