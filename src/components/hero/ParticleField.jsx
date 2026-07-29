import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sparkles, Float, Icosahedron } from '@react-three/drei'
import { useIsMobile, usePrefersReducedMotion } from '../../hooks/useMediaQuery.js'

function Dust({ count }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14
      arr[i * 3 + 1] = (Math.random() - 0.5) * 9
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    return arr
  }, [count])

  const ref = useRef(null)

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#7cf3f7"
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  )
}

function CoreShape({ animate }) {
  const ref = useRef(null)

  useFrame(({ pointer }, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * (animate ? 0.15 : 0)
    ref.current.rotation.x += delta * (animate ? 0.06 : 0)
    const targetX = pointer.y * 0.25
    const targetY = pointer.x * 0.35
    ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.02
    ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.02
  })

  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.8}>
      <Icosahedron ref={ref} args={[1.6, 1]}>
        <meshBasicMaterial color="#3b6bff" wireframe transparent opacity={0.45} />
      </Icosahedron>
    </Float>
  )
}

function Scene({ isMobile, animate }) {
  return (
    <>
      <color attach="background" args={['#05050a']} />
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 3, 4]} intensity={40} color="#22e5ec" />
      <pointLight position={[-4, -2, -3]} intensity={30} color="#a855f7" />
      <CoreShape animate={animate} />
      <Dust count={isMobile ? 220 : 550} />
      <Sparkles
        count={isMobile ? 25 : 70}
        scale={[10, 6, 6]}
        size={2.4}
        speed={0.3}
        color="#6c8dff"
        opacity={0.6}
      />
    </>
  )
}

export default function ParticleField() {
  const isMobile = useIsMobile()
  const reducedMotion = usePrefersReducedMotion()

  return (
    <Canvas
      dpr={[1, isMobile ? 1.5 : 2]}
      gl={{ antialias: false, alpha: false, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 6], fov: 45 }}
      frameloop={reducedMotion ? 'demand' : 'always'}
      className="!absolute inset-0"
    >
      <Scene isMobile={isMobile} animate={!reducedMotion} />
    </Canvas>
  )
}
