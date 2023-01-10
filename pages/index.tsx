import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import '@mediapipe/face_detection';
import '@tensorflow/tfjs-core';
// Register WebGL backend.
import '@tensorflow/tfjs-backend-webgl';
import * as faceDetection from '@tensorflow-models/face-detection';

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {

  const model = faceDetection.SupportedModels.MediaPipeFaceDetector;
  const detectorConfig:faceDetection.MediaPipeFaceDetectorTfjsModelConfig = {
    runtime: 'tfjs',
  };
  const detector = await faceDetection.createDetector(model, detectorConfig);
  const estimationConfig = {flipHorizontal: false};
  //const faces = await detector.estimateFaces(image, estimationConfig);


  return (
    <>
      <div className="container">
      <div className="canvas-wrapper">
        <canvas id="output"></canvas>
        <video id="video" playsInline={true} style={{["-webkit-transform" as any]: "scaleX(-1)", "transform": "scaleX(-1)", "visibility": "hidden", "width": "auto", "height": "auto"}}>
        </video>
      </div>
    </div>
    </>
  )
}
