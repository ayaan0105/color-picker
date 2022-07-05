import Palette from "./components/palette";
import Lists from './components/list';
import {colorPalette} from './seedColors';
import {Route, Switch, useParams, useRouteMatch} from 'react-router-dom';
import SingleColor from "./components/singleColor";
import {generatePalette} from './components/colorHelpers';
import { useState } from "react";
import Custom from './components/custom';


function App() {
  const params = useParams();
  // const {paletteId} = params;
  const match = useRouteMatch();
  const [palet, setPalet] = useState({
    stats:colorPalette});

  console.log(generatePalette(colorPalette[1]));

  function findPalette(id) {
    console.log(id);
    // console.log(palet);
    return palet.stats.find((palette) => {
      return palette.id === id;
    
  });
   
  }

  // function findPalette(id) {
  //   return this.state.palettes.find(function(palette) {
  //     return palette.id === id;
  //   });
  // }

  return (
    <div> 
      <Switch>
      <Route exact path="/palette/custom">
          <Custom />
        </Route>
        <Route path="/" exact>
          <Lists palettess={colorPalette}/>
        </Route>
        <Route 
          exact
          path='/palette/:Id'
          render={props => (
            <Palette palettes={generatePalette(findPalette(props.match.params.Id))}/>
          )}
        />

        <Route  exact path='/palette/:paletteId/:colorId' render={props => (
        <SingleColor palet={generatePalette(findPalette(props.match.params.paletteId))}
        colorId={props.match.params.colorId}/>
           )} 
        />
        

      {/* <Route path="/palette/material-ui-colors" exact>
      <Palette palettes={generatePalette(colorPalette[0])} />
      </Route>
      <Route path="/palette/flat-ui-colors-v1" exact>
      <Palette palettes={generatePalette(colorPalette[1])}/>
      </Route>
      <Route path="/palette/flat-ui-colors-dutch" exact>
      <Palette palettes={generatePalette(colorPalette[2])}/>
      </Route>
      <Route path="/palette/flat-ui-colors-american" exact>
      <Palette palettes={generatePalette(colorPalette[3])}/>
      </Route>
      <Route path="/palette/flat-ui-colors-aussie" exact>
      <Palette palettes={generatePalette(colorPalette[4])}/>
      </Route>
      <Route path="/palette/flat-ui-colors-british" exact>
      <Palette palettes={generatePalette(colorPalette[5])}/>
      </Route>
      <Route path="/palette/flat-ui-colors-spanish" exact>    
      <Palette palettes={generatePalette(colorPalette[6])}/>
      </Route>
      <Route path="/palette/flat-ui-colors-indian" exact>
      <Palette palettes={generatePalette(colorPalette[7])}/>
      </Route>
      <Route path="/palette/flat-ui-colors-french" exact>
      <Palette palettes={generatePalette(colorPalette[8])} />
      </Route> */}
      </Switch>

    </div>
  );
}

export default App;
