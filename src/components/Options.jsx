import React, { useState } from 'react'

function Options({ volume, setVolume }) {

  const [currentVolume, setcurrentVolume] = useState(volume);

  const handleChangeVolume = (e) => {
    console.log(e.target.value, typeof setVolume);
    setcurrentVolume(+e.target.value);
    setVolume(+e.target.value);
  }
  //console.log(`  volume=${volume}, curV=${currentVolume} types=${typeof volume}/${typeof currentVolume}`);
  return (
    <div className="row justify-content-between mb-3">
      {/* <form> */}
      <div className="btn-group col-2" role="group" aria-label="Select data volume">
        <input type="radio" className="btn-check" name="vol" id="vol50" checked={currentVolume === 50} value="50"
          onClick={handleChangeVolume}
        />
        <label className="btn btn-outline-primary" htmlFor="vol50">50</label>

        <input type="radio" className="radio btn-check" name="vol" id="vol1000" checked={currentVolume === 1000} value="1000"
          onClick={handleChangeVolume}
        />
        <label className="btn btn-outline-primary" htmlFor="vol1000">1000</label>
      </div>
      <div className="btn-group col-4">
        <input type="text" className="form-control" id="filter" />
        <button type="button" className="btn btn-primary">Найти</button>
      </div>
      {/* </form> */}
    </div>
  )
}

export default Options
