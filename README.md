# MyPropertyFact Chatbot 🏡🤖

A smart real estate assistant chatbot for **MyPropertyFact**, designed to help users find properties based on location, budget, and type.

## 🌟 Features
- **Smart Recommendations**: Suggests properties based on user preferences.
- **Top 3 Projects**: Shows the best 3 options at a time to avoid overwhelming users.
- **Visual Cards**: Displays project images, pricing, and builder details.
- **Interactive UI**:
  - Floating Chat Icon
  - Smooth Scrolling with **Smart Arrow Indicators** ➡️
  - Formatted Messages & Buttons
- **Lead Capture**: Collects user details for enquiries.
- **Admin & Backend**:
  - Node.js & Express Server
  - MySQL Database Integration
  - Image API Integration with SEO-friendly Slugs

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- MySQL Database setup

### Installation
1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/mpf-chatbot.git
    cd mpf-chatbot
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Configure Database**:
    - Update `botConfig.js` or `.env` with your MySQL credentials.
    - Run migration scripts if available (e.g., `node migrate_db.js`).

### Running the App
Start the server:
```bash
npm start
```
The chatbot will be available at `http://localhost:3000`.

## 🛠️ Tech Stack
- **Frontend**: HTML, CSS, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **API**: Axios for external property data

## 📝 API Integration
- **Images**: `https://apis.mypropertyfact.in/get/images/properties/<slug>/<filename>`
- **Projects**: `https://apis.mypropertyfact.in/projects/search-by-type-city-budget`

## 🤝 Contributing
1.  Fork the project
2.  Create a feature branch
3.  Commit your changes
4.  Push to the branch
5.  Open a Pull Request
