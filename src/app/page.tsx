import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-amber-200">
      <section className="bg-white p-6 rounded-2xl shadow-2xl text-center max-w-md">
        <h1 className="text-2xl font-bold mb-2">Welcome to Tailwind CSS</h1>
        <p className="text-gray-600">This is a simple card component to demonstrate Tailwind.</p>
        <Button variant="destructive">Click Me</Button>
      </section>
    </main>
  );
}
