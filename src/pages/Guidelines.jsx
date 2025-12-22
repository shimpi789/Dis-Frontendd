import React from 'react';
import './Guidelines.css';

const Guidelines = () => {
  return (
    <div className="guidelines-container">
      <h2 className='guidelines-heading'>Disaster Management Guidelines</h2>
      <div className="guidelines-list">
        <div className="guideline-item">
          <h3>Earthquake</h3>
          <p><strong>During:</strong></p>
          <p>
            - Drop, cover, and hold on.<br />
            - Stay indoors until the shaking stops.<br />
            - Move away from windows, mirrors, and heavy furniture.
          </p>
          <p><strong>Preventive Measures:</strong></p>
          <p>
            - Secure heavy furniture and appliances.<br />
            - Practice earthquake drills regularly.<br />
            - Know safe spots indoors (under a table, against a wall).
          </p>
        </div>

        <div className="guideline-item">
          <h3>Flood</h3>
          <p><strong>During:</strong></p>
          <p>
            - Move to higher ground immediately.<br />
            - Avoid walking or driving through floodwaters.<br />
            - Stay away from power lines and electrical equipment.
          </p>
          <p><strong>Preventive Measures:</strong></p>
          <p>
            - Build on higher ground if possible.<br />
            - Install flood alarms or monitoring systems.<br />
            - Create an emergency evacuation plan.
          </p>
        </div>

        <div className="guideline-item">
          <h3>Fire</h3>
          <p><strong>During:</strong></p>
          <p>
            - Get low to avoid smoke inhalation.<br />
            - If your clothes catch fire, stop, drop, and roll.<br />
            - Use a fire extinguisher or call emergency services.
          </p>
          <p><strong>Preventive Measures:</strong></p>
          <p>
            - Install smoke alarms in your home.<br />
            - Store fire extinguishers in accessible locations.<br />
            - Teach everyone in the household fire safety protocols.
          </p>
        </div>

        <div className="guideline-item">
          <h3>Tsunami</h3>
          <p><strong>During:</strong></p>
          <p>
            - Move inland or to higher ground immediately.<br />
            - Stay tuned to emergency alerts.<br />
            - Avoid low-lying coastal areas.
          </p>
          <p><strong>Preventive Measures:</strong></p>
          <p>
            - Know evacuation routes for coastal areas.<br />
            - Do not build structures near the coast.<br />
            - Participate in local tsunami preparedness drills.
          </p>
        </div>

        <div className="guideline-item">
          <h3>Hurricane</h3>
          <p><strong>During:</strong></p>
          <p>
            - Secure your home and windows.<br />
            - Evacuate if instructed by authorities.<br />
            - Stay indoors and away from windows.
          </p>
          <p><strong>Preventive Measures:</strong></p>
          <p>
            - Install storm shutters or board up windows.<br />
            - Keep emergency supplies (food, water, medicine) ready.<br />
            - Monitor local weather reports during hurricane season.
          </p>
        </div>

        <div class="guideline-image">
       <img src="" alt=""/>
    </div>
    </div>
    </div>
  );
};


export default Guidelines;
