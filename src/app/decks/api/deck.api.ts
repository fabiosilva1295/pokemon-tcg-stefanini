import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, combineLatestWith, map } from "rxjs";
import { Card } from "../models/card.model";
import { combineLatestInit } from "rxjs/internal/observable/combineLatest";

@Injectable({
    providedIn: 'root'
})
export class DeckApi {

    constructor(
        private http: HttpClient
    ) { }

    private url = 'https://api.pokemontcg.io/v2'
    private headers = new HttpHeaders({
        'x-api-key': '250b5521-96e7-4439-9e74-509461e2a6bb'
    })

    getCards(): Observable<Card[]> {
        return this.http.get<Card[]>(`${this.url}/cards`, { headers: this.headers }).pipe(
            map(res => res['data'])
        )
    }

    getFilterType(): Observable<any[]> {
        return this.getTypes().pipe(
            combineLatestWith(
                this.getSubtypes(),
                this.getSupertypes()
            ),
            map(([types, subtypes, supertypes]) => [types, subtypes, supertypes])
        )
    }

    getTypes(): Observable<string[]> {
        return this.http.get(`${this.url}/types`, { headers: this.headers }).pipe(
            map(res => res['data'])
        )
    }

    getSubtypes(): Observable<string[]> {
        return this.http.get(`${this.url}/subtypes`, { headers: this.headers }).pipe(
            map(res => res['data'])
        )
    }

    getSupertypes(): Observable<string[]> {
        return this.http.get(`${this.url}/supertypes`, { headers: this.headers }).pipe(
            map(res => res['data'])
        )
    }

    loadMoreCards(offset: number): Observable<Card[]> {
        return this.http.get<Card[]>(`${this.url}/cards?page=${offset}`, { headers: this.headers }).pipe(
            map(res => res['data'])
        )
    }
}


