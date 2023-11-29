const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">

            <img src={data.place.pic} alt={data.place.name} />
            </div>
        
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>

            <h3>Located in {data.place.city}, {data.place.state}</h3>

            </div>
          
          <div className="col-sm-6">
        
            <h3>Rating</h3>
            <p>Not rated</p>

            </div>
          
          <div className="col-sm-6">

            <h2>Description: </h2>
            <h4>{data.place.showEstablished()}</h4>
            <h5>Serving {data.place.cuisines}</h5>
          
          </div>
            
            <div className="col-sm-6">
              
            <p>Founded: { data.place.founded }</p>
          </div>


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