import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import { Spinner } from 'native-base';

import Routes from './routes';
import Store from './redux/store';
import {ROBOTO_FONT,ROBOTO_MEDIUM_FONT} from './consts';

const store = Store();
const ROBOTO = require('../node_modules/native-base/Fonts/Roboto.ttf');
const ROBOTO_MEDIUM = require('../node_modules/native-base/Fonts/Roboto_medium.ttf');

export default () => {

    /*fontsLoaded és el que vols modificar (true/false), i que et retorna el hook, declarat d'aquesta manera és com si fos variable d'estat
      setFontsLoaded és la funció a la qual li pases el valor que vols que tingui el primer paràmetre
      use State és el hook que utilitzes, simulant el fontsLoaded com a variable d'estat
    */
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        if(!fontsLoaded){
            loadFonts();
        }
    }, [fontsLoaded]); //només s'actualitza si fontsLoaded canvia, aquí seria com el segon paràmetre de useEffect

    const loadFonts = async() => {
        await Font.loadAsync({  //loadAsync crida fonts externes de manera asincrona
            [ROBOTO_FONT]: ROBOTO,
            [ROBOTO_MEDIUM_FONT]: ROBOTO_MEDIUM
        });
        setFontsLoaded(true);
    }
    if(!fontsLoaded){
        return <Spinner color="blue"/>
    }

    /*use Effect és un hook que ens carrega les fonts i ho fa en funció de
    fontsLoaded. la funció loadFonts es fa asyncrona i s'espera a que es carreguin
    les fonts per poder retornar-ho. i per bones pràctiques es fa fora del useEffect
    també he posat un spinner que mira si les fonts no estan carregades, es mostra */

    return (
    <Provider store={store}>
        <Routes/>
    </Provider>
    )};

