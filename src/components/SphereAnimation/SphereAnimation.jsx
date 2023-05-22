import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Sphere = () => {

    const { camera } = useThree();
    camera.position.z = 425;

    const sphereRef = useRef();

    useFrame(() => {
        if (sphereRef.current) {
            sphereRef.current.rotation.y += 0.008;
        }
    });

    const distance = Math.min(200, window.innerWidth / 4);
    const geometry = new THREE.BufferGeometry();

    const vertices = [];
    for (let i = 0; i < 1600; i++) {
        const vertex = new THREE.Vector3();

        const theta = THREE.MathUtils.randFloatSpread(360);
        const phi = THREE.MathUtils.randFloatSpread(360);

        vertex.x = distance * Math.sin(theta) * Math.cos(phi);
        vertex.y = distance * Math.sin(theta) * Math.sin(phi);
        vertex.z = distance * Math.cos(theta);

        vertices.push(vertex.x, vertex.y, vertex.z);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    return (
        <points ref={sphereRef}>
            <bufferGeometry {...geometry} />
            <pointsMaterial color={'#555'} size={3} />
        </points>
    );
};

const SphereAnimation = () => {
    return (
        <>
            <Canvas style={{ width: '100%', height: '100%', zIndex: 900}}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Sphere />
            </Canvas>
        </>

    );
};

export { SphereAnimation };