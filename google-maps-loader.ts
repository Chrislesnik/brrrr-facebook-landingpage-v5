// Small loader to inject Google Maps JS (Places library) once and reuse it.
// It returns a promise that resolves when the script is loaded.
let loadPromise: Promise<typeof google> | null = null;

export function loadGoogleMaps(apiKey: string): Promise<typeof google> {
  if (typeof window !== "undefined" && (window as any).google?.maps?.places) {
    return Promise.resolve((window as any).google);
  }
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(
      apiKey,
    )}&libraries=places&v=weekly`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve((window as any).google);
    script.onerror = (err) => reject(err);
    document.head.appendChild(script);
  });

  return loadPromise;
}


