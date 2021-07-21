// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance,Surface,Location} from 'react-360-web';
import { TooltipModule } from "./modules/Tooltip.module";

export let r360;

function init(bundle, parent, options = {}) {
  r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [new TooltipModule()],
    ...options,
  });

  const location = new Location([-5, -3, -9]);

  // Render your app content to the default cylinder surface
  /*r360.renderToSurface(
    r360.createRoot('react360Demo', {}),
    location
    //r360.getDefaultSurface()
  );*/

  // Render your app content to a new flat surface
  const surface = new Surface(500, 600, Surface.SurfaceShape.Flat);
  surface.setAngle(0, 0);
  r360.renderToSurface(
    r360.createRoot('react360Demo', { }),
    surface
  );

  const surface2 = new Surface(200, 200, Surface.SurfaceShape.Flat);
  surface2.setAngle(0.60, -0.1);
  r360.renderToSurface(
    r360.createRoot('Ball1', { }),
    surface2
  );

  /*const location2 = new Location([5, 3, -9]);
  r360.renderToLocation(
    r360.createRoot('Ball1', {
      
    }),
    location2
  );*/

  // Render the model to the location
  
  // Render the model to the location
  r360.renderToLocation(
    r360.createRoot('Model', { /* initial props */ }),
    location
  );
  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
