const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <h1>({data.place.name})</h1>
        
        <h3>Rating</h3>
        <p>No rated</p>

        <h3>Description</h3>
        <p>Location and Cuisine</p>

      </main>

      <main>
        <div>
          <h3>Comments</h3>
          <p>No comments yet!</p> 
        </div>
      </main>

    </Def>
  )
}

module.exports = show;