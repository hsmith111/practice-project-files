const Graph = require('./Graph.js');

const trainNetwork = new Graph(true, true);

// Create train stations
const losAngeles = trainNetwork.addVertex('Los Angeles');
const sanFrancisco = trainNetwork.addVertex('San Francisco');
const newYork = trainNetwork.addVertex('New York');
const atlanta = trainNetwork.addVertex('Atlanta');
const denver = trainNetwork.addVertex('Denver');
const calgary = trainNetwork.addVertex('Calgary');

// Add edges between San Francisco and Los Angeles
trainNetwork.addEdge(sanFrancisco, losAngeles, 400);
trainNetwork.addEdge(losAngeles, sanFrancisco, 400);

// Add edges between New York and Denver
trainNetwork.addEdge(newYork, denver, 1800);
trainNetwork.addEdge(denver, newYork, 1800);

// Add edges between Calgary and Denver
trainNetwork.addEdge(calgary, denver, 1000);
trainNetwork.addEdge(denver, calgary, 1000);

// Add edges between Los Angeles and Atlanta
trainNetwork.addEdge(losAngeles, atlanta, 2100);
trainNetwork.addEdge(atlanta, losAngeles, 2100);

// Remove route from New York to Denver
trainNetwork.removeEdge(newYork, denver);

// Remove all routes to and from Calgary
trainNetwork.removeEdge(calgary, denver);
trainNetwork.removeEdge(denver, calgary);

// Remove Calgary station
trainNetwork.removeVertex(calgary);

trainNetwork.print();
