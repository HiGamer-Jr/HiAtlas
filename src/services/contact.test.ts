import { it, expect, vi } from "vitest";
import { sendContact } from "./contact";
it("não simula envio quando o canal não está configurado", async () => {
  await expect(sendContact({ consent: true }, "")).rejects.toThrow(
    "configurado",
  );
});
it("não envia dados sem consentimento", async () => {
  const transport = vi.fn();
  await expect(
    sendContact({ consent: false }, "https://example.com/contact", transport),
  ).rejects.toThrow("consentimento");
  expect(transport).not.toHaveBeenCalled();
});
it("exibe falha quando o serviço rejeita o envio", async () => {
  const transport = vi.fn().mockResolvedValue({ ok: false });
  await expect(
    sendContact({ consent: true }, "https://example.com/contact", transport),
  ).rejects.toThrow("enviar");
});
it("confirma somente quando o serviço aceita o envio", async () => {
  const transport = vi.fn().mockResolvedValue({ ok: true });
  await expect(
    sendContact({ consent: true }, "https://example.com/contact", transport),
  ).resolves.toBeUndefined();
});
