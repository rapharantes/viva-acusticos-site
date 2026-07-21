"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          padding: "24px",
          textAlign: "center",
          backgroundColor: "#282828",
          color: "#fff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <h1 style={{ fontSize: "24px", fontWeight: 700 }}>Ops, algo deu errado</h1>
        <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: "360px" }}>
          Tente novamente. Se o problema continuar, recarregue a página.
        </p>
        <button
          onClick={() => reset()}
          style={{
            borderRadius: "999px",
            padding: "12px 32px",
            fontWeight: 700,
            backgroundColor: "#FECB00",
            color: "#111",
            border: "none",
            cursor: "pointer",
          }}
        >
          Tentar novamente
        </button>
      </body>
    </html>
  );
}
