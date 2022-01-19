import { After, AfterAll, Before, BeforeAll, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from 'playwright'
import { BrowserWorld } from './world';

setDefaultTimeout(30000)

BeforeAll(async function() {
  BrowserWorld.browser = await chromium.launch()
  const context = BrowserWorld.browser.contexts()[0] || await BrowserWorld.browser.newContext()
  BrowserWorld.page = context.pages()[0] || await context.newPage()
})

AfterAll(async function() {
  await BrowserWorld.browser.close()
})