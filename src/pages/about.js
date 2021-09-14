import React from "react"
import Layout from "../components/Layout"

export default function About() {
  const handleClick = () => window.history.back()

  return (
    <div>
      <Layout>
        <h1>Welcome</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          alias ducimus quam eum? Eveniet quaerat aperiam corrupti, neque
          sapiente, blanditiis ducimus culpa fugiat id, autem tempora eius
          minima dignissimos exercitationem?
        </p>
        <div>
          <button onClick={handleClick}>Go to Index</button>
        </div>
      </Layout>
    </div>
  )
}
