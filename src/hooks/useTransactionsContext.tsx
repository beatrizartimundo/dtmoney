import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api';

interface Transaction {
    id:number,
    title:string,
    amount:number,
    type:string,
    category:string,
    createdAt:string,
}
interface TransactionsProviderProps {
    children:ReactNode,
}
//Pick copia somente as informações escolhidas
// type TransactionInput = Pick<Transaction, 'title'|'amount'|'type'| 'category'>
//copia tudo menos o informado
// ReactNode aceita qualquer tipo react

interface TransactionsContextData {
    transactions : Transaction[],
    createTransaction: (transaction: TransactionInput) => Promise<void>
}

type TransactionInput = Omit<Transaction,'id'| 'createdAt'>

const TransactionContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
    );

export function TransactionsProvider({children}:TransactionsProviderProps){
    const [transactions,setTransactions] = useState<Transaction[]>([])

    useEffect(()=>{
       api.get('transactions')
       .then(response => setTransactions(response.data.transactions))

    },[])

    async function createTransaction(TransactionInput:TransactionInput){        

       const response = await api.post('/transactions',{
           ...TransactionInput, createdAt: new Date()
        })

       const  {transaction}  = response.data

       setTransactions([
           ...transactions,
           transaction
       ])
    }

    return(
        <TransactionContext.Provider value={{transactions,createTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}

export function useTransactions(){
    const context = useContext(TransactionContext)

    return context
}