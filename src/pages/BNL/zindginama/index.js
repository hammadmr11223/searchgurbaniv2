import React from 'react';
import 'react-h5-audio-player/lib/styles.css';
import BnlPages from '@/components/BnlPages';
import { useLocalStorage } from '@/hooks/useLocalStorage';


function Zindginama() {
    // localStorage.setItem('BnlType', JSON.stringify("zindginama"));
     const [, setBnlType] = useLocalStorage("BnlType", "zindginama");
    return (
        <div>
            <BnlPages title="Bhai Nand Lal - Zindginama" apiName="zindginama" tlPage="42"/> 
        </div>
    )
}

export default Zindginama