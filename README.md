# CTULib — Library Management System (MEVN)

> Full‑stack web application built with the **MEVN** architecture (**MongoDB, Express.js, Vue.js, Node.js**) and **Tailwind CSS**.

---

## English

### Overview
CTULib is a full‑stack library management web application.

### Tech Stack
- **Frontend:** Vue 3 (Vite), Vue Router, Pinia, Axios, Element Plus, Tailwind CSS (with DaisyUI)
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Auth/Security:** JWT with **Access Token** + **Refresh Token**, role-based authorization
- **Media storage:** Cloudinary (image upload/storage/optimization)

### Roles
- **Readers**
- **Library Staff (Admin)**

### Key Features
**For Readers**
- Browse/search the book catalog
- Manage a borrowing cart
- Create borrowing tickets/requests
- Track borrowing history and request status

**For Library Staff**
- Manage book inventory
- Manage publishers
- Process borrowing requests (approve / reject)

### Repository Structure
- `Backend/` — Express API server
- `Frontend/` — Vue 3 + Vite client

### Getting Started
#### Prerequisites
- Node.js (LTS recommended)
- MongoDB (local or cloud)
- A Cloudinary account (for image uploads)

#### 1) Backend
```bash
cd Backend
npm install
npm run start
