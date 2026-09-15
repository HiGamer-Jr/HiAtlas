export async function sendContact(
  data: Record<string, unknown> & { consent: boolean },
  endpoint: string,
  transport: typeof fetch = fetch,
): Promise<void> {
  if (!data.consent)
    throw new Error("É necessário informar seu consentimento para enviar.");
  if (!endpoint)
    throw new Error(
      "O canal de envio ainda não está configurado. Seus dados não foram enviados.",
    );
  const response = await transport(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok)
    throw new Error(
      "Não foi possível enviar sua mensagem. Tente novamente em alguns instantes.",
    );
}
