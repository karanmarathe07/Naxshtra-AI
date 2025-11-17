import { useState } from 'react';

export default function Model3D() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-full h-full relative">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-10">
          <div className="text-center">
            <div className="text-muted-foreground mb-2">Loading 3D Model...</div>
            <div className="text-sm text-muted-foreground">Please wait while we load your model</div>
          </div>
        </div>
      )}
      <iframe
        src="https://app.vectary.com/p/7APwQn3fR54YRYwsFzX6tD"
        className="w-full h-full border-0 rounded-lg"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        onLoad={() => setIsLoaded(true)}
        title="3D Model Viewer"
      />
    </div>
  );
}
