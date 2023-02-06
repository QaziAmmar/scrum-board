import React from "react";

import { Container } from "./style";
import {Link} from "react-router-dom"

export default function Header() {
  return (
    <Container>
      <div className="header">
        <a href="/" className="logo">MLB Scrum Board</a>
        <dir>
          <Link to="/users"><button>Users</button></Link>
          <button>LogOut</button>
        </dir>

      </div>

    </Container>
  );
}
