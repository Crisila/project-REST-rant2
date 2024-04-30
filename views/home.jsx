const React = require('react');
const Def = require('./default');

function home () {
  return (
    <Def>
      <main>
        <h1>REST-Rant</h1>
        <div>
          <img
            className="home-img"
            src="/images/Passionfruit-waffle.jpg"
            alt="Passionfruit Waffle"
          />
          <div>
            Photo by{" "}
            <a href="https://unsplash.com/@foodfaithfit?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Taylor Kiser
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/baked-pastries-near-butter-on-white-ceramic-plate-N7buN8Lv7uQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = home
