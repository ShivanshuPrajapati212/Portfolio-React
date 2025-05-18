import { useEffect, useRef } from "react";

function BackgroundAnimation() {
  const glowRef = useRef(null);
  // Store the current position for smooth animation
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    let animationFrame;
    let target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e) => {
      target = { x: e.clientX, y: e.clientY };
    };

    function animate() {
      // Smoothly interpolate position for delay effect
      pos.current.x += (target.x - pos.current.x) * 0.08;
      pos.current.y += (target.y - pos.current.y) * 0.08;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.current.x - 350}px, ${pos.current.y - 350}px)`;
      }
      animationFrame = requestAnimationFrame(animate);
    }
    window.addEventListener("mousemove", handleMouseMove);
    animationFrame = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      width: "100vw",
      height: "100vh",
      background: "#0a0a0f",
      zIndex: -1,
      overflow: "hidden"
    }}>
      <div
        ref={glowRef}
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(100,116,139,0.2) 0%, rgba(30,41,59,0.08) 80%, transparent 100%)",
          pointerEvents: "none",
          filter: "blur(32px)",
          left: 0,
          top: 0,
          zIndex: -1,
          transition: "background 0.2s"
        }}
      />
    </div>
  );
}

export default BackgroundAnimation;
