import React from 'react';
import 'react-h5-audio-player/lib/styles.css';
import BnlPages from '@/components/BnlPages';
import { useLocalStorage } from '@/hooks/useLocalStorage';


function Rahitnama() {
    //localStorage.setItem('BnlType', JSON.stringify('rahitnama'));
     const [, setBnlType] = useLocalStorage("BnlType", "rahitnama");
    return (
        <div>
            <BnlPages title="Bhai Nand Lal - Rahitnama" apiName="rahitnama" tlPage="4" /> 
        </div>
    )
}

export default Rahitnama