import React from 'react'

export default function list() {
  return (
    <div>
      <ul style={{listStyle: 'none', display: 'flex', gap: '20px'}}>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
    </div>
  );
}
