// NetworkSphere.tsx

import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Html } from "@react-three/drei";
import { useRef, useMemo } from "react";

const links = [
  { label: " ", url: "#power" },
  { label: " ", url: "#mastery" },
  { label: " ", url: "#performance" },
  { label: " ", url: "#precision" },
];

function SphereNetwork() {
  const groupRef = useRef<any>();

  const points = useMemo(() => {
    const pts = [];
    const radius = 3;

    for (let i = 0; i < 150; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 100;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      pts.push({
        position: [x, y, z] as [number, number, number],
        isLink: i < links.length,
        link: links[i],
      });
    }

    return pts;
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0035;
      groupRef.current.rotation.x += 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {points.map((p, i) => (
        <group key={i}>
          <Line
            points={[[20, 20, 20], p.position]}
            color={p.isLink ? "#ffffffff" : "#fbfbfbff"}
            lineWidth={p.isLink ? 5 : 1.2}
            transparent
            opacity={p.isLink ? 0.15 : 0.15}
          />

          <mesh position={p.position}>
            <boxGeometry
              args={p.isLink ? [0.07, 0.08, 0.07] : [0.005, 0.06, 0.06]}
            />
            <meshBasicMaterial
              color={p.isLink ? "#ffd1663a" : "#edaa1929"}
            />
          </mesh>

          {p.isLink && p.link && (
            <Html position={p.position}>
              <a
                href={p.link.url}
                className="
                  text-xs font-semibold tracking-wide
                  text-orange-300 hover:text-yellow-200
                  drop-shadow-[0_0_10px_rgba(255,120,20,0.9)]
                  transition
                  whitespace-nowrap
                "
              >
                {p.link.label}
              </a>
            </Html>
          )}
        </group>
      ))}
    </group>
  );
}

export default function NetworkSphere() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 90 }}>
        <ambientLight intensity={0.9} />
        <SphereNetwork />
      </Canvas>
    </div>
  );
}