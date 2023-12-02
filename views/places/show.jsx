const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! ' : 'Rave! '}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong> - {c.author}</strong>
          </h3>
          <h4>Rating: { c.stars }</h4>
        </div>
      )
    })
  }
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">

            <img src={data.place.pic} alt={data.place.name} />
          </div>
        
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
            <h3>Rating</h3>
            <p>Not rated</p>

          </div>
          
          <div className="col-sm-6">
        

            <h3>Located in {data.place.city}, {data.place.state}</h3>

           </div>
          
          <div className="col-sm-6">

            <h2>Description: </h2>
            <h4>{data.place.showEstablished()}</h4>
            <h5>Serving {data.place.cuisines}</h5>
          
          </div>
            
            <div className="col-sm-6">
            <p>Founded: { data.place.founded }</p>
          </div>

          <div className="col-sm-6">

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


        </div>




        </div>
      </main>
      
      

      <main>
            <h3>Comments</h3>
            {comments}

      </main>
      

    </Def>
  )
}

module.exports = show;