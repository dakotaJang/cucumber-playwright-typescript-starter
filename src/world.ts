import { Browser, BrowserContext, chromium, Page, } from 'playwright'
import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber'

export class BrowserWorld extends World {
    public static browser: Browser;
    public browser: Browser;
    public static page: Page;
    public page: Page;

    constructor(options: IWorldOptions) {
        // needed so `attach`, `log` and `parameters` are properly set
        super(options)
        this.browser = BrowserWorld.browser
        this.page = BrowserWorld.page
    }
}

setWorldConstructor(BrowserWorld)