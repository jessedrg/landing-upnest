export default function VideoHero() {
  return (
    <section className="video-hero" aria-label="Upnest">
      <video
        className="video-hero-media"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        aria-label="Upnest introduction"
      >
        <source src="/videos/upnestportrait.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
