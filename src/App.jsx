import { useState } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import Module  from "./Module";
import Silah from './images/Silah.jpg';
import At from './images/At.jpg';
import Makbule from './images/Makbule.jpg';
import Trablusgarp from './images/Trablusgarp.jpg';

function App() {
  return (
    <div>
    <div className="titleCustom"><h1>4 Columns were produced using React Props Feature. Used "bulma" as CSS Library</h1></div>
    <div className="columns">
      <div className="column">
      <Module image = {Silah} title = "Cane Gun" 
      description = "1928 - Gazi Mustafa Kemal Atatürk is shooting with the cane-rifle gifted to him at Dolmabahçe Palace. The cane, shaped like a gun that can fire a single bullet, has a black handle and a brown wooden body. It also had a trigger for firing near the handle." />
      </div>

      <div className="column">
      <Module image = {At} title = "Ataturk is riding a horse" 
      description = "Commander Mustafa Kemal Atatürk during the military exercise held near the farm station." />
      </div>

      <div className="column">
      <Module image = {Makbule} title = "Ataturk sent the photo to his sister" 
      description = "The photo signed by Atatürk saying 'To my sister Makbule'" />
      </div>

      <div className="column">
      <Module image = {Trablusgarp} title = "In Tripoli" 
      description = "Staff Major Mustafa Kemal Pasha during the Tripoli War, 1911-12" />
      </div>
</div>
</div>
  );
}

export default App;
