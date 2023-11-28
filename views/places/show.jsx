const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>

        <img src={data.place.pic} alt={data.place.name} />
        
        <h3>Rating</h3>
        <p>No rated</p>

        <h3>Description: </h3>
        <p>{data.place.cuisines} located at {data.place.city}, {data.place.state}, serving { data.place.cuisines }</p>
        
        <p>Founded: { data.place.founded }</p>

      </main>

      <main>
        <div>
          <h3>Comments</h3>
          <p>No comments yet!</p> 
        </div>
      </main>

      <main>
        <a
          href={`/places/${data.place.id}/edit`}
          className="btn btn-primary"> 
          <i class="bi bi-pencil"></i> Edit
        </a>  
        
        <form
          method="POST"
          action={`/places/${data.place.id}?_method=DELETE`}> 
          <button
            type="submit"
            className="btn btn-primary">
            <i class="bi bi-pencil"></i> Delete
          </button>
        </form>     


      </main>

    </Def>
  )
}

module.exports = show;