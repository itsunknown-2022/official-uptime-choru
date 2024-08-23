const events = require("events");
events.defaultMaxListeners = 20;
const puppeteer = require("puppeteer-core");
const freeport = require("freeport");
const ProxyChain = require("proxy-chain");
const {
  exec
} = require("node:child_process");
const {
  promisify
} = require("node:util");
const fs = require("fs/promises");
const gradient = require("gradient-string");
async function monitor(_0x23c2e5) {
  try {
    const _0x59d3b8 = process.env.PASS;
    const _0x259057 = process.env.USER;
    const _0x1a712d = await promisify(freeport)();
    const _0x5826fd = new ProxyChain.Server({
      'port': _0x1a712d
    });
    _0x5826fd.listen(() => console.log("Proxy server listening on port " + _0x1a712d));
    const {
      stdout: _0x4dd730
    } = await promisify(exec)("which chromium");
    const _0x2a95d9 = await puppeteer.launch({
      'headless': false,
      'executablePath': _0x4dd730.trim(),
      'ignoreHTTPSErrors': true,
      'args': ["--ignore-certificate-errors", "--disable-gpu", "--disable-software-rasterizer", "--disable-dev-shm-usage", "--no-sandbox", "--proxy-server=127.0.0.1:" + _0x1a712d]
    });
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
defaultViewport: null
});
  const page = await browser.newPage();

  await page.setViewport({
    width: 0,
    height: 0,
    isMobile: true,
    hasTouch: true
  });

  // Other code here

  await browser.close();
})();
    async function _0x41f41d() {
      try {
        await _0x5cfc1e.goto("https://replit.com/login", {
          'waitUntil': "networkidle2"
        });
        await _0x5cfc1e.type("input[name=\"username\"]", _0x259057, {
          'delay': 0x64
        });
        await _0x5cfc1e.type("input[name=\"password\"]", _0x59d3b8, {
          'delay': 0x190
        });
        await _0x5cfc1e.click("[data-cy=\"log-in-btn\"]");
        await _0x5cfc1e.waitForNavigation({
          'waitUntil': "networkidle2"
        });
      } catch (_0x39853b) {
        console.error("Login failed, retrying...", _0x39853b);
        await _0x5cfc1e.waitForTimeout(5000);
        await _0x41f41d();
      }
    }
    await _0x41f41d();
    await _0x5cfc1e.goto(_0x23c2e5, {
      'waitUntil': "networkidle2"
    });
    process.on("SIGINT", async () => {
      console.log("Shutting down...");
      await _0x2a95d9.close();
      _0x5826fd.close(() => console.log("Proxy server closed"));
      process.exit();
    });
    process.on("SIGTERM", async () => {
      console.log("Terminating...");
      await _0x2a95d9.close();
      _0x5826fd.close(() => console.log("Proxy server closed"));
      process.exit();
    });
  } catch (_0x41a82d) {
    console.error("Error:", _0x41a82d);
  }
}
(async () => {
  const _0x2634e5 = process.env.REPL;
  monitor(_0x2634e5);
})();
setTimeout(() => {
  const _0x3f99b3 = _0x45937c => {
    const _0x2a3826 = gradient(["cyan", "lime"]).multiline(_0x45937c);
    console.log(_0x2a3826);
  };
  _0x3f99b3("Welcome to the monitor script!\nMonitoring by: Choru\n24/7 server Replit");
}, 3000);
