import { compile, morph } from 'svg-path-morph'
import { useState, useEffect, useRef } from 'react'

function AnimatedWaves2() {
  const d1 = "M0 73L18.8 71C37.7 69 75.3 65 112.8 61C150.3 57 187.7 53 225.2 51C262.7 49 300.3 49 337.8 50C375.3 51 412.7 53 450.2 57C487.7 61 525.3 67 562.8 73C600.3 79 637.7 85 675.2 81C712.7 77 750.3 63 787.8 61C825.3 59 862.7 69 881.3 74L900 79L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z";
  const d2 = "M0 193L18.8 184C37.7 175 75.3 157 112.8 161C150.3 165 187.7 191 225.2 205C262.7 219 300.3 221 337.8 210C375.3 199 412.7 175 450.2 164C487.7 153 525.3 155 562.8 154C600.3 153 637.7 149 675.2 147C712.7 145 750.3 145 787.8 143C825.3 141 862.7 137 881.3 135L900 133L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z";

  const compiled = compile([d1, d2]);
  const [interpolation, setInterpolation] = useState([0.2, 0.8]);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    let animationFrameId: number;
    const update = () => {
      setInterpolation((prev) => {
        const newValues = prev.map((v, i) => v + (i === 0 ? 0.002 * direction : -0.002 * direction));
        if (newValues[0] >= 0.8 || newValues[0] <= 0.2) {
          setDirection((d) => -d); // Reverse direction
        }
        return newValues;
      });
      animationFrameId = requestAnimationFrame(update);
    };
    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, [direction]);

  const morphed = morph(compiled, interpolation);

  return (
    <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
      <path id="g1wave1" d={morphed} fill="#6c4116"></path>
    </svg>
  );
}

export default AnimatedWaves2;
