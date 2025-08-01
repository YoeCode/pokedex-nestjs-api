
import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { fetchAdapter } from 'src/common/adapters/fetch.adapter';

@Injectable()
export class SeedService {

  constructor(
    @InjectModel(Pokemon.name)
      private readonly pokemonModel: Model<Pokemon>,
      private readonly http: fetchAdapter
  ){}

  async executeSeed(){
    await this.pokemonModel.deleteMany({});
    const data = await this.http.get<PokeResponse>(`https://pokeapi.co/api/v2/pokemon?limit=200`)
    

    // Alternativa para insertar pokemons por lotes en la base de datos
    // const inserPromisesArray:Promise<any>[] = [];
    // data.results.forEach(({name, url})=>{
    //   const segments = url.split('/')
    //   const no = +segments[segments.length - 2]
    //   // await this.pokemonModel.insertMany({name, no})
    //   inserPromisesArray.push(
    //     this.pokemonModel.create({name, no})
    //   )
    // })
    // await Promise.all(inserPromisesArray)
    

    const pokemonToInsert: {name: string, no: number}[] = []

    data.results.forEach(({name, url})=>{
      const segments = url.split('/')
      const no = +segments[segments.length - 2]
      pokemonToInsert.push({name, no})
    })
    await this.pokemonModel.insertMany(pokemonToInsert)
    return 'Seed Executed!'
    
  }
}
