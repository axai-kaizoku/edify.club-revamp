"use client"
import { Html, OrbitControls, useProgress } from "@react-three/drei"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import React, { Suspense, useRef, useState, useEffect } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import * as THREE from "three"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { GreenTick } from "./icons"

// ✅ Loader Component
const Loader = () => {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="text-white text-lg font-semibold">
        {progress.toFixed(0)}% Loading...
      </div>
    </Html>
  )
}

// ✅ 3D Model Component
const Model = ({ targetRotation }: { targetRotation: THREE.Vector3 }) => {
  const gltf = useLoader(GLTFLoader, "/macbook_pro_m3_16_inch_2024.glb")
  const modelRef = useRef<THREE.Group>(null)
  const controlsRef = useRef<any>(null)

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = THREE.MathUtils.lerp(
        modelRef.current.rotation.y,
        targetRotation.y,
        0.1
      )
    }
    if (controlsRef.current) {
      controlsRef.current.target.lerp(targetRotation, 0.1)
      controlsRef.current.update()
    }
  })

  return (
    <>
      <primitive
        ref={modelRef}
        object={gltf.scene}
        position={[0, -20, 0]}
        scale={[3, 3, 3]}
      />
      <OrbitControls
        ref={controlsRef}
        target={[0, 1, 0]}
        maxPolarAngle={Math.PI / 2}
        enableZoom
        enableDamping
        dampingFactor={0.1}
      />
    </>
  )
}

const Refurbishment = () => {
  const [cameraPosition, setCameraPosition] = useState(
    new THREE.Vector3(0, 50, 150)
  )
  const [mobileVersion, setMobileVersion] = useState<"vertical" | "horizontal">(
    "vertical"
  )
  useEffect(() => {
    const handleResize = () => {
      setMobileVersion(window.innerWidth < 640 ? "horizontal" : "vertical")
    }
    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])
  const [targetRotation, setTargetRotation] = useState(
    new THREE.Vector3(0, 0, 0)
  )
  const [fov, setFov] = useState(50)
  const [lightPosition, setLightPosition] = useState(
    new THREE.Vector3(10, 20, 15)
  )

  const cameraRef = useRef<any>(null)
  const lightRef = useRef<any>(null)

  const handleViewChange = (view: string) => {
    switch (view) {
      case "keyboard":
        setCameraPosition(new THREE.Vector3(0, 70, 40))
        setTargetRotation(new THREE.Vector3(-Math.PI / 2, 0, 0))
        setFov(70)
        setLightPosition(new THREE.Vector3(0, 80, 40))
        break
      case "trackpad":
        setCameraPosition(new THREE.Vector3(0, 50, 40))
        setTargetRotation(new THREE.Vector3(-Math.PI / 3, 0, 0))
        setFov(65)
        setLightPosition(new THREE.Vector3(0, 60, 40))
        break
      case "port":
        setCameraPosition(new THREE.Vector3(100, 40, 0))
        setTargetRotation(new THREE.Vector3(0, Math.PI / 2, 0))
        setFov(60)
        setLightPosition(new THREE.Vector3(120, 50, 0))
        break
      case "charger":
        setCameraPosition(new THREE.Vector3(-100, 40, 0))
        setTargetRotation(new THREE.Vector3(0, -Math.PI / 2, 0))
        setFov(60)
        setLightPosition(new THREE.Vector3(-120, 50, 0))
        break
      case "back_panel":
        setCameraPosition(new THREE.Vector3(0, 0, -10))
        setTargetRotation(new THREE.Vector3(0, Math.PI, 0))
        setFov(55)
        setLightPosition(new THREE.Vector3(10, 10, 10))
        break
      case "front":
        setCameraPosition(new THREE.Vector3(0, 50, 120))
        setTargetRotation(new THREE.Vector3(0, 0, 0))
        setFov(50)
        setLightPosition(new THREE.Vector3(0, 50, 30))
        break
      default:
        setCameraPosition(new THREE.Vector3(0, 50, 150))
        setTargetRotation(new THREE.Vector3(0, 0, 0))
        setFov(50)
        setLightPosition(new THREE.Vector3(10, 20, 15))
    }
  }

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.position.lerp(cameraPosition, 0.1)
      cameraRef.current.updateProjectionMatrix()
    }
    if (lightRef.current) {
      lightRef.current.position.lerp(lightPosition, 0.1)
    }
  }, [cameraPosition, lightPosition])

  const items = [
    { name: "Keyboard", key: "keyboard" },
    { name: "Port", key: "port" },
    { name: "Trackpad", key: "trackpad" },
    { name: "Charger", key: "charger" },
    { name: "Front Panel", key: "front" },
    { name: "Back Panel", key: "back_panel" },
  ]

  return (
    <div className="flex sm:items-center w-full flex-col  gap-6">
      <div className="space-y-2">
        <h1 className="text-2xl text-center xl:text-5xl leading-10 font-orange">
          40 Step Refurbishment{" "}
        </h1>
        <p className="sm:block hidden text-center font-gilroyMedium text-2xl/10">
          Our laptops go under intense 40 step certification
        </p>
      </div>

      <div className="flex rounded-[25px] w-full xl:h-[60%] xl:w-[70%] gap-6 flex-col sm:flex-row bg-[#F0F0F0] xl:pl-32 p-8">
        <div className="xl:mt-20 ">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            orientation={mobileVersion}
            className="w-full sm:max-w-xs "
          >
            <CarouselContent className="  sm:h-[288px] ">
              {items.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="sm:pt-1  sm:basis-1 text-nowrap"
                >
                  <div
                    key={item.key}
                    className="flex flex-col font-gilroySemiBold "
                  >
                    <p
                      className="cursor-pointer justify-center sm:justify-start items-center flex gap-2 p-3 text-lg xl:text-xl"
                      onClick={() => handleViewChange(item.key)}
                    >
                      <GreenTick />
                      {item.name}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="w-full sm:w-[70%] md:w-full ">
          <Canvas
            camera={{
              fov,
              position: cameraPosition.toArray(),
            }}
            shadows
          >
            <Suspense fallback={<Loader />}>
              <ambientLight intensity={1.2} />
              <directionalLight
                ref={lightRef}
                position={lightPosition.toArray()}
                intensity={9.0}
                castShadow
              />
              <spotLight
                position={[0, 20, -10]}
                angle={0.3}
                intensity={1.5}
                castShadow
              />
              <Model targetRotation={targetRotation} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  )
}

export default Refurbishment
