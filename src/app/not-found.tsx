import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>404 — сторінку не знайдено</h1>
      <p>Такої сторінки не існує.</p>
      <Link href="/">На головну</Link>
    </main>
  );
}
