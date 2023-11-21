const React = require("react");
const Def = require("../default");

function edit_form({place, index}) {
  return (
    <Def>
      <main>
        <h1>Edit Place</h1>
        <form method="POST" action={`/places/${index}?_method=PUT`}>
          <div className="row">
          <div className="form-group col-sm-6">
            <label htmlFor="name">Place Name</label>
              <input
                className="form-control"
                id="name"
                name="name"
                value={place.name}
                required />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="pic">Place Picture</label>
              <input
              className="form-group"
              type='url'
              id="pic"
              name='pic'
              value={place.pic} />
          </div>

          </div>


          <div>
            <label htmlFor="city">City
            </label>
            <input
              className="form-group"
              id="city"
              name='city'
              value={place.city}
            />
          </div>

          <div>
            <label htmlFor="state">State
            </label>
            <input
              className="form-group"
              id="state"
              name='state'
              value={place.state}
            />
          </div>

          <div>
            <label htmlFor="cuisines">Cuisines
            </label>
            <input
              className="form-group"
              id="cuisines"
              name='cuisines'
              value={place.cuisines}
            />
          </div>

          <input className='btn btn-primary' type="submit" value="Update Place" />

        </form>
      </main>
    </Def>
  )
}

module.exports = edit_form

