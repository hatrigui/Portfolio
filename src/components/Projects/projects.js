import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mhi from "../../Assets/Projects/mhi.png";
import electrode from "../../Assets/Projects/electrode.jpg";
import lr from "../../Assets/Projects/Lipreading.png";
import eeg from "../../Assets/Projects/eeg.png";
import qc from "../../Assets/Projects/QC.png";
import Banker from "../../Assets/Projects/Banker.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Banker}
              isBlog={false}
              title="Banker: Loan Prediction and Monitoring System"
              description="Banker is a Big Data application that uses machine learning models like XGBoost, CatBoost, and Random Forest to predict loan approval statuses. It integrates Apache Spark for scalable data processing and the ELK Stack (Elasticsearch, Logstash, Kibana) for data storage and visualization. The system features a web app with an Angular frontend and Flask API backend, allowing users to upload data, select models, and visualize loan predictions. The dataset consists of 45,000 entries with features such as age, income, and credit history. Banker enables managers to make data-driven decisions and track loan trends efficiently."
              ghLink="https://github.com/hatrigui/Banker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qc}
              isBlog={false}
              title="Questions Classification"
              description="This project compares classical machine learning methods (TF-IDF, BOW, Word2Vec + Logistic Regression, XGBoost, SVM), deep learning models (LSTM with GloVe embeddings), and transformer-based architectures (BERT) for classifying questions from the TREC Dataset. The dataset contains 6 coarse classes (e.g., DESCRIPTION, LOCATION) and 50 fine-grained classes (e.g., DESC:manner, LOC:city). The goal is to evaluate the effectiveness of each approach in addressing challenges like class imbalance and overfitting. Classical models achieved the best accuracy (81%), while deep learning and transformer models showed potential for future improvements."
              ghLink="https://github.com/hatrigui/QuestionsClassification"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lr}
              isBlog={false}
              title="LipReading"
              description="The project explores the evolution of lip reading techniques, from traditional methods to deep learning innovations like LipNet. Traditional methods, evaluated using the MIRACL-VC1 dataset, involved hand-engineered features like HOG (Histogram of Oriented Gradients) and SVM classifiers, achieving up to 47.65% accuracy. Deep learning methods, such as VGG16 + LSTM and LipNet (trained on the GRID Corpus), improved results significantly, with LipNet achieving 86% accuracy. This research aims to advance lip reading systems for medical applications, multilingual models, and efficient deployment."
              ghLink="https://github.com/hatrigui/LipReading"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mhi}
              isBlog={false}
              title="IEEE TSYP 11 Challenge | Understanding Student Well-being"
              description="This project involved designing a survey to analyze student well-being, covering mental health, physical health, social relationships, emotional resilience, and academic performance. We analyzed responses using statistical methods like k-means clustering and the RAKE algorithm, identifying key trends like stress factors and correlations between health and academic outcomes. Based on these insights, we developed a React JS platform with personalized profiles, a confidential communication channel, a mental health chatbot, and a podcast library. The platform aimed to provide actionable support and recommended institutional reforms to improve student well-being."
              ghLink="https://github.com/hatrigui/TSYP-11-SMC-Edoc-challenge"
              demoLink="https://drive.google.com/drive/u/0/folders/1zr_U5AC9urz0ff4dJ9kRyTk1QNeeM4a4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eeg}
              isBlog={false}
              title="EEG-Based Seizure Detection"
              description="This project classifies EEG signals for epileptic seizure detection using machine learning techniques. Using the Bonn University EEG Dataset, we applied DWT, PCA, and SVM to achieve high performance. The best results were obtained with the Daubechies (db4) wavelet and 50 PCA components, yielding an accuracy of ~95%. This approach is a reliable framework for automated seizure detection, with potential for real-time clinical applications."
              ghLink="https://github.com/hatrigui/EEG-Signal-Classification"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={electrode}
              isBlog={false}
              title="Plasma Torch Electrode Detection and Tracking System"
              description="This project developed a deep learning-based system for detecting and tracking electrodes in a plasma torch under extreme conditions. Using YOLOv8 for detection and Kalman Filters for tracking, the system achieved high precision (~1.0) and an F1-score (~0.74). Preprocessing included Gaussian blur, Otsu thresholding, contour detection, bounding boxes, and YOLO-format normalization for normal conditions, and negative transformation, contrast adjustment, and thresholding for plasma conditions. Challenges like occlusions, noise sensitivity, and electrode erosion were addressed with improvements like DeepSORT for better tracking."
              ghLink="https://github.com/hatrigui/ElectrodesDetection-Tracking"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
