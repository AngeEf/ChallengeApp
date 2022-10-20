import React from 'react';
import Members from '../Members/Members';
import Posts from '../Posts/Posts';
import Statistics from '../Statistics/Statistics';

export default function CommunityView() {
  const background = 'https://i.pinimg.com/564x/79/d3/66/79d3667409ad6ee99cfc400bf2a76da1.jpg';
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1 0 75%' }}>
        <img style={{ height: '20rem', width: '100%' }} src="https://i.pinimg.com/564x/79/d3/66/79d3667409ad6ee99cfc400bf2a76da1.jpg" alt="background" />
        <h2 style={{ marginTop: '2rem' }}>Community name</h2>
        <h4 style={{ marginTop: '2rem' }}>A community is a social unit (a group of living things) with commonality such as place, norms, religion, values, customs, or identity. Communities may share a sense of place situated in a given geographical area (e.g. a country, village, town, or neighbourhood) or in virtual space through communication platforms.</h4>
        <div style={{
          display: 'flex', justifyContent: 'space-between', padding: '1rem', marginTop: '2rem', border: '1px solid red',
        }}
        >
          <div style={{ flex: '1 0 70%' }}>
            <Posts />
          </div>
        </div>
        <Statistics />
      </div>
      <div style={{ flex: '1 0 25%', padding: '2rem' }}>
        <Members />
      </div>
    </div>
  );
}
