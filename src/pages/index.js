import React from "react"
import Counter from "../components/Counter"
import Layout from "../components/Layout"
export default function Home() {
  console.log("hello")
  return (
    <div>
      <Layout>
        <h1>Welcome Home</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus{" "}
          <br />
          est dicta optio possimus quibusdam illo accusantium recusandae
          delectus <br />
          suscipit nostrum rem, consectetur cupiditate dolorum praesentium{" "}
          <br />
          dolorem, hic nemo enim error.
        </p>
        {/* <Counter />
        <Counter start={10} /> */}
        <div>
          <button
            onClick={() => {
              window.location.assign("/about/")
            }}
          >
            Go to about
          </button>
        </div>
      </Layout>
    </div>
  )
}
