import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Drink from 'App/Models/Drink'

export default class extends BaseSeeder {
  public async run() {
    await Database.table<Drink>('drinks').multiInsert([
      {
        name: 'Caipirinha',
        slug: 'caipirinha',
        image: 'caipirinha.png',
        instructions: `
          Pegue o limão coloque-o na horizontal e retire as duas pontas, vire-o na vertical e corte-o ao meio, retire os meio (parte branca) do limão e fatie.
          Coloque o limão fatiado e duas colheres bem cheias de açúcar dentro de um copo próprio para a bebida e com um socador esprema até que saia todo o suco do limão
          Coloque pedras de gelo até quase encher o copo (aproximadamente 12 pedras pequenas de gelo) e encha o copo com a cachaça.
          Mexa bem com uma colher ou coloque em uma coqueteleira e sirva-se!
        `,
        category_id: 1,
      },
      {
        name: 'Rabo-de-galo',
        slug: 'rabo-de-galo',
        image: 'rabo-de-galo.png',
        instructions: `
          Adicione 60 mL de cachaça, 60 mL de cachaça, 30 mL de Cynar e 1 gota de angostura no mixing glasse misture com uma bailarina.
          Sirva num copo baixo e decore com um twist de laranja.
        `,
        category_id: 1,
      },
      {
        name: 'Batida de vinho com abacaxi',
        slug: 'batida-de-vinho-com-abacaxi',
        image: 'vinho-com-abacaxi.png',
        instructions: `
        Coloque 1 dose de vinho tinto seco, 2 doses de leite condensado,
        2 rodelas de abacaxi, 2 doses de creme de leite e
        gelo triturado a gosto no liquidificador, bata, e sirva em
        um copo enfeitado com abacaxi.
      `,
        category_id: 3,
      },
      {
        name: 'Batidinha de vinho',
        slug: 'batidinha-de-vinho',
        image: 'batidinha-de-vinho.png',
        instructions: `
        Coloque 1 garrafa de vinho tinto seco, 1 lata de leite condensado,
        e cubos de gelo no liquidificador, bata, e sirva em
        um copo fundo.
      `,
        category_id: 3,
      },
    ])
  }
}
