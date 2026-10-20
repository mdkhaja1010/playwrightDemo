import { APIRequestContext, APIResponse } from '@playwright/test';

export class APIHelper {
    private request: APIRequestContext;
    private baseURL: string;
    private token: string;

    constructor(
        request: APIRequestContext,
        baseURL: string,
        token: string
    ) {
        this.request = request;
        this.baseURL = baseURL;
        this.token = token;
    }

    private getHeaders() {
        return {
            Authorization: `Bearer ${this.token}`,
            'Content-Type': 'application/json'
        };
    }

    async doGet(endpoint: string): Promise<APIResponse> {
        return await this.request.get(
            `${this.baseURL}${endpoint}`,
            {
                headers: this.getHeaders()
            }
        );
    }

    async doPost(
        endpoint: string,
        data: object
    ): Promise<APIResponse> {
        return await this.request.post(
            `${this.baseURL}${endpoint}`,
            {
                headers: this.getHeaders(),
                data
            }
        );
    }

    async doPut(
        endpoint: string,
        data: object
    ): Promise<APIResponse> {
        return await this.request.put(
            `${this.baseURL}${endpoint}`,
            {
                headers: this.getHeaders(),
                data
            }
        );
    }

    async doDelete(endpoint: string): Promise<APIResponse> {
        return await this.request.delete(
            `${this.baseURL}${endpoint}`,
            {
                headers: this.getHeaders()
            }
        );
    }
}