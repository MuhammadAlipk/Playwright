// @ts-check
const base = require('@playwright/test')
import test from 'node:test';
import { DemoPage } from '../pages/demo-page'

exports.test = base.test.extend({

    demopage : async ({page}, use) => 
        {

        await use(new DemoPage(page));
    },

})