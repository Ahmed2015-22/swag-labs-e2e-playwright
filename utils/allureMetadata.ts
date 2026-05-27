import { test } from "@playwright/test";
import * as allure from "allure-js-commons"; 
export const setAllureMetadata = (data: {
    epic: string;
    feature: string;
    story: string;
    owner: string;
    link: string;
}) => {
    test.beforeEach(async () => {
        await allure.epic(data.epic);
        await allure.feature(data.feature);
        await allure.story(data.story);
        await allure.owner(data.owner);
        await allure.link(data.link, "Website");
    });
};

export const setTestMetadata = (metadata: {
    tag: string;
    description: string;
    tmsLink: string;
    priority: number;
    severity: string;
}) => {
    test.info().annotations.push({ type: 'tag', description: metadata.tag });
    test.info().annotations.push({ type: 'priority', description: metadata.priority.toString() });
    allure.tag(metadata.tag);
    allure.description(metadata.description);
    allure.testCaseId(metadata.tmsLink);
    allure.severity(metadata.severity as any);
};