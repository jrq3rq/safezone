import React, { useState } from 'react';
import '../styles/Frequencies.css';

const Frequencies = () => {
  const freqData = [
    {
      hz: 174,
      effect: 'Pain relief, stress reduction',
      uses: 'Used in sound baths to promote relaxation and reduce physical discomfort.',
      benefits: 'Lowers stress hormones, eases muscle tension, and supports emotional calm.',
    },
    {
      hz: 285,
      effect: 'Healing, tissue regeneration',
      uses: 'Applied in energy healing to restore cellular balance and vitality.',
      benefits: 'May enhance cellular repair and boost the body’s natural healing processes.',
    },
    {
      hz: 396,
      effect: 'Liberate guilt, fear',
      uses: 'Used in meditation to release negative emotions and promote grounding.',
      benefits: 'Reduces anxiety, fosters emotional freedom, and enhances inner peace.',
    },
    {
      hz: 417,
      effect: 'Facilitate change, clear negativity',
      uses: 'Integrated in therapy to break old patterns and support transformation.',
      benefits: 'Clears emotional blockages, encourages adaptability, and uplifts mood.',
    },
    {
      hz: 528,
      effect: 'Transformation, DNA repair',
      uses: 'Known as the "love frequency," used in music for healing and positivity.',
      benefits: 'Promotes emotional healing, may influence cellular processes positively.',
    },
    {
      hz: 639,
      effect: 'Improve relationships, communication',
      uses: 'Used in group meditations to foster harmony and emotional connection.',
      benefits: 'Enhances empathy, improves interpersonal dynamics, and reduces conflict.',
    },
    {
      hz: 741,
      effect: 'Awaken intuition, expression',
      uses: 'Applied in creative therapies to boost self-expression and clarity.',
      benefits: 'Stimulates intuition, enhances problem-solving, and supports authenticity.',
    },
    {
      hz: 852,
      effect: 'Spiritual order, awareness',
      uses: 'Used in spiritual practices to align with higher consciousness.',
      benefits: 'Increases spiritual awareness, sharpens mental clarity, and fosters insight.',
    },
    {
      hz: 963,
      effect: 'Divine connection, enlightenment',
      uses: 'Known as the "frequency of the gods," used for deep meditation.',
      benefits: 'Connects to universal energy, promotes enlightenment, and deepens spirituality.',
    },
  ];

  const [selectedFreq, setSelectedFreq] = useState(null);

  const toggleFrequency = (index) => {
    setSelectedFreq(selectedFreq === index ? null : index);
  };

  return (
    <div className="frequencies-container slide">
      <h1 className="frequencies-title">Explore Solfeggio Frequencies</h1>
      <div className="frequency-list">
        {freqData.map((freq, index) => (
          <div key={freq.hz} className="frequency-item">
            <button className="frequency-header" onClick={() => toggleFrequency(index)}>
              <span>{freq.hz} Hz - {freq.effect}</span>
              <span className="arrow">{selectedFreq === index ? '▲' : '▼'}</span>
            </button>
            {selectedFreq === index && (
              <div className="frequency-details">
                <p><strong>Effect:</strong> {freq.effect}</p>
                <p><strong>Uses:</strong> {freq.uses}</p>
                <p><strong>Health Benefits:</strong> {freq.benefits}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frequencies;