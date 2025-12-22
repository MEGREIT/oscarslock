import React from "react";
import Head from "next/head";

// We define a local, pure CSS object to avoid using your 'utils' folder entirely.
const styles = {
  wrapper: {
    backgroundColor: "#fff",
    paddingTop: "12rem",
    minHeight: "100vh",
    fontFamily: "sans-serif",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 2rem 4rem 2rem",
  },
  title: {
    fontSize: "3rem",
    color: "#0a3161",
    marginBottom: "2rem",
    textAlign: "center" as const,
    fontWeight: "bold",
  },
  content: {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "#333",
  },
  sectionTitle: {
    marginTop: "2.5rem",
    marginBottom: "1rem",
    color: "#751318",
    fontSize: "1.8rem",
    fontWeight: "bold",
    borderBottom: "1px solid #eee",
    paddingBottom: "0.5rem",
  }
};

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Oscar’s Lock & Key Services</title>
        <meta name="description" content="Privacy Policy for Oscar’s Lock & Key Services" />
      </Head>
      
      <div style={styles.wrapper}>
        <div style={styles.container}>
          <h1 style={styles.title}>Privacy Policy</h1>
          <div style={styles.content}>
            <p><strong>Oscar’s Lock & Key Services Privacy Policy</strong></p>
            <p><strong>Last Updated 2024. This privacy policy is effective immediately.</strong></p>
            
            <h3 style={styles.sectionTitle}>Introduction</h3>
            <p>
              At Oscar’s Lock & Key Services (the “Company” or “We”), we respect your privacy and are committed to protecting it through our compliance with this policy.
            </p>
            
            <p>This policy applies to information we collect:</p>
            <ul style={{ marginLeft: "2rem", marginBottom: "1.5rem", listStyleType: "disc" }}>
              <li style={{ marginBottom: "0.8rem" }}>On this Website.</li>
              <li style={{ marginBottom: "0.8rem" }}>In email, text and other electronic messages between you and this Website.</li>
            </ul>

            <h3 style={styles.sectionTitle}>Information We Collect</h3>
            <p>
              We collect several types of information from and about users of our Website, including information by which you may be personally identified, such as name, postal address, email address, and telephone number.
            </p>

            <h3 style={styles.sectionTitle}>How We Use Your Information</h3>
            <p>
              We use information that we collect about you or that you provide to us to present our Website and its contents to you and to provide you with information, products, or services that you request from us.
            </p>

            <h3 style={styles.sectionTitle}>Children Under 13</h3>
            <p>
              Our Website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;