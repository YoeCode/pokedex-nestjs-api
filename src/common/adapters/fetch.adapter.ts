import { Injectable } from "@nestjs/common";
import { Httpadapter } from "../interfaces/http-adapter.interfaces";

@Injectable()
export class fetchAdapter implements Httpadapter{
    async get<T>(url: string): Promise<T> {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data as T;
        } catch (error) {
            throw new Error(`This is an error = Check logs`);
        }
    }

}