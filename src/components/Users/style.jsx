import styled from "styled-components";

export const UserCSS = styled.div`
.customers {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 98%;
  }
  
  .customers td, .customers th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  

  .customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #000000;
    color: white;
  }

  // flex setting

  .column {
    display: flex;
  }

  .flex-right {
    display: flex;
    justify-content: right;
    padding-top: 12px;
  }

  .flex-half {
    display: flex;
    width: 50%
    flex-direction: column;
    align-items: center;
  }
  // flex setting end

  // form setting
  .form {
    width: 50%;
  }

  //  input field setting 
input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #00000;
}
  




  .glow-on-hover {
    width: 220px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}

.glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.glow-on-hover:active:after {
    background: transparent;
}

.glow-on-hover:hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}

.del-btn {
  margin: 3px
}


`;
