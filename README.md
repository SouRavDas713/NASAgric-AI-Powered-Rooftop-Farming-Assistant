
# 🌱 NASAgric — AI-Powered Rooftop Farming Assistant

### 🚀 NASA Space Apps Challenge 2026 | Team NASAgric

> **Turning NASA Data into Greener Rooftops — Growing a Sustainable Future, One Rooftop at a Time!** 🌍🌿

## 🌐 Live Demo

[🚀 Explore NASAgric](https://nasagric-demo.netlify.app)

NASAgric is an AI-powered rooftop farming assistant designed to help urban residents make smarter farming decisions using NASA Earth observation data, weather information, and artificial intelligence.

Our mission is to transform unused urban rooftops into productive green spaces by recommending suitable crops, generating seasonal planting plans, and providing intelligent watering schedules and weather alerts.

---

## 🌍 The Problem

Urban rooftop farming offers an opportunity to increase greenery and support sustainable food production. However, rooftop gardeners often face challenges such as:

- 🌱 Choosing crops suitable for their rooftop environment.
- 🌡️ Understanding how temperature and extreme heat affect plant growth.
- 🌧️ Predicting when rainfall may reduce the need for watering.
- 💧 Determining appropriate watering schedules.
- 📅 Planning seasonal crop cultivation throughout the year.

**NASAgric aims to address these challenges through personalized, data-driven farming recommendations.**

---

## 💡 Our Solution

NASAgric combines NASA Earth observation data, weather information, crop requirements, and AI-based soil image analysis to provide personalized recommendations for rooftop gardeners.

Users provide their location, pot dimensions, pot type, and a soil image. The proposed system analyzes these inputs alongside environmental and agricultural data to recommend suitable crops and provide practical farming guidance.

---

## ✨ Key Features

### 📍 1. Location-Based Environmental Analysis
- Accepts the user's city or geographic coordinates.
- Supports location-based environmental analysis.
- Helps generate recommendations tailored to local conditions.

### 🪴 2. AI-Powered Soil Analysis
- Uses a Convolutional Neural Network (CNN) to analyze soil images.
- Aims to identify soil types and relevant visual characteristics.
- Uses soil analysis as an input for crop suitability recommendations.

### 🛰️ 3. NASA Earth Observation Data
NASAgric aims to integrate relevant NASA Earth science datasets to support environmental analysis and rooftop farming decisions.

Potential data sources include:

| Data Source | Potential Application |
|---|---|
| NASA POWER | Solar radiation, temperature, and meteorological information |
| NASA Earthdata | Access to Earth observation datasets |
| MODIS vegetation products | Vegetation indices and land-surface observations |
| NASA precipitation products | Rainfall and precipitation analysis |

*The exact datasets, products, and variables will be selected and validated during development. These are potential sources, not a claim that every integration is already implemented.*

### 🌦️ 4. Weather Monitoring and Alerts
- Uses weather forecasts and relevant historical information.
- Considers temperature, rainfall, and heat conditions.
- Plans to provide heat alerts and rain alerts.
- Helps users avoid unnecessary watering when rainfall is expected.

### 🌱 5. Intelligent Crop Recommendations
- Recommends suitable crops based on environmental conditions and crop requirements.
- Considers pot size, seasonal suitability, and water requirements.
- Provides example recommendations for crops such as tomatoes, chilies, and spinach.

### 📅 6. One-Year Planting Plan
- Generates a proposed year-round planting calendar.
- Organizes crop recommendations by season.
- Helps users plan what to grow and when to grow it.

### 💧 7. Smart Watering Schedule
- Estimates watering requirements using available environmental data and crop needs.
- Considers weather conditions and expected rainfall.
- Aims to reduce water waste while supporting healthy plant growth.

---

## ⚙️ How It Works

The proposed system follows five main stages:

1. **User Input:** Collects location, pot information, and a soil image.
2. **Soil Analysis:** Uses a CNN to analyze the uploaded soil image.
3. **Data Collection:** Retrieves relevant NASA environmental data, weather information, and crop requirements.
4. **AI-Based Analysis:** Combines the available information to generate personalized recommendations.
5. **Personalized Output:** Provides crop recommendations, a one-year planting plan, watering schedules, and weather alerts.

### 🔄 Proposed System Workflow


              USER INPUT
   Location | Soil Image | Pot Information
                    |
                    v
          CNN-Based Soil Analysis
                    |
                    v
       +------------+------------+
       |            |            |
       v            v            v
   NASA Data    Weather Data   Crop Dataset
       |            |            |
       +------------+------------+
                    |
                    v
             AI-BASED ANALYSIS
                    |
          +---------+---------+
          |         |         |
          v         v         v
        Crop      One-Year   Smart Watering
   Recommendations Plan       Schedule
                    |
                    v
              Weather Alerts
````

*This workflow illustrates the proposed architecture. Individual components will be implemented and validated during development.*

---

## 🛰️ NASA Data and Technology

NASA Earth science resources can provide valuable environmental information for understanding conditions relevant to agriculture.

We intend to investigate suitable datasets for:

* 🌡️ Temperature and environmental conditions.
* ☀️ Solar radiation and sunlight availability.
* 🌧️ Precipitation and rainfall patterns.
* 🌿 Vegetation indices and environmental observations.
* 📍 Location-based environmental analysis.

### 🛠️ Planned Technology Stack

| Component             | Planned Technology                               |
| --------------------- | ------------------------------------------------ |
| Frontend              | React.js                                         |
| Styling               | Tailwind CSS                                     |
| Backend               | Node.js / Express.js                             |
| Soil Image Analysis   | Convolutional Neural Network (CNN)               |
| Recommendation Engine | Machine Learning                                 |
| Environmental Data    | NASA Earth science datasets                      |
| Weather Information   | Weather APIs                                     |
| Crop Recommendations  | Agricultural datasets and crop requirement rules |

*The technology stack and integrations may evolve as the project develops.*

---

## 🚧 Current Project Status

### Prototype Stage — Work in Progress

We are participating in the **NASA Space Apps Challenge 2026** with an idea that combines space science, artificial intelligence, and sustainable urban agriculture.

As students of the **International Islamic University Chittagong (IIUC)**, we are currently balancing our academic examinations with our passion for innovation.

> 🎓 **We are IIUC students today, exam warriors this week, and rooftop farming innovators tomorrow! 🌱🚀**

NASAgric is currently a prototype that demonstrates our vision, proposed architecture, and planned functionality.

**Our main development phase is scheduled to begin after October 12, 2026, when our examinations are over.**

We believe great innovations do not always begin with a finished product. Sometimes, they begin with an idea, a team, and the determination to build something meaningful.

### Our Development Roadmap

* [x] Develop the initial project concept.
* [x] Design the proposed system architecture.
* [x] Identify potential NASA data sources.
* [x] Define the main features and user workflow.
* [ ] Finalize and validate relevant NASA datasets.
* [ ] Develop the soil image analysis model.
* [ ] Integrate weather data and crop requirements.
* [ ] Develop the AI-based recommendation engine.
* [ ] Implement personalized watering schedules.
* [ ] Develop heat and rainfall alerts.
* [ ] Integrate the components into a working application.
* [ ] Test and evaluate the complete system.

*The checked items represent initial planning and prototype design, not necessarily completed software implementations.*

---

## 👥 Meet Our Team

We are a team of students from the **International Islamic University Chittagong (IIUC), Bangladesh**, working together to explore how space-based environmental data and AI can support sustainable urban agriculture.

| Team Member             |
| ----------------------- |
| Sree Sourav Chandra Das |
| Bushra Mohammed Harun   |
| Tanvir Hossain Shehab   |
| Shamsul Huda Md Nahian  |
| Md. Mahmud Khan Munna   |

---

## 🎯 Our Vision

We envision a future where every urban rooftop has the potential to become a productive green space.

By combining Earth observation data, weather intelligence, and artificial intelligence, NASAgric aims to make rooftop farming more accessible, efficient, and sustainable.

Our long-term goals are to:

* 🌱 Encourage sustainable urban agriculture.
* 🛰️ Explore practical applications of NASA Earth observation data.
* 💧 Promote responsible water management.
* 🌍 Support greener and more environmentally conscious cities.
* 🤖 Make data-driven farming recommendations accessible to everyday users.

---

## 🏆 Competition Information

* **Event:** NASA Space Apps Challenge 2026
* **Project:** NASAgric — AI-Powered Rooftop Farming Assistant
* **Team:** Team NASAgric
* **Institution:** International Islamic University Chittagong (IIUC)
* **Country:** Bangladesh

---

## 🤝 Contributions and Feedback

NASAgric is currently in its prototype and planning stage.

We welcome ideas, technical feedback, and suggestions related to:

* NASA Earth observation datasets.
* AI-based soil image analysis.
* Smart irrigation and water management.
* Urban agriculture and crop recommendation systems.
* Sustainable rooftop farming.

Your feedback can help us turn this initial concept into a more practical and effective solution.

---

## 📜 Disclaimer

NASAgric is an experimental project developed for the NASA Space Apps Challenge 2026.

The proposed features and recommendations are subject to implementation, data availability, model validation, and testing. The prototype should not be considered a fully operational agricultural advisory system.

NASA datasets and services remain subject to their respective terms of use and attribution requirements.

---

## 🌱 NASAgric

### Turning NASA Data into Greener Rooftops.

**Built with curiosity. Powered by innovation. Inspired by a greener future.** 🌍🚀

---
