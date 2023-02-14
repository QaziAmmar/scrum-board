import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  border-radius: 3px;
  box-shadow: 0px 2px ${({ isDragging }) => (isDragging ? "15px" : "2px")} 0
    #0002;
  margin-bottom: 15px;
  cursor: grab;
`;

export const Header = styled.div`
  height: 15px;
  background: #3941fa20;
  border-radius: 3px 3px 0 0;
  position: relative;
`;
export const Status = styled.div`
  position: absolute;
  left: 15px;
  top: 10px;
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background: ${({ color }) => color};
`;
export const Content = styled.div`
  padding: 15px;
  

  .title{
    font-size: 14px;
    font-weight: bold;
    line-height: 1.5;
    color: #333;
    padding-bottom: 10px;
  }

  .detail {
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    text-align: justify;
    border-radius: 10px;
    overflow: hidden;
    // limit lies
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
            line-clamp: 2; 
    -webkit-box-orient: vertical;
  }

  .flex-row {
    display: flex;
    align-items: center;
    margin-top: 10px;

  }
  .user {
    font-size: 10px;
    font-weight: regular;
    color: #333;
    text-align: center;
    padding-left: 10px;
  }

  .person-icon{
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

`;
export const Duration = styled.div`
  width: 100%;
  padding: 0px 15px 15px 15px;
  display: inline-flex;
  
  p{
    font-size: 10px;
    font-weight: regular;
    color: #333;
    text-align: center;
    padding-left: 5px;
  }
  .createAt {
    color: green;
  }

  .dueAt {
    padding-top: 5px;
    color: #ea3323;
  }

  .flex-row {
    display: flex;
    justify-content: space-between;
  }
  .flex-row-full {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .pipe {
    height: 30px;
    background-color: #d8d8d8;
    width: 3px;
  }

  .delete-button {
    background-color: #FF4136;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px;
  }
  
  .delete-button:hover {
    background-color: #FF0F0F;
  }

  .trash-icon{
    width: 20px;
    height: 20px;
  }




`;
