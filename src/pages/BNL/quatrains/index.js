import React from 'react';
import 'react-h5-audio-player/lib/styles.css';
import BnlPages from '@/components/BnlPages';
import { useLocalStorage } from '@/hooks/useLocalStorage';


function Rubaayee() {
    // localStorage.setItem('BnlType', JSON.stringify("quatrains"));
     const [, setBnlType] = useLocalStorage("BnlType", "quatrains");
    return (
        <div>
            <BnlPages title="Bhai Nand Lal - Rubaayee" apiName="quatrains" tlPage="19"/> 
        </div>
    )
}

export default Rubaayee