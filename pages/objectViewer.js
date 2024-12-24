import { Ruge_Boogie } from 'next/font/google';
import { useEffect, useState } from 'react';

const Viewer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div style={{ textAlign: 'center', backgroundColor: '#fae8ff' }}>
      <div>
        <h1 className='text-black text-3xl font-bold'>3D Model Viewer</h1>
      </div>
      <model-viewer
        src="/models/table.glb"
        alt="3D Model"
        ar
        auto-rotate
        camera-controls
        style={{ width: "100%", height: "500px" }}
      />
    </div>
  );
};

export default Viewer;