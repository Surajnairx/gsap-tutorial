import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const GsapTimeline = () => {
  const tl = useRef();

  useGSAP(() => {
    tl.current = gsap.timeline({
      repeat: -1,
      yoyo: true,
      repeatDelay: 1,
    });

    tl.current
      .to("#yellow-box", {
        x: 250,
        rotation: 360,
        duration: 2,
        ease: "power1.inOut",
      })
      .to("#yellow-box", {
        y: 200,
        rotation: 0,
        duration: 2,
        ease: "power1.inOut",
      })
      .to("#yellow-box", {
        x: 0,
        rotation: -360,
        duration: 2,
        ease: "power1.inOut",
      })
      .to("#yellow-box", {
        y: 0,
        rotation: 0,
        duration: 2,
        ease: "power1.inOut",
      });
  }, []);

  return (
    <main>
      <h1>GsapTimeline</h1>

      <div className="mt-20 space-y-10">
        <button
          onClick={() => {
            if (tl.current.paused()) {
              tl.current.play();
            } else {
              tl.current.pause();
            }
          }}
        >
          Play/Pause
        </button>

        <div
          id="yellow-box"
          className="w-20 h-20 bg-yellow-500 rounded-lg"
        />
      </div>
    </main>
  );
};

export default GsapTimeline;