import React, { Component } from 'react';
import Cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';
import CytoscapeComponent from 'react-cytoscapejs';

import './styles/IokGraph.css'

Cytoscape.use(dagre)

// default elements for test cytoscape
const elements = {
  nodes: [
    { data: { id: 'n0' } },
    { data: { id: 'n1' } },
    { data: { id: 'n2' } },
    { data: { id: 'n3' } },
    { data: { id: 'n4' } },
    { data: { id: 'n5' } },
    { data: { id: 'n6' } },
    { data: { id: 'n7' } },
    { data: { id: 'n8' } },
    { data: { id: 'n9' } },
    { data: { id: 'n10' } },
    { data: { id: 'n11' } },
    { data: { id: 'n12' } },
    { data: { id: 'n13' } },
    { data: { id: 'n14' } },
    { data: { id: 'n15' } },
    { data: { id: 'n16' } }
  ],
  edges: [
    { data: { source: 'n0', target: 'n1' } },
    { data: { source: 'n1', target: 'n2' } },
    { data: { source: 'n1', target: 'n3' } },
    { data: { source: 'n4', target: 'n5' } },
    { data: { source: 'n4', target: 'n6' } },
    { data: { source: 'n6', target: 'n7' } },
    { data: { source: 'n6', target: 'n8' } },
    { data: { source: 'n8', target: 'n9' } },
    { data: { source: 'n8', target: 'n10' } },
    { data: { source: 'n11', target: 'n12' } },
    { data: { source: 'n12', target: 'n13' } },
    { data: { source: 'n13', target: 'n14' } },
    { data: { source: 'n13', target: 'n15' } },
  ]
}

const layout = { name: 'dagre' };

export default class IokGraph extends Component {

  render() {
    return (
      <CytoscapeComponent className="graph" elements={CytoscapeComponent.normalizeElements(elements)} layout={layout} /> 
      // <div className="site-wrapper">
      //   <div className="site-wrapper-inner">
      //     <Split className="split-parent" gutterSize={8} cursor={'col-resize'}>
      //       <div className="split split-horizontal">
      //         <p>HELLO1</p> 
      //         {/* <div className="split text content">
      //           { !userSession.isUserSignedIn() ?
      //             <Signin userSession={userSession} handleSignIn={ this.handleSignIn } />
      //             : <Profile userSession={userSession} handleSignOut={ this.handleSignOut } />
      //           }
      //         </div> */}
      //       </div>

      //       <div className="split split-horizontal">
      //         <p>HELLO2</p>
      //         {/* <CytoscapeComponent className="split content" elements={CytoscapeComponent.normalizeElements(elements)} layout={layout} /> */}
      //       </div>
      //     </Split>
      //   </div>
      // </div>
    );
  }
}