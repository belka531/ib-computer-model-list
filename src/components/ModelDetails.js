import * as React from 'react';

export default function ModelDetails(props) {
  const computers = props.computers;
  return (<div>
    {computers.map((computer, i) => 
      <ul key={i}>
        <li>name: {computer.name}</li>
        <li>manufacturer: {computer.manufacturer}</li>
        <li>year: {computer.year}</li>
        <li>origin: {computer.origin}</li>
      </ul>
    )}
  </div>);
}