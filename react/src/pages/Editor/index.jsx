import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './Editor.module.css';
import setaBaixo from '../../assets/seta-para-baixo.png';
import setaCima from '../../assets/seta-para-cima.png';
import lixo from '../../assets/trash.png';
import CirCheio from '../../assets/circulo.png';
import CirVazio from '../../assets/contorno-de-forma-de-circulo.png';
import BotaoFlutuante from '../../components/BotaoFlutuante';

export default function Editor() {
  const [blocos, setBlocos] = useState([]);

  useEffect(() => {
    fetchBlocos(); 
  }, []);

  const fetchBlocos = async () => {
    try {
      const response = await axios.get("https://localhost:8080");
      setBlocos(response.data);
    } catch (error) {
      console.error("Erro ao buscar blocos:", error);
    }
  };

  const addBloco = async (data) => {
    try {
      const response = await axios.post("https://localhost:8080", data);
      setBlocos([...blocos, response.data]);
      console.log("Produto adicionado com sucesso");
    } catch (error) {
      console.error("Não foi possível adicionar o produto", error);
    }
  };

  const updateBlocoField = async (id, field, value) => {
    const updatedBlocos = blocos.map(bloco =>
      bloco.id === id ? { ...bloco, [field]: value } : bloco
    );
    setBlocos(updatedBlocos);
    
    try {
      await axios.put(`https://localhost:8080/${id}`, { [field]: value });
    } catch (error) {
      console.error("Erro ao atualizar bloco:", error);
    }
  };

  const deleteBloco = async (id) => {
    try {
      await axios.delete(`https://localhost:8080/${id}`);
      setBlocos(blocos.filter(bloco => bloco.id !== id));
      console.log("Produto deletado com sucesso");
    } catch (error) {
      console.error("Erro ao deletar bloco:", error);
    }
  };

  const setCategoria = (id, categoria) => {
    updateBlocoField(id, 'categoria', categoria);
  };

  const toggleBloco = (id) => {
    setBlocos(blocos.map(bloco => (bloco.id === id ? { ...bloco, isOpen: !bloco.isOpen } : bloco)));
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        {blocos.map((bloco) => (
          <div key={bloco.id} className={styles.bloco}>
            <div className={styles.blocoHeader}>
              <span className={styles.blocoName}>{bloco.nome}</span>
              <div>
                <button className={styles.blocoToggle} onClick={() => toggleBloco(bloco.id)}>
                  {bloco.isOpen ? <img src={setaCima} alt="Fechar" /> : <img src={setaBaixo} alt="Abrir" />}
                </button>
                <button className={styles.blocoDelete} onClick={() => deleteBloco(bloco.id)}>
                  <img src={lixo} alt="Apagar" />
                </button>
              </div>
            </div>
            {bloco.isOpen && (
              <form className={styles.blocoForm} onSubmit={(e) => { e.preventDefault(); }}>
                <div className={styles.label}>
                  Nome:
                  <input
                    type="text"
                    value={bloco.nome}
                    onChange={(e) => updateBlocoField(bloco.id, 'nome', e.target.value)}
                    className={styles.input}
                  />
                </div>
                <div className={styles.label}>
                  ValorP:
                  <input
                    type="text"
                    value={bloco.valorP}
                    onChange={(e) => updateBlocoField(bloco.id, 'valorP', e.target.value)}
                    className={styles.input}
                  />
                </div>
                <div className={styles.label}>
                  Categoria:
                  <input
                    type="text"
                    value={bloco.categoria}
                    onChange={(e) => updateBlocoField(bloco.id, 'categoria', e.target.value)}
                    className={styles.input}
                  />
                </div>
                <div className={styles.label}>
                  ValorM:
                  <input
                    type="text"
                    value={bloco.valorM}
                    onChange={(e) => updateBlocoField(bloco.id, 'valorM', e.target.value)}
                    className={styles.input}
                  />
                </div>
                <div className={styles.label}>
                  Ingredientes:
                  <input
                    type="text"
                    value={bloco.ingredientes}
                    onChange={(e) => updateBlocoField(bloco.id, 'ingredientes', e.target.value)}
                    className={styles.input}
                  />
                </div>
                <div className={styles.label}>
                  ValorG:
                  <input
                    type="text"
                    value={bloco.valorG}
                    onChange={(e) => updateBlocoField(bloco.id, 'valorG', e.target.value)}
                    className={styles.input}
                  />
                </div>
                <div className={styles.buttonGroup}>
                  <button onClick={() => setCategoria(bloco.id, 'salgada')}>
                    <div className={styles.buttonContent}>
                      <img src={bloco.categoria === 'salgada' ? CirCheio : CirVazio} alt="Salgada" />
                      <span>Salgado</span>
                    </div>
                  </button>
                  <button onClick={() => setCategoria(bloco.id, 'doce')}>
                    <div className={styles.buttonContent}>
                      <img src={bloco.categoria === 'doce' ? CirCheio : CirVazio} alt="Doce" />
                      <span>Doce</span>
                    </div>
                  </button>
                  <button onClick={() => setCategoria(bloco.id, 'bebida')}>
                    <div className={styles.buttonContent}>
                      <img src={bloco.categoria === 'bebida' ? CirCheio : CirVazio} alt="Bebida" />
                      <span>Bebida</span>
                    </div>
                  </button>
                </div>
              </form>
            )}
          </div>
        ))}
        <button className={styles.addBloco} onClick={() => addBloco({ nome: '', categoria: '', valorP: '', valorM: '', ingredientes: '', valorG: '' })}>
          + Adicionar mais produtos
        </button>
      </div>
      <BotaoFlutuante/>
      <Footer />
    </div>
  );
}
