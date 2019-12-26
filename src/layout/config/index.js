// general default options for force-directed layout
// {
//   animate: true, // whether to show the layout as it's running; special 'end' value makes the layout animate like a discrete layout
//   maxIterations: 100, // max iterations before the layout will bail out
//   maxSimulationTime: 8000, // max length in ms to run the layout
//   ungrabifyWhileSimulating: false, // so you can't drag nodes during layout
//   fit: false, // on every layout reposition of nodes, fit the viewport
//   padding: 30, // padding around the simulation
//   boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
//   alpha: 1, // sets the current alpha to the specified number in the range [0,1]
//   alphaMin: 0.001, // sets the minimum alpha to the specified number in the range [0,1]
//   alphaDecay: 1 - Math.pow(0.001, 1 / 300), // sets the alpha decay rate to the specified number in the range [0,1]
//   alphaTarget: 0, // sets the current target alpha to the specified number in the range [0,1]
//   velocityDecay: 0.4, // sets the velocity decay factor to the specified number in the range [0,1]
//   collideRadius: 1, // sets the radius accessor to the specified number or function
//   collideStrength: 0.7, // sets the force strength to the specified number in the range [0,1]
//   collideIterations: 1, // sets the number of iterations per application to the specified number
//   linkId: function id(d) {
//     return d.id;
//   }, // sets the node id accessor to the specified function
//   linkDistance: 100, // sets the distance accessor to the specified number or function
//   linkStrength: function strength(link) {
//     return 1 / Math.min(count(link.source), count(link.target));
//   }, // sets the strength accessor to the specified number or function
//   linkIterations: 1, // sets the number of iterations per application to the specified number
//   manyBodyStrength: -800, // sets the strength accessor to the specified number or function
//   manyBodyTheta: 0.9, // sets the Barnes–Hut approximation criterion to the specified number
//   manyBodyDistanceMin: 1, // sets the minimum distance between nodes over which this force is considered
//   manyBodyDistanceMax: Infinity, // sets the maximum distance between nodes over which this force is considered
//   xStrength: 0.1, // sets the strength accessor to the specified number or function
//   xX: 0, // sets the x-coordinate accessor to the specified number or function
//   yStrength: 0.1, // sets the strength accessor to the specified number or function
//   yY: 0, // sets the y-coordinate accessor to the specified number or function
//   radialStrength: 0.1, // sets the strength accessor to the specified number or function
//   radialRadius: // sets the circle radius to the specified number or function
//   radialX: 0, // sets the x-coordinate of the circle center to the specified number
//   radialY: 0, // sets the y-coordinate of the circle center to the specified number
//   // layout event callbacks
//   ready: function(){}, // on layoutready
//   stop: function(){}, // on layoutstop
//   tick: function(progress) {
//     console.log('progress - ', progress);
//   },
//   // positioning options
//   randomize: false, // use random node positions at beginning of layout
  
//   // infinite layout options
//   infinite: true // overrides all other options for a forces-all-the-time mode
// }
module.exports = Object.freeze({
  animate: true,
  linkId: function id(d) {
    return d.id;
  },
  linkDistance: 100,
  maxSimulationTime: 800,
  manyBodyStrength: -300,
  ready: function(){},
  stop: function(){},
  tick: function(progress) {
    console.log('progress - ', progress);
  },
  randomize: true,
  infinite: true
});
