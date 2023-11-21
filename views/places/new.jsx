const React = require('react')
const Def = require('../default')

function new_form() {
  return (
    <Def>
      <main>
        <h1>Add a New Place</h1>
        <form method="POST" action="/places">
          <div>
            <label htmlFor="name">Place Name
            </label>
            <input
              className="form-group"
              id="name"
              name='name'
              required
            />
          </div>

          <div>
            <label htmlFor="pic">Place Picture  
            </label>
            <input
              className="form-group"
              type='url'
              id="pic"
              name='pic'
            />
          </div>

          <div>
            <label htmlFor="city">City
            </label>
            <input
              className="form-group"
              id="city"
              name='city'
            />
          </div>

          <div>
            <label htmlFor="state">State
            </label>
            <input
              className="form-group"
              id="state"
              name='state'
            />
          </div>

          <div>
            <label htmlFor="cuisines">Cuisines
            </label>
            <input
              className="form-group"
              id="cuisines"
              name='cuisines'
              required
            />
          </div>

          <input
            className='btn btn-primary'
            type="submit"
            value="Add Place" />

        </form>
      </main>
    </Def>
  )
}
module.exports = new_form