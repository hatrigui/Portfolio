import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCard from "./CertificationCard";    
import Particle from "../Particle";
import xtreme from "../../Assets/certifications/IEEEXtreme_page-0001.jpg";
import dl from "../../Assets/certifications/Fundamentals of Deep Learning_page-0001.jpg";
import ml from "../../Assets/certifications/Coursera 3SFU5QP3L9HP_page-0001.jpg";
import nlp from "../../Assets/certifications/My Learning _ NVIDIA_page-0001.jpg";



function Certifications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Certifications </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={xtreme}
              isBlog={false}
              title="Xtreme Certification | IEEE Xtreme"
              description="Earned the Xtreme Certification through IEEE Xtreme, a prestigious global coding competition that challenges participants to solve complex algorithmic problems under time constraints. Demonstrated strong problem-solving skills, proficiency in data structures and algorithms, and the ability to work effectively under pressure."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={dl}
              isBlog={false}
              title="Fundamentals of Deep Learning | NVIDIA"
              description="Completed the Fundamentals of Deep Learning course by NVIDIA, gaining hands-on experience with deep learning concepts, neural networks, and model optimization. Developed and trained deep learning models using TensorFlow and PyTorch, applied techniques for image classification and object detection, and explored strategies to enhance model performance. "
              
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={ml}
              isBlog={false}
              title="Supervised Machine Learning: Regression and Classification | Stanford Online (Coursera)"
              description="Successfully completed the Supervised Machine Learning: Regression and Classification course by Andrew Ng, offered through Stanford Online on Coursera. Acquired a strong foundation in linear and logistic regression, gradient descent, and loss functions. Gained hands-on experience with model training, evaluation, and regularization techniques to prevent overfitting. Developed skills in Python, NumPy, and Scikit-Learn for implementing machine learning models."            
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={nlp}
              isBlog={false}
              title="Building Transformer-Based Natural Language Processing Applications | Nvidia"
              description="Successfully completed the Building Transformer-Based NLP Applications course, gaining expertise in transformer architectures such as BERT, GPT, and T5. Learned how to fine-tune pre-trained models for text classification, named entity recognition, and question answering using Hugging Face's Transformers library. Developed hands-on experience in tokenization, attention mechanisms, and transfer learning to build state-of-the-art NLP applications."            
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
