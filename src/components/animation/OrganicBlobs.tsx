"use client";

export default function OrganicBlobs() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      {/* Blob 1 - Large top-right */}
      <div
        className="floating-shape"
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
          background:
            "radial-gradient(ellipse at center, rgba(13, 148, 136, 0.08) 0%, rgba(13, 148, 136, 0.02) 70%, transparent 100%)",
          filter: "blur(60px)",
          animation: "float 6s ease-in-out infinite",
          animationDelay: "0s",
        }}
      />

      {/* Blob 2 - Medium bottom-left */}
      <div
        className="floating-shape"
        style={{
          position: "absolute",
          bottom: "-15%",
          left: "-8%",
          width: "400px",
          height: "400px",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          background:
            "radial-gradient(ellipse at center, rgba(8, 145, 178, 0.07) 0%, rgba(8, 145, 178, 0.02) 70%, transparent 100%)",
          filter: "blur(50px)",
          animation: "float 6s ease-in-out infinite",
          animationDelay: "-2s",
        }}
      />

      {/* Blob 3 - Small center-left */}
      <div
        className="floating-shape"
        style={{
          position: "absolute",
          top: "40%",
          left: "20%",
          width: "300px",
          height: "300px",
          borderRadius: "50% 60% 40% 50% / 50% 40% 60% 50%",
          background:
            "radial-gradient(ellipse at center, rgba(15, 118, 110, 0.06) 0%, rgba(15, 118, 110, 0.01) 70%, transparent 100%)",
          filter: "blur(40px)",
          animation: "float 6s ease-in-out infinite",
          animationDelay: "-4s",
        }}
      />
    </div>
  );
}
