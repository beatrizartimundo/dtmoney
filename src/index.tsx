import ReactDOM from 'react-dom';
import {App} from './App';
import { createServer, Model } from 'miragejs'

createServer({
//utiliza o bd do mirage para armazenar os dados
  models:{
    transaction:Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id:1,
          title:'Freela',
          category: 'Dev',
          type: 'deposit',
          amount:3000,
          createAt:new Date('2021-02-12 09:00:00')
        },
        {
          id:2,
          title:'Mercado',
          category: 'casa',
          type: 'withdraw',
          amount:500,
          createAt:new Date('2021-02-14 10:00:00')
        },
      ]
    })
  },

  routes(){
    this.namespace = 'api'

    this.get('/transactions', () =>{
      return this.schema.all('transaction')

    })

    this.post('/transactions', (schema, request) =>{
        const data = JSON.parse(request.requestBody)
      //schema seria o bd,transaction o nome do bs que foi passado acima e data os dados
        return schema.create('transaction',data)
    })
  }
})

ReactDOM.render(
  
    <App />,
  
  document.getElementById('root')
);

