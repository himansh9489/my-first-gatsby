import React from "react"
import { Link } from "gatsby"

export default function NavBar() {
  return (
    <nav>
      <div>
        <h1>TheAnimeList</h1>
      </div>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Project </Link>
      </div>
    </nav>
  )
}
