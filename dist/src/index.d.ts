export declare class ExpoMixpanelAnalytics {
    ready: boolean;
    token: string;
    userId?: string | null;
    clientId?: string;
    userAgent?: string | null;
    appName?: string;
    appId?: string;
    appVersion?: string;
    screenSize?: string;
    platform?: string;
    model?: string;
    osVersion: string | number;
    queue: any[];
    superProps: any;
    constructor(token: any);
    register(props: any): void;
    track(name: string, props?: any): void;
    identify(userId?: string): void;
    reset(): void;
    people_set(props: any): void;
    people_set_once(props: any): void;
    people_unset(props: any): void;
    people_increment(props: any): void;
    people_append(props: any): void;
    people_union(props: any): void;
    people_delete_user(): void;
    _flush(): void;
    _people(operation: any, props: any): void;
    _pushEvent(event: any): Promise<Response>;
    _pushProfile(data: any): Promise<Response>;
}
export default ExpoMixpanelAnalytics;
