<p align="center">
  <img src="https://i.imgur.com/NWptykH.png" width="100%" alt="VOXENSE Banner"/>
</p>

<h1 align="center">💻 VOXENSE DApp — Spatial Dashboard</h1>

<p align="center">
  <b>Frontend interface for the Real-World Sensor Network.</b><br/>
  <i>Next.js • TailwindCSS • Solana Web3 • Supabase</i>
</p>

---

<p align="center">
  <img src="https://img.shields.io/badge/Status-Beta-green?style=flat-square"/>
  <img src="https://img.shields.io/badge/Network-Solana-9945FF?style=flat-square"/>
  <img src="https://img.shields.io/badge/Design-Glassmorphism-C0FF00?style=flat-square"/>
  <img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square"/>
</p>

---

## 🧠 Overview
**VOXENSE DApp** is the user-facing dashboard for the **VOXENSE Proof-of-Sensing (PoS)** protocol.  
It allows users to connect a Solana wallet, register devices, monitor real-time sensing data, and earn `$VOX` for verified activity.

> *Your gateway to sensing, verifying, and earning in the decentralized world.*

---

## ⚙️ Core Features

| Feature | Description |
|----------|-------------|
| 🔗 **Wallet Connect** | Connect Phantom, Solflare, or Backpack wallets |
| 🛰 **Node Management** | Register, view, or deactivate your sensing nodes |
| 💰 **Scan-to-Earn** | Receive `$VOX` rewards for verified sensor submissions |
| 📊 **Reality Layer** | View on-chain Proof-of-Sensing events in real time |
| 🧩 **Marketplace (Beta)** | Browse verified environmental datasets |
| 🔐 **Privacy Layer** | All hashes encrypted locally before submission |

---

## 🧱 Architecture
[Sensors / SDK]
↓
[VOXENSE API Layer]
↓
[Solana Program - voxense-core]
↓
[VOXENSE DApp UI]

yaml
Salin kode

### Stack
| Layer | Technology |
|--------|-------------|
| **Frontend** | Next.js + TypeScript |
| **Styling** | TailwindCSS + Framer Motion |
| **Wallets** | Solana Web3.js + Wallet Adapter |
| **Backend (API)** | Supabase Edge Functions |
| **Data Storage** | Arweave (metadata) + IPFS |
| **UI Design** | Dark Neon, Glassmorphism, 3D grid layout |

---

## 🧩 Folder Structure
voxense-dapp/
├── components/ # Reusable UI parts
├── pages/ # Next.js routes
├── hooks/ # Wallet & on-chain interactions
├── utils/ # Helper functions
├── styles/ # Tailwind configs
├── public/ # Assets (logos, banners)
└── package.json

yaml
Salin kode

---

## 🧾 Local Development

### Requirements
- Node.js ≥ 20  
- NPM or Yarn  
- Solana wallet (Phantom recommended)

### Setup
```bash
git clone https://github.com/voxensesol/voxense-dapp.git
cd voxense-dapp
npm install
npm run dev
Then open → http://localhost:3000

🔐 Environment Variables
Create .env.local file:

bash
Salin kode
NEXT_PUBLIC_SOLANA_NETWORK=devnet
NEXT_PUBLIC_RPC_URL=https://api.devnet.solana.com
NEXT_PUBLIC_SUPABASE_URL=https://xyz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
💰 User Flow — Scan-to-Earn
Connect your wallet

Authorize your device / SDK

Submit sensor hash payload (GPS, Audio, Ambient, Motion)

Proof verified → $VOX reward credited

Check history in Reality Layer panel

Every scan contributes to the global verifiable map.

🎨 UI Design Philosophy
Theme: Dark + Neon Green (#C0FF00)

Style: Glassmorphism, minimal shadows, mono fonts

Motion: Framer Motion for animated sensing cards

Tone: Futuristic, readable, data-centric

🧰 Scripts
bash
Salin kode
npm run dev     # Run development server
npm run build   # Production build
npm run lint    # Check code quality
npm run export  # Static export (if needed)
📡 Integration With VOXENSE Core
The DApp communicates with the on-chain PoS smart contracts through:

@solana/web3.js for transactions

Anchor IDL (generated from voxense-core)

WebSocket subscription to monitor new proofs

