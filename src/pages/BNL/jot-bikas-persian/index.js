import React from 'react';
import 'react-h5-audio-player/lib/styles.css';
import BnlPages from '@/components/BnlPages';
import { useLocalStorage } from '@/hooks/useLocalStorage';


function JotBikasPersian() {
   // localStorage.setItem('BnlType', JSON.stringify('jot-bikas-persian'));
        const [, setBnlType] = useLocalStorage("BnlType", "jot-bikas-persian");
    return (
        <div>
            <BnlPages title="Bhai Nand Lal - Jot Bikas" apiName="jot-bikas-persian" tlPage="15" /> 
        </div>
    )
}

export default JotBikasPersian