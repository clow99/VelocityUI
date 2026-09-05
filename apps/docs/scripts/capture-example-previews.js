// Run with playwright-cli run-code --filename after opening the local /examples page.
async (page) => {
  const origin = page.url().split('/').slice(0, 3).join('/');
  if (!['http://127.0.0.1:3000', 'http://localhost:3000'].includes(origin)) {
    throw new Error('Open the local development preview on port 3000 first.');
  }
  await page.context().addInitScript(() => {
    localStorage.setItem('vui-docs-theme', 'default');
    localStorage.setItem('vui-docs-density', 'comfortable');
  });
  await page.setViewportSize({ width: 1280, height: 1000 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(origin + '/examples');
  const slugs = await page.locator('main a[href^="/examples/"]').evaluateAll(links =>
    [...new Set(links.map(link => link.getAttribute('href').split('/').pop()))]);
  const captures = [];
  for (const slug of slugs) {
    await page.goto(origin + '/examples/' + slug);
    await page.waitForLoadState('networkidle');
    await page.evaluate(() => document.fonts.ready);
    const main = page.locator('.example-main');
    const box = await main.boundingBox();
    await page.screenshot({
      path: `output/playwright/example-captures/${slug}.png`,
      clip: { x: box.x + 24, y: box.y + 24, width: box.width - 48, height: Math.min(740, box.height - 48) },
      caret: 'initial', animations: 'disabled',
    });
    captures.push(slug);
  }
  await page.goto(origin + '/examples');
  return { captures };
}
