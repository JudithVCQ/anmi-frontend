const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4000";

console.log("API_URL FRONT:", API_URL);

export async function enviarPregunta(pregunta: string) {
    try {
        const res = await fetch(`${API_URL}/chat`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ pregunta }),
        });

        console.log("Respuesta /chat status:", res.status);

        if (!res.ok) {
            const text = await res.text().catch(() => "");
            console.error("Error HTTP /chat:", res.status, text);
            throw new Error("HTTP no OK");
        }

        const data = await res.json();
        console.log("JSON /chat:", data);
        return data;
    } catch (err) {
        console.error("ERROR FETCH /chat:", err);
        throw err;
    }
}
