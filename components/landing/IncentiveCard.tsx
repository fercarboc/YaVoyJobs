import React from "react";
import styles from "../landing/Landing.module.css";

interface IncentiveCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  color?: string;
}

const IncentiveCard: React.FC<IncentiveCardProps> = ({ title, description, icon, color }) => (
  <div className={styles["incentive-card"]} style={{ borderColor: color || "#3A6EA5" }}>
    <div className={styles["incentive-icon"]}>{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default IncentiveCard;
