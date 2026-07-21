# Checkamo Platform

Checkamo is a comprehensive verification platform designed to build trust between individuals and businesses. It connects people who need something verified (buyers, investors, employers) with local experts (Verifiers) who can validate items, properties, documents, or businesses on the ground. Checkamo acts as an intelligent trust advisor, backed by AI and real human verification.

## 🌟 The Flow of Engagements & Payments

The Checkamo ecosystem consists of three main components: the **Home Page**, the **User App**, and the **Verifier App**.

### 1. User App
The User App is where individuals and businesses go to request verifications. 
- **Requesting:** A user wants to verify a property, an electronics purchase, or a business. They can first consult **ABRAHAM** (our AI Trust Advisor) to analyze listings, documents, or chats for red flags. 
- **Engagement:** If physical verification is needed, the user submits a verification request outlining what needs to be checked.
- **Payment:** Users deposit funds into their wallet. Payments are held in escrow (secured by Monnify) until the verification is successfully completed and the user is satisfied.

### 2. Verifier App
The Verifier App is for vetted professionals (Verifiers) who perform the on-the-ground checks.
- **Job Acceptance:** Verifiers receive verification requests in their area. They can review and accept jobs based on their expertise.
- **Execution:** The verifier visits the location, takes photos/videos, fills out the required report, and submits it through the app.
- **Payouts:** Once the user approves the report, the escrowed funds are released to the verifier's wallet. Verifiers can then withdraw their earnings to their local bank accounts instantly using Monnify.

## 🤝 Partners & Integrations

Checkamo leverages top-tier partners to provide a secure and intelligent experience:

- **[Monnify](https://monnify.com/):** Powers our entire payment infrastructure. From virtual accounts for wallet funding, secure escrow for verification jobs, to instant payouts and withdrawals for our verifiers. It ensures that all financial transactions are safe, fast, and reliable.
- **[Google Gemini](https://deepmind.google/technologies/gemini/):** One of the core AI engines powering **ABRAHAM**. Gemini helps in deep multimodal analysis—processing images, understanding complex documents, and identifying sophisticated scam patterns in text conversations.
- **[DeepSeek](https://deepseek.com/):** The secondary AI engine behind **ABRAHAM**. DeepSeek assists in logical reasoning, risk assessment, and providing structured, highly accurate recommendations to users before they make critical decisions.

## 💻 Tech Stack

The Checkamo platform is built using a modern, scalable, and robust technology stack:

- **Frontend (Home, User App, Verifier App, Admin):** Built with [Next.js](https://nextjs.org/) (React) for server-side rendering, incredible performance, and SEO optimization. Styled with [Tailwind CSS](https://tailwindcss.com/) for beautiful, responsive UI.
- **Backend (API Services):** Built with [NestJS](https://nestjs.com/) (Node.js) using TypeScript, providing a scalable, maintainable, and enterprise-grade architecture.
- **Database:** MongoDB with Mongoose for flexible and fast data storage.
- **Authentication:** JWT-based secure authentication.
- **AI Integration:** Direct integrations with Gemini and DeepSeek APIs for ABRAHAM.
- **Payment Gateway:** Monnify API for wallets, escrow, and disbursements.
