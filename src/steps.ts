import { Given, Then } from '@cucumber/cucumber'
import { BrowserWorld } from './world'

/**
 * Given "http://example.com"
 */
Given(/^\"(.*)\"$/i, async function(this: BrowserWorld, url) {
  await this.page.goto(url)
})

/**
 * Then save screenshot
 */
Then('save {string} screenshot', async function(this: BrowserWorld, name: string) {
  await this.page.screenshot({ path: `./data/${name}.png`})
})