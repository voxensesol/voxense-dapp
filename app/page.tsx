export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-3xl w-full border border-white/10 rounded-3xl bg-white/5 backdrop-blur-xl p-8 shadow-xl">
        <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-2">
          Voxense · Spatial DePIN
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Sense the World. <span className="text-[var(--vox-neon,#C0FF00)]">Prove the Real.</span>
        </h1>
        <p className="text-sm md:text-base text-white/70 mb-6">
          This beta dashboard simulates the VOXENSE Proof-of-Sensing flow on Solana.
          Connect a wallet, register nodes, and visualize how real-world sensor
          data becomes cryptographic proofs in the Voxense Reality Layer.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <Card title="Nodes" desc="Register & manage sensing devices." />
          <Card title="Proof-of-Sensing" desc="View verified sensor submissions." />
          <Card title="Rewards" desc="Track VOX rewards per node." />
        </div>
      </div>
    </main>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-black/40 border border-white/10 p-4">
      <h2 className="font-medium mb-1">{title}</h2>
      <p className="text-xs text-white/60">{desc}</p>
    </div>
  );
}
