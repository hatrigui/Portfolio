import React, { useState, useRef } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/CV_English.pdf";
import emailjs from "emailjs-com";

function ResumeNew() {
  const formRef = useRef();  // ✅ Move here
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle change for form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Environment Variables:", process.env);
    console.log("Service ID:", process.env.REACT_APP_EMAILJS_SERVICE_ID);
    console.log("Template ID:", process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
    console.log("Public Key:", process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

    if (!process.env.REACT_APP_EMAILJS_SERVICE_ID || 
        !process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 
        !process.env.REACT_APP_EMAILJS_PUBLIC_KEY) {
      alert("EmailJS environment variables are missing. Check your .env file.");
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="resume-section" style={{ position: "relative", minHeight: "100vh" }}>
      <Particle />

      <Container fluid style={{
        position: "relative",
        zIndex: 2,
        height: "100%",
        padding: "2rem 0",
        overflowX: "hidden"
      }}>
        <Row style={{ justifyContent: "center", padding: "20px 0" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row style={{ justifyContent: "center", textAlign: "center", padding: "0px 0" }}>
  <h5 style={{ color: "white", fontWeight: "normal" }}>
    For business projects, please contact me using the form below.
  </h5>
</Row>
        {/* Contact Form */}
        <Row className="contact-form" style={{ 
          justifyContent: "center", 
          padding: "50px 15px",
        }}>
          <Form 
            ref={formRef} onSubmit={handleSubmit} 
            style={{ 
              maxWidth: "600px", 
              width: "100%",
              backgroundColor: "rgba(41, 41, 77, 0.9)",
              borderRadius: "8px",
              padding: "20px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" 
            }}
          >
            <Form.Group controlId="formName" style={{ marginBottom: "1rem" }}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" style={{ marginBottom: "1rem" }}>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button 
              variant="primary" 
              type="submit"
              style={{ marginTop: "1rem" }}
            >
              Send Message
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
