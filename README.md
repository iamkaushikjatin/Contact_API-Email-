# Contact API Email

This API allows you to send emails securely and efficiently using a simple POST request. It takes user input for the sender's name, email, subject, and message, and sends it to the specified email address.

## Features

- Send emails using Gmail's SMTP service.
- Supports name, email, subject, and message fields.
- Secure integration with environment variables for sensitive information.

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/iamkaushikjatin/Contact_API-Email.git
2. Navigate to project directory:
   ```bash
   cd Contact_API-Email
3. Install required dependencies:
   ```bash
   npm install
### Configuration
1. Create a .env file in the root directory of the project.
2. Add the following environment variables:
   ```bash
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASSWORD=your_app_password

APP_PASSWORD: Your Gmail application password (generated after enabling 2-Step Verification).

### Acknowledgments

1. [Nodemailer](https://nodemailer.com/) for sending emails through SMTP.
2. [Express](https://expressjs.com/) for building the API.