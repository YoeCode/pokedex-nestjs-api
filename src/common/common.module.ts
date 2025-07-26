import { Module } from '@nestjs/common';
import { fetchAdapter } from './adapters/fetch.adapter';

@Module({
    providers:[fetchAdapter],
    exports:[fetchAdapter]

})
export class CommonModule {}
