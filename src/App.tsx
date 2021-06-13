import {useState} from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal} from "./components/NewTransactionModal";

import Modal from 'react-modal'
import { TransactionsProvider } from "./hooks/useTransactionsContext";

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false)

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true)
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false)
    }
    //  repassa para todos os componentes atraves do context
  return (
    
    <TransactionsProvider>
    {/* repassa a função do App pro header */}
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle/>
    </TransactionsProvider>
  );
}


