import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { expect, it } from 'vitest';
import { Layout } from './Layout';
import { Brand } from './Brand';

it('exibe apenas a logo clara', () => {
  const html = renderToStaticMarkup(<Brand />);
  expect(html).toContain('/brand/hiatlas-light-192.webp');
  expect(html).not.toContain('hiatlas-dark');
  expect((html.match(/<img\b/g) || []).length).toBe(1);
});

it('remove o seletor de tema e a assinatura ao lado da logo no cabeçalho', () => {
  const html = renderToStaticMarkup(<Layout path="/"><p>Conteúdo</p></Layout>);
  const header = html.match(/<header\b[\s\S]*?<\/header>/)![0];
  expect(header).not.toContain('Ativar tema');
  expect(header).not.toContain('by HiGamer');
  expect(header).toContain('Navegação principal');
  expect(html).toContain('HiAtlas by HiGamer');
});

it('mantém a aparência clara independentemente da preferência anterior ou do sistema', () => {
  const template = readFileSync(new URL('../../index.html', import.meta.url), 'utf8');
  const css = readFileSync(new URL('../styles.css', import.meta.url), 'utf8');
  expect(template).not.toContain('localStorage');
  expect(template).not.toContain('prefers-color-scheme');
  expect(css).toContain('color-scheme: light');
  expect(css).not.toMatch(/data-theme\s*=\s*["']?dark/);
});
